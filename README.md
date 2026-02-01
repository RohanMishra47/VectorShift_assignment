# VectorShift Technical Assessment - Pipeline Builder

This project is a node-based pipeline builder built with **React (Frontend)** and **FastAPI (Python Backend)**. It allows users to create visual workflows using various logic nodes, detects dynamic variables in text, and validates the pipeline structure.

## 🚀 Features

- **Node Abstraction:** Unified `BaseNode` component for scalable node creation.
- **Dynamic Text Nodes:** Auto-resizing text areas with automatic variable detection using `{{variable}}` syntax.
- **Unified Styling:** Modern UI built with Tailwind CSS.
- **Pipeline Analysis:** Backend integration to count nodes/edges and check for Directed Acyclic Graphs (DAG).

## 🛠️ Setup Instructions

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the application: `npm start`
   - Access the UI at `http://localhost:3000`

### Backend

1. Navigate to the backend directory: `cd backend`
2. Create and activate a virtual environment:
   - Windows: `python -m venv venv` then `.\venv\Scripts\activate`
   - Mac/Linux: `python3 -m venv venv` then `source venv/bin/activate`
3. Install dependencies: `pip install fastapi uvicorn`
4. Start the server: `uvicorn main:app --reload`
   - Server runs at `http://localhost:8000`

## 🧪 Testing the DAG Logic

To test the validation logic:

1. Create a linear path (e.g., Input -> LLM -> Output) and click **Submit**.
2. Create a cycle (e.g., Node A -> Node B -> Node A) and click **Submit**.
3. The system will alert you whether the current configuration is a valid DAG.
