from flask import Blueprint, jsonify, request
from models import University, db, Department
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


@university.route('/dept')
def get_depts():
    data = request.json
    uni_name = data.get('uni_name')
    uni = University.query.filter_by(name=uni_name).first()
    depts = Department.query.filter_by(uni_d=uni.id).all()

    return jsonify({
        "depts": [{
            "name": dept.name,
            "mapped_id": dept.mapped_id
        }for dept in depts]
    }), 201
