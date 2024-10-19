from flask import Blueprint, jsonify, request, session
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
import mysql.connector
import os

# Define a blueprint for session management
session_bp = Blueprint('session_bp', __name__)

# MySQL connection
def get_db_connection():
    connection = mysql.connector.connect(
        host=os.getenv('MYSQL_HOST'),
        user=os.getenv('MYSQL_USER'),
        password=os.getenv('MYSQL_PASSWORD'),
        database=os.getenv('MYSQL_DB')
    )
    return connection

# Create session table if not exists
def create_session_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS sessions (
            session_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id VARCHAR(100),
            session_data TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    cursor.close()
    conn.close()

# Ensure table exists on module import
create_session_table()

# Simulating user authentication for demo
users = {"user1": "password1", "user2": "password2"}

# User Login
@session_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if username in users and users[username] == password:
        session['user'] = username
        return jsonify({"message": "Login successful", "session_id": session['user']})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

# Get Session Info
@session_bp.route('/api/session-info', methods=['GET'])
def session_info():
    if 'user' in session:
        return jsonify({"user": session['user'], "message": "Session active"})
    else:
        return jsonify({"message": "No active session"}), 401

# User Logout
@session_bp.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({"message": "Logged out successfully"})

# Check Session
@session_bp.route('/api/check-session', methods=['GET'])
def check_session():
    if 'user' in session:
        return jsonify({"message": "Session is active"})
    else:
        return jsonify({"message": "Session expired"}), 401

# Refresh Session
@session_bp.route('/api/refresh-token', methods=['POST'])
@jwt_required(refresh=True)
def refresh_token():
    current_user = get_jwt_identity()
    new_token = create_access_token(identity=current_user)
    return jsonify(access_token=new_token)

# Clear Cache
@session_bp.route('/api/clear-cache', methods=['POST'])
def clear_cache():
    if 'user' in session:
        # Perform cache clearing logic (from `removeCache.py`)
        return jsonify({"message": "Cache cleared"})
    else:
        return jsonify({"message": "Session expired"}), 401
