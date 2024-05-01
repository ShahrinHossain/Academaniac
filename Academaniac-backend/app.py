from flask import Flask, request, render_template, redirect, session, jsonify, render_template_string
from flask_mail import Mail

from auth import auth
from security import security
from models import db


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'deadbeefedfrfr@gmail.com'
app.config['MAIL_PASSWORD'] = 'wbrlyrvjaeqgybcs'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False


db.init_app(app)
mail = Mail(app)
app.secret_key = 'secret_key'


app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(security, url_prefix="/security")


with app.app_context():
    db.create_all()
    db.session.commit()


if __name__ == "__main__":
    app.run(debug=True)
