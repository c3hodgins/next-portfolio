"use client";
import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import styles from "@/components/Canvas/DigitCanvas.module.css";
import { FaRedoAlt } from "react-icons/fa";

export default function DigitCanvas() {
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasClear, setCanvasClear] = useState(false);
  const modelRef = useRef(null);
  
  useEffect(() => {
    const loadModel = async () => {
      if (!modelRef.current) {
        modelRef.current = await tf.loadLayersModel("/mnist_model/model.json");
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
    const ctx = canvas.getContext("2d");

    // Create a new small canvas
    const smallCanvas = document.createElement("canvas");
    smallCanvas.width = 28;
    smallCanvas.height = 28;
    const smallCtx = smallCanvas.getContext("2d");

    // Scale down the image from 280x280 to 28x28
    smallCtx.fillStyle = "white";
    // Set background to white
    smallCtx.fillRect(0, 0, 28, 28);
    smallCtx.drawImage(canvas, 0, 0, 28, 28);

    // Get the pixel data from the smaller canvas
    //displayCtx.getImageData(0,0,28,28);
    return { smallCanvas, smallCtx };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // **Set background once when the component mounts**
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [canvasClear]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up drawing properties
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white"; // White strokes for MNIST format

    const startDrawing = (e) => {
      setIsDrawing(true);
      const { offsetX, offsetY } = getEventCoordinates(e);
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      e.preventDefault(); // Prevent scrolling when drawing
      const { offsetX, offsetY } = getEventCoordinates(e);
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      ctx.closePath();
    };

    const getEventCoordinates = (e) => {
      if (e.touches) {
        const rect = canvas.getBoundingClientRect();
        return {
          offsetX: e.touches[0].clientX - rect.left,
          offsetY: e.touches[0].clientY - rect.top,
        };
      }
      return { offsetX: e.offsetX, offsetY: e.offsetY };
    };

    // Add event listeners
    if (prediction === null) {
      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseleave", stopDrawing);

      canvas.addEventListener("touchstart", startDrawing);
      canvas.addEventListener("touchmove", draw);
      canvas.addEventListener("touchend", stopDrawing);
      canvas.addEventListener("touchcancel", stopDrawing);
    }

    return () => {
      // Cleanup event listeners when component unmounts
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);

      canvas.removeEventListener("touchstart", startDrawing);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", stopDrawing);
      canvas.removeEventListener("touchcancel", stopDrawing);
    };
  }, [isDrawing, prediction]);

  async function predictDigit() {
    const image = getCanvasImage();
    const imageData = image.smallCtx.getImageData(0, 0, 28, 28);

    // Convert image to tensor
    const tensor = tf.browser
      .fromPixels(imageData, 1) // Convert to grayscale
      .resizeNearestNeighbor([28, 28])
      .toFloat()
      .div(tf.scalar(255))
      .expandDims(0); // Make it batch size 1

    // Load the MNIST model
    const prediction = modelRef.current.predict(tensor);
    const predictedDigit = prediction.argMax(1).dataSync()[0];

    setPrediction(predictedDigit);
  }

  return (
    <>
      <div className={styles.classifier}>
        <h1>Interactive MNIST digit classifier with Tensorflow.js</h1>
        <h2>Try drawing a number 0-9</h2>
      </div>
      <div className={styles.mnistContainer}>
        <div className={styles.mnistPredictor}>
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className={styles.mnistCanvas}
          />
          <div className={styles.buttonContainer}>
            {prediction == null && (
              <>
                <button className={styles.button} onClick={predictDigit}>
                  Predict
                </button>
                <button className={styles.button} onClick={handleClearCanvas}>
                  Clear
                </button>
              </>
            )}
            {prediction !== null && (
              <>
                <button className={styles.button} onClick={handleClearCanvas}>
                  <FaRedoAlt
                    style={{ textAlign: "center", justifySelf: "center" }}
                  />
                </button>
              </>
            )}
          </div>
        </div>
        <h1
          style={{
            opacity: prediction !== null ? 1 : 0,
            transition: "opacity .2s ease-in-out ",
          }}
        >
          Predicted Digit: {prediction}
        </h1>
      </div>
    </>
  );
}
