import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Firestore } from "@google-cloud/firestore";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Explicit Firestore Configuration (Stable Local Setup)
const firestore = new Firestore({
  projectId: "the-nri-diary",
  keyFilename: "./service-account.json",
});

app.get("/", (req, res) => {
  res.json({ message: "TheNRIDiary AI Backend Running" });
});

app.get("/test-firestore", async (req, res) => {
  try {
    const docRef = await firestore.collection("healthcheck").add({
      status: "connected",
      timestamp: new Date(),
    });

    res.json({
      message: "Firestore connected successfully",
      documentId: docRef.id,
    });
  } catch (error) {
    console.error("FULL ERROR:", error);
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});