from flask import Blueprint, request, jsonify
from prediction_package.get_prediction_cgpa import predict_admission

prediction = Blueprint("prediction", __name__, static_folder="static", template_folder="templates")


@prediction.route('/', methods=['GET'])
def get_prediction():

    data = request.json
    rank = data.get('rank')
    cgpa = data.get('cgpa')
    dept = data.get('dept')
    gre = data.get('gre')

    ans = predict_admission(university_rank=rank, department=dept, undergrad_cgpa=cgpa)

    return jsonify({"success": True, "probability": ans}), 201
