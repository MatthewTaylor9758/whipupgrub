from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
# from werkzeug.security import generate_password_hash, check_password_hash FOR TOMORROW

# create the SQLAlchemy object and save it as db
db = SQLAlchemy()

class User(db.Model):
    __tablename__='users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    # password to come tomorrow when I go over werkzeug security and password hashing

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_pasword_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Food(db.Model):
    __tablename__='foods'

    # possibly use a merge sort to find the correct foods faster?
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    amount = db.Column(db.String, nullable=False)
    pantry_id = db.Column(db.Integer, db.ForeignKey('pantries.id'), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'amount': self.amount,
            'pantry_id': self.pantry_id
        }

class Pantry(db.Model):
    __tablename__ = 'pantries'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id
        }
