import express from "express";
import prisma from "./db/prisma";

const app = express();

app.use(express.json());
app.get("/", async (_req, res) => {
  const sums = await prisma.sum.findMany();
  res.json(sums);
});

app.post("/sum", async (req, res) => {
  const { a, b } = req.body;
  const result = a + b;

  const response = await prisma.sum.create({
    data: {
      a,
      b,
      result,
    },
  });

  res.json({ answer: result, id: response.id });
});

app.post("/multiply", async (req, res) => {
  const { a, b } = req.body;
  const result = a * b;

  const response = await prisma.sum.create({
    data: {
      a,
      b,
      result,
    },
  });

  res.json({ answer: result, id: response.id });
});

export default app;
