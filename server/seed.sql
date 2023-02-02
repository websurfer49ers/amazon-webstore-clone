-- insert into pictures
--     (productId, pictureUrl)
--         values
--         (1, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/613rrhRTmEL._AC_SL1200_.jpg'),
--         (1, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/71YegV7wcQL._AC_SL1200_.jpg');

-- insert into users
--     (firstName, lastName, phone)
--         values  
--         ('Michael', 'Long', 6356155660),
--         ('Nathaniel', 'Hammond', 9705128733),
--         ('Robert', 'Parker', 7177358970),
--         ('Melissa', 'Mann', 7030626869),
--         ('William', 'Taylor', 1650028102),
--         ('Kelly', 'Wiggins', 8237801521),
--         ('Kelly', 'Richardson', 3300365903),
--         ('Lonnie', 'Taylor', 5961035936),
--         ('Jose', 'Banks', 7227971121),
--         ('Brad', 'Lawson', 9132162233);

-- insert into sellers
--     (companyName, productId)
--         values
--         ('Neron Brands', 1),
--         ('BG Health', 2),
--         ('CrayproFG Direct', 3);

-- insert into reviews
--     (userId, title, content, rating)
--         values  
--         (1, 'Awesome', 'This is an awesome product', 5);

-- insert into questions
--     (userId, question, productId)
--         values 
--         (5, 'Can the puppet be worn while performing intricate hand motions in a Cthulhu summoning ritual?', 1);

-- insert into answers
--     (userId, questionID, answer)
--         values
--         (2, 1, 'My squirrel throws intricate gangs signs at foos not repping his set. So i dont see why it cant summon lord Cthulhu. I plan on working a deal with Beelzebub later on my lunch break. Ill lyk how it goes');

-- insert into reviews
--     (userid, productId, title, content, rating)
--         values
--         (4, 1, 'Cute', 'I bought this as a gag gift and it went over well. Silly and cute as described. The thumb portion was a bit small.', 4),
--         (5, 1, 'Adorable and Hilarious', 'Honestly only bought this because I got an Amazon gift card from someone and thought it would be hilarious to bring out around friends. Work from home clearly got to me lol. It''s funny for sure, but unfortunately my hand can''t quite contort right to hold it how it''s supposed to go. Also, the finger holes are a little big, so it slides off sometimes, but it is what it is. I got some laughs out of it and that was enough for me.', 4),
--         (6, 1, 'Arrived Damaged', 'I have purchased this product as a gift twice now and both times they have arrived damaged.', 1);

-- insert into address
--     (sellerid, userid, street, city, state, zipcode)
--         values
--         (1, null, '1 Amazoom Dr', 'Seattle', 'WA', '98109' ),
--         (null, 1, '349 Lost Loaf', 'Bellefontaine', 'AZ', '36149' ),
--         (null, 2, '438 Sunny Approach', 'Dayton Lakes', 'WA', '55196' ),
--         (null, 3, '69 Sunny Approach', 'Dayton Lakes', 'WA', '55196' ),
--         (null, 4, '99 Heather Prairie Ledge ', 'Selawik', 'TX', '52809' ),
--         (null, 5, '435 Pine Divide', 'Parkersburg', 'MA', '92680' ),
--         (null, 6, '1396 Cotton Rapid', 'Richwood village', 'LA', '59726' ),
--         (null, 7, '3730 Cotton Rapid', 'Richwood village', 'LA', '59726' ),
--         (null, 8, '739 Rapid Gateway', 'Sesser', 'WA', '44781' ),
--         (null, 9, '123 Quiet Park', 'Apollo borough', 'IL', '61117' ),
--         (null, 10, '552 Harvest Row', 'Lackland AFB', 'IL', '98715' ),
--         (2, null, '1 Amazoom Dr', 'Seattle', 'WA', '98109' ),
--         (3, null, '1 Amazoom Dr', 'Seattle', 'WA', '98109' );


-- insert into product
--     (productName, description, price, soldout, brand, material, size, theme, item_dimensions)
--         values(
--             'WowWee Fingerlings Glitter Panda - Archie (Blue) - Interactive Collectible Baby Pet',
--             '{"My name is Archie and I am true blue.",
--                 "Archie is a blue sparkly panda with iridescent sparkles on his arms and legs!",
--                 "Fingerlings baby pandas respond to sound, motion and touch with blinking eyes, head turns and panda singsong.",
--                 "Blow them kisses and they''ll kiss you back!",
--                 "Hold them upside down, rock them to sleep or make loud noises to see how they react!",
--                 "Collect all of the Fingerlings and watch them sing together!"}',
--             21.99,
--             'f',
--             'WowWee',
--             'Plastic',
--             '2.5 x 2.18 x 3.9 inches',
--             'Animals',
--             '2.5 x 2.18 x 3.9 inches'
--         );

-- insert into product
--     (productName, description, price, soldout, brand, material, size, theme, item_dimensions)
--         values(
--             'Dinosaur Figure Finger Toys, Animal Bath Finger Puppets',
--             '{"Safe and Reliable Materials: These dinosaurs are made from highly durable, toxin-free soft vinyl, which allows children to play with confidence.Lifelike details, vivid colores and realistic modeling will be loved by chidren.",
--                 "Excellent Early Education Toys: A variety of bright colors and realistic model can exercise child''s sensitivity to recognize these dinosaurs and increase their knowledge. It helps develop child''s mind, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operation.",
--                 "Family Interactive Toys: They are also interactive toys for parents and children. Parents and children play together, which can enhance their mutual feelings and create a good family atmosphere.Wear these finger puppets to tell children stories about dinosaurs, introduce dinosaur species and habits. Children will love them!",
--                 "Novel Design: Each finger with different dinosaur playtime fun for kids.They are cute and very portable.Puppets can saty secure on the finger,easy to use on any occasion.",
--                 "Perfect Gift: Fun and Interactive gift, perfect for birthday gifts, Christmas gifts, classroom prize, Children''s day gifts, birthday gifts, party gifts, interactive small gifts.They Will Bring Endless Fun!"}',
--             18.99,
--             'f',
--             'YOOUSOO',
--             'Vinyl, Plush',
--             'Medium',
--             'Christmas',
--             '2.5 x 2.18 x 3.9 inches'
--         );

