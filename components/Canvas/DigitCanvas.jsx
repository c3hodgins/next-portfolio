"use client";
import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import { FaRedoAlt, FaBrain } from "react-icons/fa";

export default function DigitCanvas() {
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasClear, setCanvasClear] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const modelRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        if (!modelRef.current) {
          modelRef.current = await tf.loadLayersModel("/mnist_model/model.json");
        }
        setIsModelLoading(false);
      } catch (err) {
        console.error("Model failed to load", err);
      }
    };
    loadModel();
  }, []);

  const handleClearCanvas = () => {
    setCanvasClear((current) => !current);
    setPrediction(null);
  };

  const getCanvasImage = () => {
    const canvas = canvasRef.current;
    const smallCanvas = document.createElement("canvas");
    smallCanvas.width = 28;
    smallCanvas.height = 28;
    const smallCtx = smallCanvas.getContext("2d");

    // MNIST models usually expect black backgrounds with white strokes
    smallCtx.fillStyle = "black";
    smallCtx.fillRect(0, 0, 28, 28);
    
    // SCALE the 280px canvas down to 28px
    smallCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 28, 28);
    return { smallCanvas, smallCtx };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [canvasClear]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 14; // Slightly thicker for better MNIST recognition
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";

    const getEventCoordinates = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        offsetX: clientX - rect.left,
        offsetY: clientY - rect.top,
      };
    };

    const startDrawing = (e) => {
      setIsDrawing(true);
      const { offsetX, offsetY } = getEventCoordinates(e);
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      if (e.cancelable) e.preventDefault();
      const { offsetX, offsetY } = getEventCoordinates(e);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      ctx.closePath();
    };

    if (prediction === null) {
      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      window.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("touchstart", startDrawing, { passive: false });
      canvas.addEventListener("touchmove", draw, { passive: false });
      canvas.addEventListener("touchend", stopDrawing);
    }

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("touchstart", startDrawing);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", stopDrawing);
    };
  }, [isDrawing, prediction]);

  const predictDigit = async () => {
    if (!modelRef.current) return;

    // Use tf.tidy to automatically clean up tensors
    const predictedDigit = tf.tidy(() => {
      const image = getCanvasImage();
      const imageData = image.smallCtx.getImageData(0, 0, 28, 28);
      
      // Convert to tensor
      const tensor = tf.browser
        .fromPixels(imageData, 1) // Get grayscale
        .toFloat()
        .div(tf.scalar(255))      // Normalize to 0-1
        .expandDims(0);           // Add batch dimension [1, 28, 28, 1]

      const pred = modelRef.current.predict(tensor);
      return pred.argMax(1).dataSync()[0];
    });

    setPrediction(predictedDigit);
  };

  return (
    <section className="bg-slate-950 py-24 px-6 flex flex-col items-center">
      {/* Header Info */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
          <FaBrain /> Neural Network Demo
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">MNIST Digit Classifier</h2>
        <p className="text-slate-400">Draw a number (0-9) and let the model predict it in real-time.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
        {/* Canvas Side */}
        <div className="relative group">
          {/* Animated Glow Border */}
          <div className="absolute bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative -inset-1 bg-black rounded-lg p-2 border border-slate-800">
            <canvas
              ref={canvasRef}
              width={280}
              height={280}
              className="cursor-crosshair rounded touch-none"
            />
          </div>

          <div className="mt-6 flex gap-4">
            {prediction === null ? (
              <>
                <button
                  onClick={predictDigit}
                  disabled={isModelLoading}
                  className="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20"
                >
                  {isModelLoading ? "Loading Model..." : "Analyze Digit"}
                </button>
                <button
                  onClick={handleClearCanvas}
                  className="py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg transition-all"
                >
                  Clear
                </button>
              </>
            ) : (
              <button
                onClick={handleClearCanvas}
                className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all border border-slate-700"
              >
                <FaRedoAlt /> Try Another
              </button>
            )}
          </div>
        </div>

        {/* Prediction Results Side */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[300px] w-full border-2 border-dashed border-slate-800 rounded-2xl p-8 bg-slate-900/30">
          {prediction !== null ? (
            <div className="text-center animate-in fade-in zoom-in duration-300">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Model Output</span>
              <div className="text-9xl font-black text-white mt-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                {prediction}
              </div>
              <p className="text-slate-400 mt-4 italic">"I'm fairly confident that's a {prediction}."</p>
            </div>
          ) : (
            <div className="text-center opacity-40">
              <div className="w-20 h-20 border-4 border-slate-800 border-t-blue-500 rounded-full mx-auto animate-spin mb-4" />
              <p className="text-slate-500 font-medium">Waiting for input...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}