DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sellers;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS address;

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  productName TEXT,
  description TEXT[],
  price MONEY,
  soldout BOOLEAN,
  brand TEXT,
  material TEXT,
  size TEXT,
  theme TEXT,
  item_dimensions TEXT,
  category TEXT,
  sub_category TEXT,
  amazon_choice TEXT,
  color TEXT,
  plant_animal_product TEXT,
  use_for_product TEXT,
  item_form TEXT,
  diet_type TEXT,
  flavor TEXT,
  special_ingredients TEXT,
  pkg_info TEXT, 
  unit_count INT,
  num_of_items INT,
  dosage_form TEXT
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  productId INT REFERENCES product(id),
  pictureURL VARCHAR
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  phone char(10) UNIQUE
);

CREATE TABLE sellers (

  id SERIAL PRIMARY KEY,
  companyName TEXT,
  productId INT REFERENCES product(id)
);

CREATE TABLE address (
  id SERIAL PRIMARY KEY,
  sellerId INT REFERENCES sellers(id),
  userId INT REFERENCES users(id),
  street TEXT,
  city TEXT,
  state TEXT,
  zipcode char(5)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  productId INT REFERENCES product(id),
  title TEXT,
  content TEXT,
  rating INT
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  question TEXT,
  productId INT REFERENCES product(id)
);

CREATE TABLE answers(

  id SERIAL PRIMARY KEY,
  userId INT REFERENCES users(id),
  questionID INT REFERENCES questions(id),
  answer TEXT
);




