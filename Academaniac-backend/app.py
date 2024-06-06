from flask import Flask, request, render_template, redirect, session, jsonify, render_template_string
from flask_mail import Mail
from flask_cors import CORS, cross_origin

from auth import auth
from security import security
from models import db
# from prediction import prediction
from user import user
from uni_scrape import uni_scrape


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'deadbeefedfrfr@gmail.com'
app.config['MAIL_PASSWORD'] = 'wbrlyrvjaeqgybcs'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

CORS(app, supports_creedentials=True)
db.init_app(app)
mail = Mail(app)
app.secret_key = 'secret_key'


app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(security, url_prefix="/security")
# app.register_blueprint(prediction, url_prefix="/prediction")
app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(uni_scrape, url_prefix="/uni_scrape")


with app.app_context():
    db.create_all()
    db.session.commit()


if __name__ == "__main__":
    app.run(debug=True)
