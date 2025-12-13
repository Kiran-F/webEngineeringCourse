import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Load env variables
const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const colName = process.env.COLLECTION_NAME;

// Create client
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db(dbName);
    const collection = db.collection(colName);

    // -------------------
    // CRUD ROUTES
    // -------------------

    // CREATE student
    app.post("/students", async (req, res) => {
      const student = req.body;
      const result = await collection.insertOne(student);
      res.json({ message: "Student created", id: result.insertedId });
    });

    // READ all students
    app.get("/students", async (req, res) => {
      const students = await collection.find().toArray();
      res.json(students);
    });

    // READ one student
    app.get("/students/:id", async (req, res) => {
      try {
        const id = new ObjectId(req.params.id);
        const student = await collection.findOne({ _id: id });
        res.json(student);
      } catch {
        res.status(400).json({ error: "Invalid ID" });
      }
    });

    // UPDATE student
    app.put("/students/:id", async (req, res) => {
      try {
        const id = new ObjectId(req.params.id);
        const updates = { $set: req.body };
        const result = await collection.updateOne({ _id: id }, updates);
        res.json({ message: "Updated", result });
      } catch {
        res.status(400).json({ error: "Invalid ID" });
      }
    });

    // DELETE student
    app.delete("/students/:id", async (req, res) => {
      try {
        const id = new ObjectId(req.params.id);
        await collection.deleteOne({ _id: id });
        res.json({ message: "Deleted" });
      } catch {
        res.status(400).json({ error: "Invalid ID" });
      }
    });

    // Start server
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
}

main();
