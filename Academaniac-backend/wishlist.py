from flask import Blueprint, request, session, jsonify
from flask_cors import cross_origin, CORS
from flask_session import Session
from models import db, User_Details, Department, Wishlist, University
from prediction_package.get_prediction_cgpa import predict_admission


wishlist = Blueprint("wishlist", __name__, static_folder="static", template_folder="templates")


@cross_origin(supports_credentials=True, methods=['POST', 'OPTIONS'])
@wishlist.route('/post', methods=['POST', 'OPTIONS'])
def add_to_wishlist():
    if request.method == 'OPTIONS':
        # Handle preflight requests
        return jsonify({"success": True}), 200

    data = request.json
    if 'id' in session:
        user_id = session.get('id')
        uni_rank = data.get('uni_rank')
        uni = University.query.filter_by(rank=uni_rank).first()
        dept_name = data.get('dept_name')

        dept = Department.query.filter_by(uni_id=uni.id, name=dept_name).first()
        wish = Wishlist(user_id=user_id, uni_id=uni.id, program_id=dept.id)
        db.session.add(wish)
        db.session.commit()

        return jsonify({"success": True}), 201
    else:
        return jsonify({"success": False, "message": "login required"}), 401


@cross_origin(supports_credentials=True, methods=['GET'])
@wishlist.route('/get-info')
def get_wishlist():
    if 'id' in session:
        user_id = session.get('id')
        # user_id = 1
        wishes = Wishlist.query.filter_by(user_id=user_id).all()
        user = User_Details.query.filter_by(id=user_id).first()  # Get the actual user instance
        # print(user.name)
        responses = []

        for wish in wishes:
            uni = University.query.filter_by(id=wish.uni_id).first()
            dept = Department.query.filter_by(id=wish.program_id).first()
            response = {}
            response['university'] = uni.name
            response['dept'] = dept.name
            response['probability'] = round(
                predict_admission(university_rank=uni.rank, department=dept.mapped_id, undergrad_cgpa=user.cgpa) * 100,
                2)

            responses.append(response)

        return jsonify({
            "added": responses
        }), 201

    return jsonify({"error": "User not logged in"}), 401

