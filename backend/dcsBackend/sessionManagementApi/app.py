from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from session_management import session_bp  # Import the blueprint from session_management.py

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, supports_credentials=True, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Register the session management blueprint
app.register_blueprint(session_bp)

@app.route('/')
def index():
    return 'Session Management API'

if __name__ == '__main__':
    app.run(debug=True)
