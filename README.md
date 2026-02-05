# React Task Manager 📝

A modern, responsive, and persistent To-Do application built with **React** and **Vite**. This project demonstrates full **CRUD** (Create, Read, Update, Delete) functionality, state management, and local storage integration.
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://soumyarananpradhan.github.io/To-Do-App/)

## 🚀 Features

* **Add Tasks:** Quickly add new tasks to your list.
* **Edit Tasks:** Fix typos or update details with inline editing.
* **Filter Views:** Toggle between **All**, **Active**, and **Completed** tasks.
* **Persistent Storage:** Data is saved to the browser's Local Storage, so you never lose your tasks on refresh.
* **Responsive Design:** Styled with Tailwind CSS for a clean look on mobile and desktop.
* **Delete & Complete:** Easily remove items or mark them as done.

## 🛠️ Tech Stack

* **Frontend Library:** React.js (Hooks: `useState`, `useEffect`)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Language:** JavaScript (ES6+)

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/react-todo-app.git](https://github.com/your-username/react-todo-app.git)
    cd react-todo-app
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to see the app in action.

## 📂 Project Structure

```text
src/
├── components/
│   ├── TodoForm.jsx    # Input field logic
│   ├── TodoList.jsx    # List rendering and filtering props
│   └── TodoItem.jsx    # Individual task item (Edit/Delete/Toggle)
├── App.jsx             # Main state management and Local Storage logic
├── main.jsx            # Entry point
└── index.css           # Tailwind imports
🔮 Future Improvements
Dark Mode: Add a toggle for dark/light themes.

Drag & Drop: Allow reordering of tasks.

Backend Integration: Connect to a Python (Django/FastAPI) backend for a full-stack experience.

🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

Built with ❤️ by Soumyaranjan Pradhan
