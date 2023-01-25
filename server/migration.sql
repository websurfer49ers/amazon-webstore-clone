DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sellers;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS address;

CREATE TABLE product (
  id SERIAL,
  product_name TEXT,
  picture_id INT,
  description VARCHAR,
  price MONEY,
  artificial_ship_dates INT
);

CREATE TABLE pictures (
  id SERIAL,
  picture_name VARCHAR
);

CREATE TABLE users (
  id SERIAL,
  firstName TEXT,
  lastName TEXT,
  phone char(10),
);

CREATE TABLE sellers (
  id SERIAL,
  user_id INT
);

CREATE TABLE address (
  id SERIAL,
  user_id INT
);

CREATE TABLE reviews (
  id SERIAL,
  user_id INT,
  title TEXT,
  content TEXT,
  rating INT
)

CREATE TABLE questions (
  id SERIAL,
  user_id INT,
  question TEXT
)

CREATE TABLE answers(
  id SERIAL, 
  user_id INT,
  answer TEXT
)

