insert into product
    (productName, price, sold)
        values
        ('squirrel', 9.99, 'f');

insert into pictures
    (productId, pictureUrl)
        values
        (1, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/613rrhRTmEL._AC_SL1200_.jpg'),
        (1, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/71YegV7wcQL._AC_SL1200_.jpg');

insert into users
    (firstName, lastName, phone)
        values  
        ('Michael', 'Long', 6356155660),
        ('Nathaniel', 'Hammond', 9705128733),
        ('Robert', 'Parker', 7177358970),
        ('Melissa', 'Mann', 7030626869),
        ('William', 'Taylor', 1650028102),
        ('Kelly', 'Wiggins', 8237801521),
        ('Kelly', 'Richardson', 3300365903),
        ('Lonnie', 'Taylor', 5961035936),
        ('Jose', 'Banks', 7227971121),
        ('Brad', 'Lawson', 9132162233);

insert into sellers
    (companyName, productId)
        values
        ('Neron Brands', 1);

insert into reviews
    (userId, title, content, rating)
        values  
        (1, 'Awesome', 'This is an awesome product', 5);

insert into questions
    (userId, question, productId)
        values 
        (5, 'Can the puppet be worn while performing intricate hand motions in a Cthulhu summoning ritual?', 1);

insert into answers
    (userId, questionID, answer)
        values
        (2, 1, 'My squirrel throws intricate gangs signs at foos not repping his set. So i dont see why it cant summon lord Cthulhu. I plan on working a deal with Beelzebub later on my lunch break. Ill lyk how it goes');

insert into reviews
    (userid, productId, title, content, rating)
        values
        (4, 1, 'Cute', 'I bought this as a gag gift and it went over well. Silly and cute as described. The thumb portion was a bit small.', 4),
        (5, 1, 'Adorable and Hilarious', 'Honestly only bought this because I got an Amazon gift card from someone and thought it would be hilarious to bring out around friends. Work from home clearly got to me lol. It''s funny for sure, but unfortunately my hand can''t quite contort right to hold it how it''s supposed to go. Also, the finger holes are a little big, so it slides off sometimes, but it is what it is. I got some laughs out of it and that was enough for me.', 4),
        (6, 1, 'Arrived Damaged', 'I have purchased this product as a gift twice now and both times they have arrived damaged.', 1);

insert into address
    (sellerid, userid, street, city, state, zipcode)
        values
        (1, null, '1 Amazoom Dr', 'Seattle', 'WA', '98109' ),
        (null, 1, '349 Lost Loaf', 'Bellefontaine', 'AZ', '36149' ),
        (null, 2, '438 Sunny Approach', 'Dayton Lakes', 'WA', '55196' ),
        (null, 3, '69 Sunny Approach', 'Dayton Lakes', 'WA', '55196' ),
        (null, 4, '99 Heather Prairie Ledge ', 'Selawik', 'TX', '52809' ),
        (null, 5, '435 Pine Divide', 'Parkersburg', 'MA', '92680' ),
        (null, 6, '1396 Cotton Rapid', 'Richwood village', 'LA', '59726' ),
        (null, 7, '3730 Cotton Rapid', 'Richwood village', 'LA', '59726' ),
        (null, 8, '739 Rapid Gateway', 'Sesser', 'WA', '44781' ),
        (null, 9, '123 Quiet Park', 'Apollo borough', 'IL', '61117' ),
        (null, 10, '552 Harvest Row', 'Lackland AFB', 'IL', '98715' );




