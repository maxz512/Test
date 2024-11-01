
from flask import Flask, request, jsonify

app = Flask(__name__)

# Example endpoint to add patient data
@app.route('/patients', methods=['POST'])
def add_patient():
    patient_data = request.get_json()
    # Simulate saving data to a database here
    return jsonify({"message": "Patient data added", "data": patient_data}), 201

if __name__ == '__main__':
    app.run(debug=True)
