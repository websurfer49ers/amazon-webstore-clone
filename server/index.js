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

/******************** Get all products with description and pictures ********************/
app.get("/api/product", (req, res) => {
  pool.query(
    `SELECT product.*, pictures.pictureURL FROM product
      JOIN pictures
      ON product.id = pictures.productid
    `)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get all p ********************/
// app.get("/api/product", (req, res) => {
//   pool.query(
//     `SELECT product.*, pictures.pictureURL FROM product
//       JOIN pictures
//       ON product.id = pictures.productid
//     `)
//   .then((result) => {
//     res.send(result.rows);
//   })
//   .catch((error)=>{
//     res.send(error.message);
//   });
// });

/******************** Get all product IDs ********************/
app.get("/api/productIds", (req, res) => {
  pool.query(
    `SELECT id FROM product ORDER BY id ASC`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get 'About this item' ********************/
app.get("/api/product/description/:productId", (req, res) => {
  const {productId} = req.params;
  pool.query(`SELECT desciption FROM product where id = ${productId}`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

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
  pool.query(`SELECT * FROM pictures where productId = ${id}`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get 1 pictureURL from pictures ********************/
app.get("/api/sponsored/:productId", (req, res) => {
  const {productId} = req.params;
  pool.query(`select * from pictures WHERE productId = ${productId} limit 1`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get seller for a particular product ********************/
app.get("/api/sellers/:id", (req, res) => {
  const {id} = req.params;
  pool.query(`SELECT * FROM sellers where productId = ${id}`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get ALL ratings for a particular product ********************/
// app.get("/api/rating/:productId", (req, res) => {
//   const {productId} = req.params;
//   pool.query(`SELECT * FROM reviews where productid = ${productId}`)
//   .then((result) => {
//     res.send(result.rows);
//   })
//   .catch((error)=>{
//     res.send(error.message);
//   });
// });

/******************** Get AVERAGE ratings for a particular product ********************/
app.get("/api/avgrating/:productId", (req, res) => {
  const {productId} = req.params;
  pool.query(`SELECT ROUND(AVG(rating),1) as AverageRating FROM reviews where productid = ${productId}`)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get all ratings for a particular product including usernames ********************/
app.get("/api/rating/product/:productId", (req, res) => {
  const {productId} = req.params;
  pool.query(
    `SELECT reviews.*, users.firstName, users.lastName
      FROM reviews
        JOIN users
        ON reviews.userid = users.id
        where reviews.productid = ${productId}
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
    `SELECT
      questions.id as questionId, questions.question, questions.userid as question_user,
      answers.id as answersID, answers.answer, answers.userid as answer_user, users.firstName as answers_firstName
      FROM questions
        JOIN answers
          ON questions.id = answers.questionId
        JOIN users
          ON answers.id = users.id
        where questions.productId = ${id}
        `)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Get number of questions for particular product ********************/
app.get("/api/countquestions/:productId", (req, res) => {
  const {productId} = req.params;
  pool.query(`SELECT count(id) from questions where productId = ${productId}`)
  .then((result) => {
    res.send(result.rows[0]);
  })
  .catch((error)=>{
    res.send(error.message);
  });
});

/******************** Add questions to the product ********************/
app.post("/api/questions/product/:productId", (req, res) => {
  const { productId } = req.params;
  const { userId, question } = req.body;
  pool.query(`INSERT INTO questions (productId, userId, question) VALUES (${productId},${userId},'${question}') returning *`)
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error)=>{
      res.send(error.message);
    });;
});

/******************** Add answers to the question ********************/
app.post("/api/answers", (req, res) => {
  const { userId, questionId, answer } = req.body;
  pool.query(`INSERT INTO answers (userId, questionId, answer) VALUES (${userId},${questionId},'${answer}') returning *`)
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error)=>{
      res.send(error.message);
    });;
});

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
