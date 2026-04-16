# 🚀 Advanced Scientific Calculator Project Overview

This project is a high-performance web application designed for a second-year AI/ML student's portfolio. It features a modern, responsive frontend and a secure, asynchronous backend.

## 📁 Key Project Components

1.  **Backend (FastAPI)**:
    *   `services/calculator.py`: The heart of the application. Uses `simpleeval` for safe mathematical expression parsing, preventing security risks like `eval()`.
    *   `api/endpoints.py`: RESTful routes for calculation and health checks.
    *   `main.py`: Configures CORS, logging (via `loguru`), and error middleware.

2.  **Frontend (React + Tailwind CSS)**:
    *   `App.jsx`: Manages theme (Dark/Light), mode (Calculator/Unit Converter), and calculation history.
    *   `Calculator.jsx`: Handles user input, keyboard events, and communicates with the backend via Axios.
    *   `Keypad.jsx`: A sleek, responsive button layout inspired by professional scientific calculators.
    *   `Display.jsx`: Provides a premium visual experience with glassmorphism and smooth animations.
    *   `UnitConverter.jsx`: An additional module for common mathematical conversions.

## 🛠️ How to Run Locally

### Prerequisites
*   Node.js (v18 or later)
*   Python (3.9 or later)

### Step 1: Start the Backend
```powershell
cd backend
# Create a virtual environment (optional but recommended)
python -m venv venv
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn app.main:app --reload
```

### Step 2: Start the Frontend
```powershell
# In a new terminal
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🛡️ Key Design Decisions
*   **Security First**: Scientific functions are whitelisted, and input is sanitized before evaluation.
*   **Performance**: FastAPI's async nature ensures the backend can handle rapid-fire calculations efficiently.
*   **Aesthetics**: We used HSL-based color palettes and `framer-motion` for a premium, "living" interface that feels high-end.
