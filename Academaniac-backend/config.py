

class ApplicationConfig:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = r"sqlite:///db.sqlite"

    # SESSION_TYPE = "Session"
    # SESSION_PERMANENT = True
    # SESSION_USE_SIGNER = True
