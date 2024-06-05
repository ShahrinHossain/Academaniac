from flask import Blueprint, request, jsonify
from prediction_package.get_prediction_cgpa import predict_admission
import pandas as pd

prediction = Blueprint("prediction", __name__, static_folder="static", template_folder="templates")


@prediction.route('/', methods=['GET'])
def get_prediction():

    data = request.json
    rank = data.get('rank')
    cgpa = data.get('cgpa')
    dept = data.get('dept')
    gre = data.get('gre')

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
