import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


const pool = new pg.Pool({
  database: process.env.DB_NAME, username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD
});

// const pool = new pg.Pool({database: 'amazon-webstore'});
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

/******************** Get all products from the database ********************/
app.get("/api/product/", (req, res) => {
  //const {id} = req.params;
  pool.query(`SELECT * FROM product`).then((result) => {
    res.send(result.rows);
  });
});

/******************** Get ratings for a particular product ********************/
app.get("/api/rating/:id", (req, res) => {
  const {id} = req.params;
  pool.query(`SELECT ROUND(AVG(rating),1) as AverageRating FROM reviews where productid = ${id}`).then((result) => {
    res.send(result.rows);
  });
});


// app.post("/api/tasks", (req, res) => {
//   const { description } = req.body;
//   pool
//     .query("INSERT INTO tasks (description) VALUES ($1) RETURNING *", [
//       description,
//     ])
//     .then((result) => {
//       res.send(result.rows[0]);
//     });
// });

// app.delete("/api/tasks/:id", async (req, res) => {
//   const { id } = req.params;

//   await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
//   res.sendStatus(200);
// });

// app.patch("/api/tasks/:id", async (req, res) => {
//   const { id } = req.params;
//   const { description } = req.body;
//   const result = await pool.query(
//     "UPDATE tasks SET description=$1 WHERE id=$2 RETURNING *",
//     [description, id]
//   );
//   res.send(result.rows[0]);
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
