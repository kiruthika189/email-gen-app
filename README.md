markdown
# 🎯 Personalized Email Generator Web App

A simple full-stack web application that generates personalized emails based on user input like name, topic, role, tone, and purpose. This app uses Flask for the backend and React for the frontend.

## 📌 Project Overview

The project is designed to demonstrate AI-generated personalized email writing. Users can choose various inputs like tone (formal, casual, friendly), purpose (introduction, invitation, feedback), and topic (e.g., Java, CSS, Python). The app then generates a contextual and human-like email message.


## 🛠️ Tech Stack

### Frontend
- ReactJS
- HTML5, CSS3
- JavaScript

### Backend
- Python
- Flask

### AI Integration
- `textgen` for generating email text (offline logic)
- Can optionally use OpenAI or Hugging Face APIs (if configured)


## 🌟 Features

- Input form to personalize email generation
- Supports various tones and purposes
- Dynamic and creative email generation
- Stylish and responsive frontend UI
- Offline email generator (no external API required)
- Easy to deploy locally


## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Python 3+
- `pip` for installing Python dependencies

### Installation

#### 🔧 Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

#### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

App will run on `http://localhost:3000` and backend on `http://127.0.0.1:5000`.


## 📁 Project Structure

```
email-gen-app/
├── backend/
│   ├── app.py
│   ├── email_generator.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── App.text.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── reportWebVitals.js
```


## 📷 Screenshots

![image](https://github.com/user-attachments/assets/7de2fd77-899e-40d8-b221-26e68942ef2f)




## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- React documentation
- Flask documentation
- OpenAI / Hugging Face APIs (if integrated)

```

