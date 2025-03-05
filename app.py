from flask import Flask, jsonify, request, redirect
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load JSON data into memory
try:
    with open('jsondata.json', 'r') as f:
        data = json.load(f)
    print("Data loaded successfully.")  # Debugging log
except Exception as e:
    print(f"Error loading JSON data: {e}")
    data = []  # Fallback to an empty list if data cannot be loaded

# Root route
@app.route('/')
def home():
    return "Welcome to the Data Visualization API! Use /api/data to fetch filtered data."

# API endpoint to fetch data
@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        filters = request.args
        filtered_data = data

        # Apply filters if provided
        if 'end_year' in filters:
            filtered_data = [d for d in filtered_data if d.get('end_year') == filters['end_year']]
        if 'topic' in filters:
            filtered_data = [d for d in filtered_data if d.get('topic') == filters['topic']]
        if 'sector' in filters:
            filtered_data = [d for d in filtered_data if d.get('sector') == filters['sector']]
        if 'region' in filters:
            filtered_data = [d for d in filtered_data if d.get('region') == filters['region']]

        return jsonify(filtered_data)
    except Exception as e:
        print(f"An error occurred: {e}")  # Debugging log
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Use port 5000 (or another port if needed)