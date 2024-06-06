from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, time
import json
import re
# hhouhuhh
db = SQLAlchemy()


def remove_int(input_string, integer_to_remove):
    # Define a regular expression pattern to find integers within square brackets
    pattern = r"\[(\d+),(\d+),(\d+)\]"

    # Find all integers within square brackets
    matches = re.findall(pattern, input_string)

    # If matches are found, remove the specified integer
    if matches:
        # Loop through all matches
        for match in matches:
            # Convert match to integers
            integers = [int(x) for x in match]
            # Check if specified integer is present
            if integer_to_remove in integers:
                # Remove the specified integer from the list
                integers.remove(integer_to_remove)
                # Reconstruct the modified string
                modified_string = "[" + ",".join(str(x) for x in integers) + "]"
                # Replace the original string with the modified one
                modified_string = re.sub(pattern, modified_string, input_string)
                # Return the modified string
                return modified_string
    # If no matches are found or the specified integer is not present, return the original string
    return input_string


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password_hash = db.Column(db.String(100))
    role_id = db.Column(db.Integer, nullable=False)
    verified = db.Column(db.Integer)

    def __init__(self, email, password, role_id, name="Shreya", contact="01552393972"):
        self.email = email
        self.password_hash = generate_password_hash(password)
        self.role_id = 0
        self.verified = 0

    def update_password(self, new_password):
        self.password_hash = generate_password_hash(new_password)
        db.session.commit()

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Verification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True)
    code = db.Column(db.String)
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, email, code, timestamp=datetime.now()):
        self.email = email
        self.code = code
        self.timestamp = timestamp

    def update_code(self, code, timestamp=datetime.now()):
        self.code = code
        self.timestamp = timestamp


class University(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    rank = db.Column(db.Integer)
    country = db.Column(db.Integer)

    def __init__(self, name, rank=-1, country=1):
        self.name = name
        self.rank = rank
        self.country = country


class User_Details(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    role_id = db.Column(db.Integer, nullable=False)
    uni_name = db.Column(db.String(100))
    cgpa = db.Column(db.Float)
    gre = db.Column(db.Integer)
    country = db.Column(db.String)
    updated = db.Column(db.Integer)
    photo_link = db.Column(db.String)

    def __init__(self, id, role_id=0, name="", uni_name="unavailable", cgpa=-1, gre=-1, country="Bangladesh", updated=0,
                 photo_link="res/images/profile_photos/default.jpg"):
        self.id = id
        self.role_id = role_id
        self.uni_name = uni_name
        self.cgpa = cgpa
        self.gre = gre
        self.country = country
        self.updated = updated
        self.photo_link = photo_link
        self.name = name


class Department(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uni_id = db.Column(db.Integer, db.ForeignKey(University.id))
    mapped_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(100))

    def __init__(self, uni_id, mapped_id, name=None):
        self.uni_id = uni_id
        self.name = name
        self.mapped_id = mapped_id


class Wishlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    uni_id = db.Column(db.Integer, db.ForeignKey(University.id), nullable=False)
    program_id = db.Column(db.Integer, db.ForeignKey(Department.id))

    def __init__(self, user_id=-1, uni_id=-1, program_id=-1):
        self.uni_id = uni_id
        self.user_id = user_id
        self.program_id = program_id


class Country(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

    def __init__(self, name="Bangladesh"):
        self.name = name

