import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_NAME);
const pool = new pg.Pool({connectionString: process.env.DB_NAME});

// const pool = new pg.Pool({database: 'amazon-webstore'});
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

/******************** Get all products from the database ********************/
app.get("/api/product/:id", (req, res) => {
  const {id} = req.params;
  pool.query(`SELECT * FROM product where id = ${id}`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get all pictures for a particular product ********************/
app.get("/api/pictures/:id", (req, res) => {
  const {id} = req.params;
  pool.query(`SELECT pictureURL FROM pictures where productId = ${id} returning *`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get average ratings for a particular product ********************/
app.get("/api/rating/:id", (req, res) => {
  const {id} = req.params;
  pool.query(`SELECT ROUND(AVG(rating),1) as AverageRating FROM reviews where productid = ${id}`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get all ratings for a particular product by users ********************/
app.get("/api/rating/product/:id", (req, res) => {
  const {id} = req.params;
  pool.query(
    `SELECT reviews.rating, users.firstName, users.lastName
      FROM reviews
        JOIN users
        ON reviews.userid = users.id
        where reviews.productid = ${id}
        `)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get all questions and answers for particular product ********************/
app.get("/api/questions/product/:id", (req, res) => {
  const {id} = req.params;
  pool.query(
    `SELECT questions.question, answers.answer
      FROM questions
        JOIN answers
        ON questions.id = answers.questionId
        where questions.productId = ${id}
        `)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get questions upon search for particular product ********************/
// app.get("/api/questions/product/search/:id/:key", (req, res) => {
//   const {id} = req.params;
//   pool.query(
//     `SELECT questions.question, answers.answer
//     FROM questions
//       JOIN answers
//       ON questions.id = answers.questionId
//       where questions.productId = ${id}
//       AND questions.question like ${key}
//       `)
//   .then((result) => {
//     res.send(result.rows);
//   })
//   .catch((error)=>{
//     res.send(error.message);
//   });
// });



// app.post("/api/tasks", (req, res) => {
//   const { description } = req.body;
//   pool.query("INSERT INTO tasks (description) VALUES ($1) RETURNING *", [
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
