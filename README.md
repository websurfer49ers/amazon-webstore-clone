# Amazoom-Web-Store

Amazoom Web Store is a Full-Stack React application that mimics the Amazon Product Page. This application is built using a hosted database that stores 5 products with ratings, user reviews, and questions / answers. 

- All product information is displayed on the frontend using fetch requests to the database. 
- The majority of the styling is accomplished using vanilla CSS, and the HTML elements are entirely created through React.

In order to test this application locally, you will need to create your own database, as well as an .env file. a SEED.sql file has been included with some pre-built product information for testing.

## Static Webpage

https://amazoom.onrender.com/#topOfPage

## Local Testing

Create and seed the database using Postgres and link the database using an .env file. Write the database name to the .env as DB_NAME=your_database_name?ssl=true

```bash
./AMAZON-WEBSTORE-CLONE: npm install --save
./client: npm install --save
./AMAZON-WEBSTORE-CLONE: npm run dev
```

## Technologies Used
NodeJS, React, HTML/ CSS, Express, Postgres, Vite

## Contributors 
- Sangyeon Pak: https://github.com/sangyeonpak
- Aakash Ghimire: https://github.com/AakashGhimire
- Lucas Tousignant: https://github.com/websurfer49
- Ty Sebesta: https://github.com/tnsebesta
- Kyle De Martino: https://github.com/Kydem