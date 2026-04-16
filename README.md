# 🧮 Advanced Scientific Calculator (AI/ML Portfolio Project)

A production-level, high-performance scientific calculator built with a modern tech stack. Designed for the AI/ML developer portfolio, this application combines a sleek macOS-inspired UI with a secure, asynchronous Python backend.

## 📸 Screenshots

![Calculator UI](screenshots/home.png)


## 🚀 Key Features

- **Scientific Computing**: Support for trigonometry (sin, cos, tan), logarithms, factorials, square roots, and basic arithmetic.
- **Secure Parsing**: Uses `simpleeval` for safe expression evaluation, preventing arbitrary code execution.
- **Modern UI/UX**:
  - Dark/Light mode support with smooth transitions.
  - Glassmorphism design with vibrant background accents.
  - Responsive and mobile-friendly layout.
  - Calculation history sidebar with local persistence.
- **Advanced Modules**:
  - **Unit Converter**: Integrated length and weight conversion.
  - **Keyboard Support**: Fully functional keyboard shortcuts for fast input.
- **Backend Architecture**:
  - **FastAPI**: Asynchronous REST API for high performance.
  - **Service-Layer Pattern**: Clean separation of concerns.
  - **Input Validation**: Pydantic schemas for strict API integrity.
  - **Logging & Error Middleware**: Production-ready observability.

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- Lucide React (Icons)
- Axios (HTTP Client)

**Backend:**
- Python 3.9+
- FastAPI (Web Framework)
- Simpleeval (Secure Math Engine)
- Loguru (Logging)

## 📦 Project Structure

```text
advanced-scientific-calculator/
├── backend/
│   ├── app/
│   │   ├── api/          # REST endpoints
│   │   ├── services/     # core math logic
│   │   ├── schemas/      # pydantic models
│   │   └── main.py       # entry point
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── App.jsx       # main container
│   │   └── index.css     # global styles
│   └── tailwind.config.js
└── README.md
```

## ⚙️ Local Setup

### 1. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173` and the API at `http://localhost:8000`.

## 🛡️ Security

This project avoids using `eval()` directly. Expressions are parsed through a controlled evaluation engine that only has access to a whitelist of mathematical functions. Inputs are sanitized and validated at both frontend and backend layers.

## 🔮 Future Improvements

- [ ] Implementation of a Graphing engine (to visualize functions).
- [ ] User authentication for cloud history sync.
- [ ] Integration of NumPy for complex matrix operations.
- [ ] Progressive Web App (PWA) support.

---
Designed with ❤️ for AI/ML Students & Developers
