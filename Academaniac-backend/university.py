from flask import Blueprint, jsonify
from models import University, db
from flask_cors import cross_origin

university = Blueprint("university", __name__, static_folder="static", template_folder="templates")


@cross_origin(supports_credentials=True)
@university.route('/', methods=['GET'])
def get_all_universities():
    total = University.query.count()
    universities = University.query.all()

    return jsonify({
        'total': total,
        'universities': [{
            'name': uni.name,
            'rank': uni.rank,
            'country': uni.country,
        } for uni in universities]
    }), 201
