# Simple-Canvas-Editor
Canvas Editor is a modern, web-based drawing tool built using React.js and Fabric.js, designed to let users easily create, edit, and save visual designs on a digital canvas. It offers a clean and professional interface with shape tools, freehand drawing, text insertion, and color customization — all running entirely in the browser.

## 🧠 Overview

**Canvas Editor** is a modern, browser-based drawing tool built with **React.js** and **Fabric.js**.  
It allows users to create and manipulate shapes, draw freely, add text, choose colors, and save their designs — all directly in the browser.  
The project offers a clean, professional, and responsive UI that provides a smooth user experience for quick creative work or design experiments.

---

## 🚀 Features

✅ **Shape Tools:** Add and edit rectangles, circles, and text blocks with drag, resize, and rotation support.  
✏️ **Freehand Drawing:** Sketch freely using the Pen tool with customizable color and brush width.  
🎨 **Color Picker:** Instantly change color for both shapes and freehand drawings.  
💾 **Save Canvases:** Export your canvas as an image and save it locally with a name and date.  
🖼️ **History Section:** View saved canvases with thumbnails and reload them anytime.  
🗑️ **Delete Tool:** Remove the last drawn object with one click.  
🧭 **Responsive Design:** Fully responsive and clean UI for desktop and mobile devices.  

---

## 🧰 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend Framework** | React.js |
| **Canvas Engine** | Fabric.js |
| **Styling** | Custom CSS (No frameworks used) |
| **Storage** | LocalStorage (for saved canvas history) |

---

## 📁 Project Structure

📦 canvas-editor/
┣ 📂 src/
┃ ┣ 📄 App.jsx
┃ ┣ 📄 CanvasEditor.jsx
┃ ┣ 🎨 CanvasEditor.css
┃ ┗ 📄 index.js
┣ 📄 package.json
┣ 📄 README.md
┗ 📄 .gitignore


Copy code

---

## 🖥️ Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/canvas-editor.git
2️⃣ Navigate to the project folder
bash
Copy code
cd canvas-editor
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the development server
bash
Copy code
npm start
5️⃣ Open in your browser
arduino
Copy code
http://localhost:3000
🧩 How It Works
The Fabric.js canvas is initialized inside the CanvasEditor component.

Tools (rectangle, circle, text, pen) manipulate canvas objects dynamically.

The color picker updates both active shapes and pen color.

LocalStorage stores snapshots of your designs (name + image data + date).

You can reload saved designs directly from the history gallery.




Example:

💡 Future Enhancements
🔄 Undo / Redo functionality

🧠 Layer management system

☁️ Cloud save using MongoDB or Firebase

🌙 Dark mode / Theme switcher

📐 Custom shape creation tools

🧑‍💻 Author
👨‍💻 Vickey Yadav
Copy code - https://github.com/Vickey0088/Simple-Canvas-Editor
💼 GitHub Profile - https://github.com/Vickey0088

📜 License
This project is licensed under the MIT License — feel free to use, modify, and distribute it.

🌟 Support
If you like this project, don’t forget to ⭐ star the repository and share it with others!
Contributions and feature suggestions are always welcome 🤝
