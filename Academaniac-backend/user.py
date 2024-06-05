import os

from flask import Blueprint, jsonify, session, request
from werkzeug.utils import secure_filename

from models import User_Details, db

user = Blueprint("user", __name__, static_folder="static", template_folder="templates")


@user.route('/', methods=['GET'])
def get_user_details():
    user_id = session['id']
    user_details = User_Details.query.filter_by(id=user_id).first()
    if user_details is not None:
        name = user_details.uni_name
        university = user_details.cgpa
        gre = user_details.gre
        country = user_details.country
        photo = user_details.photo_link

        return jsonify({
            "success": True,
            "name": name,
            "university": university,
            "gre": gre,
            "country": country,
            "photo": photo
        }), 201
    else:
        return jsonify({
            "success": False,
            "message": "Login First"
        }), 401


@user.route('/update', methods=['GET', 'POST'])
def update_user_details():
    # print(session['id'])
    user_id = 1  # Retrieve user ID from session
    print(user_id)

    if user_id is None:
        return jsonify({
            "success": False,
            "message": "Login First"
        }), 401  # Return unauthorized response if not logged in

    data = request.json

    name = data.get('name')
    university = data.get('university')
    gre = data.get('gre')
    country = data.get('country')
    photo = data.get('photo')
    cgpa = data.get('cgpa')

    user_details = User_Details.query.filter_by(id=user_id).first()

    if user_details:
        user_details.uni_name = name
        user_details.cgpa = cgpa
        user_details.gre = gre
        user_details.country = country

        # Handle profile picture upload (if provided)
        if request.files and 'profilePicture' in request.files:
            profile_picture = request.files['profilePicture']
            if profile_picture.filename != '':
                filename = secure_filename(profile_picture.filename)
                profile_picture.save(os.path.join("res/images/profile_photos", filename))
                user_details.photo_link = filename  # Update profile picture path in database

        db.session.commit()
        return jsonify({
            "success": True,
            "message": "Details Updated"
        }), 201
    else:
        return jsonify({
            "success": False,
            "message": "User not found"
        }), 404  # Return not found response if user does not exist


allowed_extensions = {'.jpg', 'png', 'jpeg', 'gif', 'webp'}


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions


@user.route('/upload', methods=['POST'])
def upload_file():
    if 'files[]' not in request.files:
        return jsonify({
            "success": False,
            "message": "No files provided"
        }), 400  # Return bad request response if no files are provided

    files = request.files.getlist('files[]')
    for file in files:
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
            }), 400  # Return bad request response if file type is invalid
    resp = jsonify({
        "success": True
    })
    return resp

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
