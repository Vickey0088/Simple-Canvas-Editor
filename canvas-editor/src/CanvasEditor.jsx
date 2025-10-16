import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import "./CanvasEditor.css";

const CanvasEditor = ({ onNavigateToHome }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [selectedTool, setSelectedTool] = useState("select");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [textInput, setTextInput] = useState("");
  const [history, setHistory] = useState([]);

 
  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: 1300,
      height: 600,
      backgroundColor: "#f4f6f9",
    });
    setCanvas(initCanvas);

    const savedHistory = JSON.parse(localStorage.getItem("canvasHistory") || "[]");
    setHistory(savedHistory);

    initCanvas.on("object:selected", (e) => {
      e.target.set({ cornerStyle: "circle", cornerColor: "#007bff" });
    });

    return () => {
      initCanvas.dispose();
    };
  }, []);

 
  const enableSelect = () => {
    if (!canvas) return;
    setSelectedTool("select");
    canvas.isDrawingMode = false;
    canvas.selection = true;
    canvas.forEachObject((obj) => (obj.selectable = true));
  };

  const addRectangle = () => {
    if (!canvas) return;
    setSelectedTool("rectangle");
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 150,
      height: 100,
      fill: selectedColor,
      stroke: "#444",
      strokeWidth: 2,
    });
    canvas.add(rect).setActiveObject(rect);
    canvas.renderAll();
  };

  const addCircle = () => {
    if (!canvas) return;
    setSelectedTool("circle");
    const circle = new fabric.Circle({
      radius: 50,
      fill: selectedColor,
      stroke: "#444",
      strokeWidth: 2,
      left: 150,
      top: 150,
    });
    canvas.add(circle).setActiveObject(circle);
    canvas.renderAll();
  };

  const addText = () => {
    if (!canvas) return;
    setSelectedTool("text");
    const text = new fabric.IText("Type here...", {
      left: 200,
      top: 200,
      fontSize: 24,
      fill: selectedColor,
    });
    canvas.add(text).setActiveObject(text);
    canvas.renderAll();
  };

  const enablePen = () => {
    if (!canvas) return;
    setSelectedTool("pen");
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      canvas.freeDrawingBrush.color = selectedColor;
      canvas.freeDrawingBrush.width = 3;
    }
  };

  const deleteLastObject = () => {
    if (!canvas) return;
    const objects = canvas.getObjects();
    if (objects.length > 0) {
      canvas.remove(objects[objects.length - 1]);
      canvas.renderAll();
    }
  };

  const changeColor = (color) => {
    setSelectedColor(color);
    if (!canvas) return;

    if (canvas.isDrawingMode) {
      canvas.freeDrawingBrush.color = color;
    }

    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.set("fill", color);
      canvas.renderAll();
    }
  };

  const saveAsImage = () => {
    if (!canvas) return;
    const dataURL = canvas.toDataURL({ format: "png", quality: 1 });
    const name = prompt("Enter a name for your canvas:");
    if (name) {
      const newHistory = [
        ...history,
        { name, dataURL, date: new Date().toISOString() },
      ];
      setHistory(newHistory);
      localStorage.setItem("canvasHistory", JSON.stringify(newHistory));
      alert("✅ Canvas saved successfully!");
    }
  };

  const loadFromHistory = (item) => {
    if (!canvas) return;
    fabric.Image.fromURL(item.dataURL, (img) => {
      canvas.clear();
      canvas.add(img);
      canvas.renderAll();
    });
  };

  const addTextToTop = (text) => {
    if (!canvas || !text.trim()) return;
    const newText = new fabric.IText(text, {
      left: 300,
      top: 50,
      fontSize: 28,
      fill: selectedColor,
      fontWeight: "bold",
    });
    canvas.add(newText);
    setTextInput("");
  };

  return (
    <div className="canvas-editor">
      {/* Top Navbar */}
      <div className="navbar">
        <button onClick={onNavigateToHome} className="home-btn">
          🏠 Home
        </button>
        <div className="tool-group">
          <button
            onClick={enableSelect}
            className={selectedTool === "select" ? "active" : ""}
          >
            🔲 Select
          </button>
          <button onClick={addRectangle}>▭ Rectangle</button>
          <button onClick={addCircle}>⚪ Circle</button>
          <button onClick={addText}>🅣 Text</button>
          <button
            onClick={enablePen}
            className={selectedTool === "pen" ? "active" : ""}
          >
            ✏️ Pen
          </button>
          <button onClick={deleteLastObject}>🗑 Delete</button>
        </div>

        <div className="options">
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => changeColor(e.target.value)}
            title="Pick a color"
          />
          <input
            type="text"
            placeholder="Type text and press Enter"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTextToTop(textInput)}
          />
          <button className="save-btn" onClick={saveAsImage}>
            💾 Save
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>

      {/* Saved History */}
      <div className="history">
        <h3>🖼️ Saved Canvases</h3>
        <div className="history-list">
          {history.length === 0 ? (
            <p className="no-history">No saved canvases yet.</p>
          ) : (
            history.map((item, index) => (
              <div
                key={index}
                className="history-item"
                onClick={() => loadFromHistory(item)}
              >
                <img src={item.dataURL} alt={item.name} />
                <div className="history-info">
                  <strong>{item.name}</strong>
                  <small>{new Date(item.date).toLocaleDateString()}</small>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CanvasEditor;
