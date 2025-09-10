import express from "express"
import { recipes } from "./data.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/api/recipes", (req, res) => {
    res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
    const id = String(req.params.id).trim();
    const found = items.find(i => i.id === id);
    if (!found) return res.status(404).json({ error: "Item not found"});
    res.json(found);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});