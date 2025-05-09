from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from enum import Enum

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///shariahchain.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class ProfileType(Enum):
    BANK = "bank"
    INTERNAL_BOARD = "internal_board"
    NATIONAL_BOARD = "national_board"
    CENTRAL_BANK = "central_bank"


class RequestStatus(Enum):
    PENDING = "pending"
    AUTO_APPROVED = "auto_approved"
    IN_REVIEW = "in_review"
    COMPLETED = "completed"
    REJECTED = "rejected"


class ContractStatus(Enum):
    DRAFT = "draft"
    ON_CHAIN = "on_chain"
    APPROVED = "approved"
    REJECTED = "rejected"


class Decision(Enum):
    APPROVED = "approved"
    REJECTED = "rejected"


class Country(db.Model):
    __tablename__ = "country"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    code = db.Column(db.String(3), unique=True, nullable=False)
    profiles = db.relationship("Profile", backref="country")


class Profile(db.Model):
    __tablename__ = "profile"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    type = db.Column(db.Enum(ProfileType), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey("country.id"), nullable=False)
    contact_info = db.Column(db.String(256))
    public_key = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
    client_requests = db.relationship("ClientRequest", backref="bank")
    validations = db.relationship("ValidationRecord", backref="validator")


class ClientRequest(db.Model):
    __tablename__ = "client_request"
    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey("profile.id"), nullable=False)
    is_standard = db.Column(db.Boolean, default=False)
    standard_code = db.Column(db.String(16), nullable=True)
    use_case_json = db.Column(db.Text, nullable=False)
    status = db.Column(db.Enum(RequestStatus), default=RequestStatus.PENDING)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
    contracts = db.relationship(
        "Contract", backref="request", cascade="all, delete-orphan"
    )


class Contract(db.Model):
    __tablename__ = "contract"
    id = db.Column(db.Integer, primary_key=True)
    request_id = db.Column(
        db.Integer, db.ForeignKey("client_request.id"), nullable=False
    )
    content = db.Column(db.Text, nullable=False)
    on_chain = db.Column(db.Boolean, default=False)
    status = db.Column(db.Enum(ContractStatus), default=ContractStatus.DRAFT)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )
    validations = db.relationship(
        "ValidationRecord", backref="contract", cascade="all, delete-orphan"
    )


class ValidationRecord(db.Model):
    __tablename__ = "validation_record"
    id = db.Column(db.Integer, primary_key=True)
    contract_id = db.Column(db.Integer, db.ForeignKey("contract.id"), nullable=False)
    validator_profile_id = db.Column(
        db.Integer, db.ForeignKey("profile.id"), nullable=False
    )
    level = db.Column(db.Integer, nullable=False)
    decision = db.Column(db.Enum(Decision), nullable=False)
    reason = db.Column(db.Text)
    decided_at = db.Column(db.DateTime, default=datetime.utcnow)


if __name__ == "__main__":
    db.create_all()
    print("Database schema created!")
