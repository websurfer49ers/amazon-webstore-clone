insert into product
    (productName, description, price)
        values
        ('squirrel', 'This is a squirrel', 9.99);

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
        ('ABC Company', 1);

insert into reviews
    (userId, title, content, rating)
        values  
        (1, 'Awesome', 'This is an awesome product', 5);

insert into questions
    (userId, question)
        values 
        (5, 'Can the puppet be worn while performing intricate hand motions in a Cthulhu summoning ritual?');

insert into answers
    (userId, questionID, answer)
        values
        (2, 1, 'My squirrel throws intricate gangs signs at foos not repping his set. So i dont see why it cant summon lord Cthulhu. I plan on working a deal with Beelzebub later on my lunch break. Ill lyk how it goes');

insert into reviews
    (userid, title, content, rating)
        values
        (2, 'Good', 'I gave this to my grandfather for his 100th birthday. He loved it', 4);

