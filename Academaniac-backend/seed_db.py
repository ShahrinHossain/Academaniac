"""
Seed script: populates University and Department tables from frontend Data.json / Depts.json.
Run once after a fresh database is created:
    python seed_db.py
"""
from app import app
from models import db, University, Department

# Universities from src/Data.json
UNIVERSITIES = [
    {"name": "Massachusetts Institute of Technology", "rank": 1,   "country": 1},
    {"name": "Stanford University",                   "rank": 5,   "country": 1},
    {"name": "University of Oxford",                  "rank": 3,   "country": 3},
    {"name": "University of California, Berkeley",    "rank": 12,  "country": 1},
    {"name": "University of Toronto",                 "rank": 25,  "country": 2},
    {"name": "University of Illinois",                "rank": 69,  "country": 1},
    {"name": "University of Alberta",                 "rank": 111, "country": 2},
    {"name": "McMaster University",                   "rank": 189, "country": 2},
    {"name": "Texas Tech University",                 "rank": 494, "country": 1},
]

# Departments from src/Depts.json keyed by university rank.
# mapped_id values must be integers the ML LabelEncoder was trained on:
# [1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,19,23,24,26,28,31,33,34,35,37,38,39,40,41,42,43,44,45,46,47]
DEPARTMENTS = {
    1: [
        ("Computer Science", 1),
        ("Architecture", 2),
        ("Electrical Engineering And Computer Science (EECS)", 3),
        ("Biomedical Engineering", 4),
        ("Data Science", 6),
    ],
    5: [
        ("Computational And Mathematical Engineering", 7),
        ("Statistics", 8),
        ("Energy Science and Engineering", 9),
        ("Materials Science And Engineering", 10),
        ("Architecture", 11),
    ],
    3: [
        ("Computing And Software", 12),
        ("English", 13),
        ("English 1550-1700", 14),
        ("Diplomatic Studies Program", 15),
        ("Master Of Science In Mathematical Sciences", 16),
    ],
    12: [
        ("Electrical Engineering And Computer Science", 19),
        ("Applied Statistics", 23),
        ("Industrial And Operations Engineering", 24),
        ("Information (MSI)", 26),
        ("Artificial Intelligence", 28),
    ],
    25: [
        ("Computer Science, University Of Toronto", 31),
        ("Economics, University Of Toronto", 33),
        ("Philosophy, University Of Toronto", 34),
        ("Biostatistics, University Of Toronto", 35),
        ("Master Of Urban Innovation, University Of Toronto", 37),
    ],
    69: [
        ("Mechanical Engineering, University Of Illinois", 38),
        ("Computer Science, University Of Illinois", 39),
        ("Architecture, University Of Illinois, Chicago (UIC)", 40),
        ("Materials Science And Engineering, University Of Illinois", 41),
        ("Construction Engineering And Management, University Of Illinois", 42),
    ],
    111: [
        ("Architecture SMarchS", 43),
        ("Computing Science", 44),
        ("Urban And Regional Planning", 45),
        ("Physics", 46),
        ("Electrical And Computer Eng.", 47),
    ],
    189: [
        ("Energy Science And Engineering", 1),
        ("School And Clinical Child Psychology", 2),
        ("Health Research Methodology", 3),
        ("Computing And Software", 4),
        ("Economics", 6),
    ],
    494: [
        ("Artificial Intelligence", 7),
        ("City Planning", 8),
        ("Civil Engineering", 9),
        ("Computer Science", 10),
        ("Electrical Engineering and Computer Science", 11),
    ],
}

with app.app_context():
    seeded = 0
    for uni_data in UNIVERSITIES:
        existing = University.query.filter_by(rank=uni_data["rank"]).first()
        if existing:
            uni = existing
        else:
            uni = University(name=uni_data["name"], rank=uni_data["rank"], country=uni_data["country"])
            db.session.add(uni)
            db.session.flush()  # get uni.id before committing
            seeded += 1

        for dept_name, mapped_id in DEPARTMENTS.get(uni_data["rank"], []):
            if not Department.query.filter_by(uni_id=uni.id, name=dept_name).first():
                dept = Department(uni_id=uni.id, mapped_id=mapped_id, name=dept_name)
                db.session.add(dept)

    db.session.commit()
    total_unis = University.query.count()
    total_depts = Department.query.count()
    print(f"Done. {total_unis} universities, {total_depts} departments in DB.")
