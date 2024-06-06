from flask import Flask, request, render_template, redirect, session, jsonify, render_template_string
from flask_mail import Mail
from flask_cors import CORS
from flask_session import Session
from auth import auth
from security import security
from models import db
from prediction import prediction
from user import user
from uni_scrape import uni_scrape

from university import university
from wishlist import wishlist

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'deadbeefedfrfr@gmail.com'
app.config['MAIL_PASSWORD'] = 'wbrlyrvjaeqgybcs'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

app.config['SESSION_TYPE'] = 'filesystem'  # Session type set to filesystem
app.config['SESSION_FILE_DIR'] = '/tmp/flask_session'  # Directory for session files
app.config['SESSION_COOKIE_SAMESITE'] = "None"
app.config['SESSION_COOKIE_SECURE'] = True
app.secret_key = 'secret_key'
app.url_map.strict_slashes = False

server_session = Session(app)

# CORS configuration to allow credentials and specific origin
CORS(app, supports_credentials=True, resources={r"*": {"origins": "*"}})

db.init_app(app)
mail = Mail(app)

app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(security, url_prefix="/security")
app.register_blueprint(prediction, url_prefix="/prediction")
app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(uni_scrape, url_prefix="/uni_scrape")

app.register_blueprint(university, url_prefix="/university")
app.register_blueprint(wishlist, url_prefix="/wishlist")

with app.app_context():
    db.create_all()
    db.session.commit()

if __name__ == "__main__":
    app.run(debug=True)
