# app.py

from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from datetime import datetime, timedelta
from enum import Enum
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, Profile, ProfileType

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///shariahchain.db"
app.config["JWT_SECRET_KEY"] = "super-secret"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
db.init_app(app)
jwt = JWTManager(app)


@app.route("/signup", methods=["POST"])
def signup():
    """
    Sign up a new profile (bank or validator).
    Expected JSON body:
    {
      "name": "...",
      "type": "bank"|"internal_board"|"national_board"|"central_bank",
      "country_id": 1,
      "contact_info": "...",
      "password": "plaintext"
    }
    """
    data = request.get_json()
    # Validate required fields
    for field in ("name", "type", "country_id", "password"):
        if field not in data:
            return jsonify({"msg": f"Missing {field}"}), 400

    # Ensure type is valid
    try:
        ptype = ProfileType(data["type"])
    except ValueError:
        return jsonify({"msg": "Invalid profile type"}), 400

    # Create and persist
    profile = Profile(
        name=data["name"],
        type=ptype,
        country_id=data["country_id"],
        contact_info=data.get("contact_info", ""),
    )
    profile.set_password(data["password"])
    db.session.add(profile)
    db.session.commit()

    return jsonify({"msg": "Profile created", "profile_id": profile.id}), 201


@app.route("/signin", methods=["POST"])
def signin():
    """
    Sign in and receive a JWT access token.
    Expected JSON body:
    {
      "name": "...",
      "password": "plaintext"
    }
    """
    data = request.get_json()
    if not data or "name" not in data or "password" not in data:
        return jsonify({"msg": "Name and password required"}), 400

    profile = Profile.query.filter_by(name=data["name"]).first()
    if profile is None or not profile.check_password(data["password"]):
        return jsonify({"msg": "Bad name or password"}), 401

    # Create JWT with identity=profile.id
    access_token = create_access_token(identity=profile.id)
    return jsonify({"access_token": access_token}), 200


# Example of a protected route
@app.route("/me", methods=["GET"])
@jwt_required()
def me():
    """
    Retrieve current profile info.
    """
    profile_id = get_jwt_identity()
    profile = Profile.query.get(profile_id)
    return jsonify(
        {
            "id": profile.id,
            "name": profile.name,
            "type": profile.type.value,
            "country_id": profile.country_id,
            "contact_info": profile.contact_info,
        }
    )


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
