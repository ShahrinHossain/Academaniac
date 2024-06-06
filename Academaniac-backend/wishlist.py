from flask import Blueprint, request, session, jsonify
from flask_cors import cross_origin
from flask_session import Session
from models import db, User, Department, Wishlist, University

wishlist = Blueprint("wishlist", __name__, static_folder="static", template_folder="templates")


@cross_origin(supports_credentials=True, methods=['POST'])
@wishlist.route('/', methods=['POST'])
def add_to_wishlist():
    data = request.json
    if 'id' in session:
        user_id = session.get('id')
        # user_id = 1
        uni_rank = data.get('uni_rank')
        uni = University.query.filter_by(rank=uni_rank).first()
        dept_name = data.get('dept_name')

        dept = Department.query.filter_by(uni_id=uni.id, name=dept_name).first()
        print(dept.name)
        wish = Wishlist(user_id=user_id, uni_id=uni.id, program_id=dept.id)
        db.session.add(wish)
        db.session.commit()

        return jsonify(
            {
                "success": True
            }
        ), 201

    else:
        return jsonify({
            "success": False,
            "message": "login required"
        }), 401



