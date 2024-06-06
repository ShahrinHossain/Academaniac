from flask import Blueprint, request, session, jsonify
from flask_cors import cross_origin
from flask_session import Session
from models import db, User, Department, Wishlist

wishlist = Blueprint("wishlist", __name__, static_folder="static", template_folder="templates")


@cross_origin(supports_credentials=True)
@wishlist.route('/', methods=['POST'])
def add_to_wishlist():
    data = request.json
    if 'id' in session or True:
        # user_id = session.get('id')
        user_id = 1
        uni_id = data.get('uni_id')
        dept_name = data.get('dept_name')

        dept = Department.query.filter_by(uni_id=uni_id, name=dept_name).first()

        wish = Wishlist(user_id=user_id, uni_id=uni_id, program_id=dept.id)
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



