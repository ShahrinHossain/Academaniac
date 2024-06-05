import os

from flask import Blueprint, jsonify, session, request
from werkzeug.utils import secure_filename
from flask_cors import cross_origin

from models import User_Details, db

user = Blueprint("user", __name__, static_folder="static", template_folder="templates")


@cross_origin(supports_credentials=True, methods=['GET'])
@user.route('/', methods=['GET'])
def get_user_details():
    user_id = session['id']
    user_details = User_Details.query.filter_by(id=user_id).first()
    if user_details is not None:
        name = user_details.name
        university = user_details.uni_name
        gre = user_details.gre
        country = user_details.country
        photo = user_details.photo_link
        cgpa = user_details.cgpa

        return jsonify({
            "success": True,
            "name": name,
            "university": university,
            "gre": gre,
            "country": country,
            "photo": photo,
            "cgpa": cgpa
        }), 201
    else:
        return jsonify({
            "success": False,
            "message": "Login First"
        }), 401


@cross_origin(supports_credentials=True, methods=['GET', 'POST'])
@user.route('/update', methods=['GET', 'POST'])
def update_user_details():
    user_id = session.get('id')  # Retrieve user ID from sessio

    if user_id is None:
        return jsonify({
            "success": False,
            "message": "Login First"
        }), 401  # Return unauthorized response if not logged in

    data = request.form
    name = data.get('name')
    university = data.get('university')
    gre = data.get('gre')
    country = data.get('country')
    cgpa = data.get('cgpa')

    user_details = User_Details.query.filter_by(id=user_id).first()

    if user_details:
        user_details.uni_name = university
        user_details.name = name
        user_details.cgpa = cgpa
        user_details.gre = gre
        user_details.country = country
        user_details.university = university

        if 'profilePicture' in request.files:
            if request.files and 'profilePicture' in request.files:
                file = request.files['profilePicture']
                if file and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    file.save(os.path.join("res/images/profile_photos", filename))
                    user_details.photo_link = "res/images/profile_photos/" + filename # Update profile picture path in database
            db.session.commit()
        return jsonify({
            "success": True,
            "message": "Details Updated"
        }), 201


allowed_extensions = {'.jpg', 'png', 'jpeg', 'gif', 'webp'}


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions


@cross_origin(supports_credentials=True, methods=['GET', 'POST'])
@user.route('/upload', methods=['POST'])
def upload_file():
    print(session.get('id'))
    print(request.files)
    if 'profilePicture' not in request.files:
        return jsonify({
            "success": False,
            "message": "No file provided"
        }), 400

    file = request.files['profilePicture']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join("res/files", filename))
        return jsonify({
            "success": True,
            "message": "File uploaded successfully"
        }), 201
    else:
        return jsonify({
            "success": False,
            "message": "Invalid file type"
        }), 400


# user_details = User_Details.query.filter_by(id=user_id).first()
#
#     if user_details is not None:
#         user_details.uni_name = name
#         user_details.cgpa = cgpa
#         user_details.gre = gre
#         user_details.country = country
#         user_details.photo_link = photo
#         db.session.commit()
#         return jsonify({
#             "success": True,
#             "message": "Details Updated"
#         }), 201
#     else:
#         return jsonify({
#             "success": False,
#             "message": "Login First"
#         }), 401
