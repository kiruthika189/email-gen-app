from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate-email', methods=['POST'])
def generate_email():
    data = request.json
    name = data.get('name')
    topic = data.get('topic')
    role = data.get('role')
    tone = data.get('tone')
    purpose = data.get('purpose')

    if not all([name, topic, role, tone, purpose]):
        return jsonify({'error': 'All fields are required'}), 400

    # Simple template
    email = f"""
Hi {name},

I hope this message finds you well. I'm reaching out regarding {topic}.

As a {role}, I wanted to {purpose.lower()} with you. Please let me know if you're interested.

Best regards,
Your Name
"""

    return jsonify({'email': email})

if __name__ == '__main__':
    app.run(debug=True)
  