-- insert into questions
--     (userId, question, productId)
--         values 
--         (5, 'Do you have one with no glitter?', 2),
--         (6, 'Are the baby really smaller than the bigger fingerlings?', 2),
--         (7, 'What size batteries do these Fingerlings use?', 2),
--         (8, 'Do they have ant bad rubber smell ?', 3),
--         (9, 'How mant dinosaurs are included in this package?', 3),
--         (10, 'It shows 10 different dinos. The answers from people says only five. So which is it, 10 dinos or 5 dinos?', 3);


-- insert into answers
--     (userId, questionID, answer)
--         values
--         (1, 8, 'Not a panda'),
--         (2, 9, 'This is not a baby one, but yes the babies are smaller'),
--         (3, 10, 'Fingerlings require 4 LR44/AG13 button cell batteries but they come with batteries and ready to play with.'),
--         (1, 11, 'Nop no smell at all'),
--         (2, 12, 'Yes, there are five sets in it, which can satisfy five dinosaur states'),
--         (3, 13, 'I received all 10 - all different. The little dinosaur enthusiast I gave them to LOVED them. She would put all the carnivores on one hand and the herbivores on the other hand and have Dinosaur Family Feuds.');

-- insert into reviews
--     (userid, productId, title, content, rating)
--         values
--         (4, 2, 'Happy five year old‼️‼️', 'I must admit that I was pleasantly surprised with this because I had a totally different image of it in my head and my five year old is just ecstatic with it so I will be ordering more of them now that I see they''re worth the price ☺️', 5),
--         (5, 2, 'Glitter is rough and limited responses', 'Cute but the main issue I have is with the glitter. It''s gritty and rough. You really cant comfortably put this on your finger. I didnt realize the glitter was exposed like this and I assumed it was under a smooth clear coat. And yes, the glitter sheds. Also, these are advertised to have like 40 responses and it actually only does a couple things. Blowing into the mouth sensor doesnt make it blow us a kiss back like our other fingerling does.', 3),
--         (6, 2, 'My daughter loves!', 'My daughter loves this! It came within 2 days and already had batteries', 5),
--         (7, 3, 'Much Nicer Than Expected', 'I was afraid that they might be made of thin rubber, but no. The heads are thick enough to hold their shapes even when they are not on a finger.

-- Painting is just as nice as the catalog picture. Right size for smallish fingers - and ten is the perfect number for a kid to put on a dinosaur war.', 5),
--         (8, 3, 'Great', 'Great quality. My son is going to love these', 5),
--         (9, 3, 'Worth it!', 'Super cute, 2 year old loves it! Good material!', 4);