# 📝 To-Do List App

A simple and organized To-Do List application built using React.  
It helps you manage your daily tasks with sorting features and persistent storage.

## ✨ Features
- ➕ Add new tasks
- ✅ Mark tasks as completed
- 🗑️ Delete individual tasks
- ❌ Delete all tasks
- 🔄 Sort tasks by:
  - Date (newest/oldest)
  - Alphabetically (A–Z)
  - Status (completed / not completed)
- 💾 Tasks stay saved after page refresh (localStorage)

## 🛠️ Built With
- React
- JavaScript (ES6)
- CSS
- localStorage

## 🚀 How It Works
- Tasks are stored in React state
- Any change (add, delete, toggle, sort) updates the state
- The updated state is automatically saved to localStorage
- When the app loads, tasks are retrieved from localStorage
