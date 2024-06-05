from flask import Blueprint, jsonify, session, request, render_template, render_template_string, url_for, redirect
from flask_cors import cross_origin

from models import User, Verification, db, User_Details
from flask_mail import Mail, Message
import random
import string
import requests
import re
from datetime import datetime

mail = Mail()


# ... other imports in auth.py .

def is_valid_email(email):
    # Regular expression for validating an email address
    email_regex = r'^[\w\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$'
    return re.match(email_regex, email) is not None


def delete_verification_record(email):
    verification_record = Verification.query.filter_by(email=email).first()
    if verification_record:
        db.session.delete(verification_record)
        db.session.commit()
        return True
    return False


def generate_random_string(length=6):
    """Generate a random alphanumeric lowercase string of given length."""
    characters = string.ascii_lowercase + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


auth = Blueprint("auth", __name__, static_folder="static", template_folder="templates")


@cross_origin()
@auth.route('/login', methods=['POST', 'GET'])
@cross_origin(methods=['POST'], supports_credentials=True, headers=['Content-Type', 'Authorization'], origin='http://127.0.0.1:5500')
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        if user.verified:
            session['id'] = user.id
            print(session['id'])
            # role = Role.query.filter_by(id=user.role_id).first()  # Changed role_id to id
            print('logged IN')
            return jsonify({"success": True, "message": "Successfully logged In"}), 201
        else:
            session['id'] = user.id
            return jsonify({"success": True, "message": "Need to verify account"}), 202
    else:
        return jsonify({"success": False, "message": "Email and password didn't match"}), 401


@auth.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    # name = data.get('')
    # contact = data.get('contact')
    # password = "12345678"

    new_user = User(email=email, password=password, role_id=0)

    existing_user = User.query.filter_by(email=new_user.email).first()

    if existing_user:
        response_data = {
            "success": "False",
            "message": "There's already an account registered with this email"
        }

        return jsonify(response_data), 409

    else:
        endpoint2_url = url_for('auth.send_mail', _external=True)
        response = requests.post(endpoint2_url, json={'email': email})
        if response.status_code // 100 == 2:
            data = response.json()
            code = data.get('code')
            otp = Verification.query.filter_by(email=email).first()
            if otp:
                otp.update_code(code, datetime.now())
                db.session.commit()
            else:
                otp = Verification(email, code, datetime.now())
                db.session.add(otp)
                db.session.commit()
            # otp = Verification(email, code, datetime.now())
            # db.session.add(otp)
            new_user_details = User_Details(new_user.id)
            db.session.add(new_user_details)
            db.session.add(new_user)
            db.session.commit()

            response_data = {
                "success": "True",
                "message": "Registration Success: Please Check Email for verification code"
            }
            return jsonify(response_data), 201
        else:
            return jsonify({"success": False, "message": "Failed to send email"}), response.status_code


@auth.route('/@me')
def get_current_user():
    user_id = session.get("id")
    if not user_id:
        return jsonify({"success": False, "message": "unauthorized"}), 404
    user = User.query.filter_by(id=user_id).first()
    if not user:
        return jsonify({"success": False, "message": "user not found"}), 404
    return jsonify({"success": True, "message": user.email}), 201


@auth.route('/mail', methods=['POST'])
def send_mail():
    data = request.json
    email = data.get('email')
    # print(session['email'])
    msg_title = "Verification mail"
    sender = "noreply@app.com"
    msg = Message(msg_title, sender=sender, recipients=[email])
    msg.body = ""
    code = generate_random_string()
    msg.html = render_template("verificationemail.html", code=code)
    try:
        mail.send(msg)
        return jsonify({"success": True, "code": code}), 201

    except Exception as e:
        print(e)
        return jsonify({"success": False, "message": "Email could not be sent"}), 400


@auth.route('/change-password', methods=['POST'])
def change_pass():
    data = request.json
    old_pass = data.get('old_pass')
    new_pass1 = data.get('new_pass1')
    new_pass2 = data.get('new_pass2')
    print(old_pass)
    print(new_pass2)
    print(new_pass1)

    if 'email' in session:
        user = User.query.filter_by(email=session['email']).first()
        if user and user.check_password(old_pass):
            if len(new_pass1) < 8:
                return jsonify({"success": False, "message": "Password needs to be of 8 Characters or more"}), 405
            elif new_pass1 == new_pass2:
                user.update_password(new_pass1)
                db.session.commit()
                return jsonify({"success": True, "message": "Password updated successfully"}), 201
            else:
                return jsonify({"success": False, "message": "Passwords didn't match"}), 401
        else:
            return jsonify({"success": False, "message": "Incorrect Password"}), 403
    else:
        error_message1 = "You Need to log In first"
        return jsonify({"success": True, "message": error_message1}), 405


@auth.route('/reset-password/initiate', methods=['POST'])
def reset_pass_ini():
    data = request.json
    email = data.get('email')
    user = User.query.filter_by(email=email).first()
    if user:
        # session['email'] = email
        session['temp_mail'] = email
        endpoint2_url = url_for('auth.send_mail', _external=True)
        response = requests.post(endpoint2_url, json={'email': email})
        # Check if the request was successful (status code 2xx)
        if response.status_code // 100 == 2:
            # Extract relevant data from the response
            response_data = response.json()
            code = response_data.get('code')
            otp = Verification.query.filter_by(email=email).first()
            if otp:
                otp.update_code(code, datetime.now())
                db.session.commit()
            else:
                otp = Verification(email, code, datetime.now())
                db.session.add(otp)
                db.session.commit()
            return jsonify(response_data), response.status_code
        else:
            return jsonify({"success": False, "message": "Failed to send email"}), response.status_code
    else:
        return jsonify({"success": False, "message": "User not found"}), 404


@auth.route('/reset-password/confirm', methods=['POST'])
def reset_pass_confirm():
    data = request.json
    email = data.get('email')
    code = data.get('code')
    new_password = data.get('new_password')
    print(email)

    otp = Verification.query.filter_by(email=email).first()
    user = User.query.filter_by(email=email).first()
    if otp and user:
        if otp.code == code:
            user.update_password(new_password)
            return jsonify({"success": True, "message": "Password Updated"}), 201
        else:
            return jsonify({"success": False, "message": "Verification code didn't match"}), 401
    else:
        return jsonify({"success": False, "message": "Invalid email"}), 402


@auth.route('/login-verification', methods=['POST'])
def login_verification():
    data = request.json
    email = data.get('email')
    code = data.get('code')

    otp = Verification.query.filter_by(email=email).first()
    user = User.query.filter_by(email=email).first()
    if otp and user:
        if otp.code == code:
            user.verified = True
            db.session.commit()
            session['email'] = user.email
            session['role'] = user.role_id
            session['id'] = user.id
            print(session['id'])
            return jsonify({"success": True, "message": "User Verified"}), 201
        else:
            return jsonify({"success": False, "message": "Verification code didn't match"}), 401
    else:
        return jsonify({"success": False, "message": "Invalid email"}), 402


@auth.route('/logout')
def logout():
    if 'email' in session:
        session.pop('email', None)
        session.pop('role', None)
        session.pop('id', None)
        session.pop('permissions', None)

        if request.headers.get('accept') == 'application/json':
            return jsonify({"success": True, "message": "Successfully logged Out"}), 201
        else:
            return render_template('index.html')

    else:
        return jsonify({"success": False, "message": "Need to login first"}), 400


@auth.route('/status')
def get_status():
    return jsonify({"success": session.get('id')})