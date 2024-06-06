from flask import Blueprint, request, jsonify, session
from prediction_package.get_prediction_cgpa import predict_admission
import pandas as pd
from models import db, University, User_Details, Department
from flask_cors import cross_origin

prediction = Blueprint("prediction", __name__, static_folder="static", template_folder="templates")


@cross_origin(supports_credentials=True, methods=['GET'])
@prediction.route('/get', methods=['GET'])
def get_prediction():
    if 'id' in session or True:
        data = request.json
        # user_id = data.get('user_id')
        user_id = session.get('id')
        user_id = 1
        uni_rank = data.get('uni_rank')
        uni = University.query.filter_by(rank=uni_rank).first()
        uni_id = uni.id
        program = data.get('program')

        # university = University.query.filter_by(id=uni_id).first()
        user = User_Details.query.filter_by(id=user_id).first()
        dept = Department.query.filter_by(name=program, uni_id=uni_id).first().mapped_id
        rank = uni_rank
        cgpa = user.cgpa

        ans = round(predict_admission(university_rank=rank, department=dept, undergrad_cgpa=cgpa) * 100, 2)

        return jsonify({"success": True, "probability": ans}), 201


@prediction.route('/add', methods=['POST'])
def add_data():
    data = request.json
    rank = data.get('rank')
    cgpa = data.get('cgpa')
    dept = data.get('dept')
    gre = data.get('gre')
    decision = data.get('decision')

    update_csv(rank, cgpa, dept, decision)


def update_csv(rank, cgpa, dept, decision):
    data = {'University': [rank], 'Program': [dept], 'Decision': [decision], 'GPA': [cgpa]}
    df = pd.DataFrame(data)

    with open('prediction_package/finalized_files/new_data_cgpa.csv', 'a', newline='') as f:
        df.to_csv(f, header=False, index=False)

    print("Data appended to fruits.csv using Pandas")

