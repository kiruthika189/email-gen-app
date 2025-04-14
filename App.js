import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [topic, setTopic] = useState('');
    const [role, setRole] = useState('');
    const [tone, setTone] = useState('');
    const [purpose, setPurpose] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateEmail = async () => {
        if (!name || !topic || !role || !tone || !purpose) {
            setError('Please fill out all fields.');
            return;
        }

        setError('');
        setLoading(true);
        setEmail('');

        try {
          const response = await fetch('http://127.0.0.1:5000/generate-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                topic: topic,
                role: role,
                tone: tone,
                purpose: purpose,
            }),
        });
        
          
          
            const data = await response.json();

            if (data.email) {
                setEmail(data.email);
            } else {
                setError(data.error || 'Unexpected error occurred.');
            }
        } catch (err) {
            setError('Unable to connect to the backend.');
        }

        setLoading(false);
    };

    return (
        <div className="App">
            <h1>🎯 Generate Personalized Email</h1>

            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
                <option value="student">Student</option>
                <option value="client">Client</option>
            </select>

            <select value={tone} onChange={(e) => setTone(e.target.value)}>
                <option value="">Select Tone</option>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="friendly">Friendly</option>
            </select>

            <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                <option value="">Select Purpose</option>
                <option value="invitation">Invitation</option>
                <option value="thank you">Thank You</option>
                <option value="follow-up">Follow-up</option>
                <option value="introduction">Introduction</option>
            </select>

            <button onClick={handleGenerateEmail} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Email'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {email && (
                <div className="email-output">
                    <h3>Generated Email:</h3>
                    <p>{email}</p>
                </div>
            )}
        </div>
    );
}

export default App;
