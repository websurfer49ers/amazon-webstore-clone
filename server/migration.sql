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
  productName TEXT,
  description VARCHAR,
  price MONEY,
  artificial_ship_dates INT
);

CREATE TABLE pictures (
  id SERIAL,
  productId INT REFERENCES product(id)
  pictureName VARCHAR
);

CREATE TABLE users (
  id SERIAL,
  firstName TEXT,
  lastName TEXT,
  phone char(10),
);

CREATE TABLE sellers (
  id SERIAL,
  companyName TEXT,
  productId INT REFERENCES product(id)
);

CREATE TABLE address (
  id SERIAL,
  sellerId INT REFERENCES sellers(id),
  userId INT REFERENCES users(id),
  street TEXT,
  city TEXT,
  state INT,
  zipcode char(5)
);

CREATE TABLE reviews (
  id SERIAL,
  userId INT REFERENCES users(id),
  title TEXT,
  content TEXT,
  rating INT
)

CREATE TABLE questions (
  id SERIAL,
  userId INT REFERENCES users(id),
  question TEXT
)

CREATE TABLE answers(
  id SERIAL, 
  userId INT REFERENCES users(id),
  questionID INT REFERENCES questions(id),
  answer TEXT
)

