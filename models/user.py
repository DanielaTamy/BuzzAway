from flask_login import UserMixin
from .db import db


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.VARCHAR(300))
    name = db.Column(db.String(1000))