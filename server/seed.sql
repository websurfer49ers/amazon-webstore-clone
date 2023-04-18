insert into product
    (productName, description, price, soldout, brand, material, size, theme, item_dimensions)
        values(
            'WowWee Fingerlings Glitter Panda - Archie (Blue) - Interactive Collectible Baby Pet',
            '{"My name is Archie and I am true blue.",
                "Archie is a blue sparkly panda with iridescent sparkles on his arms and legs!",
                "Fingerlings baby pandas respond to sound, motion and touch with blinking eyes, head turns and panda singsong.",
                "Blow them kisses and they''ll kiss you back!",
                "Hold them upside down, rock them to sleep or make loud noises to see how they react!",
                "Collect all of the Fingerlings and watch them sing together!"}',
            21.99,
            'f',
            'WowWee',
            'Plastic',
            '2.5 x 2.18 x 3.9 inches',
            'Animals',
            '2.5 x 2.18 x 3.9 inches'
        );

insert into product
    (productName, description, price, soldout, brand, material, size, theme, item_dimensions)
        values(
            'Dinosaur Figure Finger Toys, Animal Bath Finger Puppets',
            '{"Safe and Reliable Materials: These dinosaurs are made from highly durable, toxin-free soft vinyl, which allows children to play with confidence.Lifelike details, vivid colores and realistic modeling will be loved by chidren.",
                "Excellent Early Education Toys: A variety of bright colors and realistic model can exercise child''s sensitivity to recognize these dinosaurs and increase their knowledge. It helps develop child''s mind, creativity and thinking ability and train their hand-eye-coordination and hand flexibility by their own operation.",
                "Family Interactive Toys: They are also interactive toys for parents and children. Parents and children play together, which can enhance their mutual feelings and create a good family atmosphere.Wear these finger puppets to tell children stories about dinosaurs, introduce dinosaur species and habits. Children will love them!",
                "Novel Design: Each finger with different dinosaur playtime fun for kids.They are cute and very portable.Puppets can saty secure on the finger,easy to use on any occasion.",
                "Perfect Gift: Fun and Interactive gift, perfect for birthday gifts, Christmas gifts, classroom prize, Children''s day gifts, birthday gifts, party gifts, interactive small gifts.They Will Bring Endless Fun!"}',
            18.99,
            'f',
            'YOOUSOO',
            'Vinyl, Plush',
            'Medium',
            'Christmas',
            '2.5 x 2.18 x 3.9 inches'
        );


insert into product
    (productName, price, soldout, brand, item_form, diet_type, flavor, special_ingredients, pkg_info, unit_count, num_of_items, dosage_form, color)
    values(
        'BEARVANA Gummies for You Herbal Blue - Supplement for Women - Delicious Berry Gummy Pills - 60 Gummies',
        '26.98',
        'false',
        'BEARVANA',
        'Gummy',
        'Vegan',
        'Berry',
        'Amino Acid',
        'Bottle, Jar',
        60,
        1,
        'Gummy',
        'Blue Herbal');

insert into product
    (productName, price, soldout, brand, material, category, sub_category, amazon_choice, color, plant_animal_product, use_for_product)
    values(
        'Whaline 300 Pieces Artificial Autumn Maple Leaves Mixed Fall Colored Leaf for Weddings, Events, Art Scrapbooking and Thanksgiving Day Decorations (Red)',
        7.99,
        'false',
        'Whaline',
        'Polyester',
        'Home & Kitchen',
        'Home Décor Products',
        'true',
        'Red',
        'Maple',
        'Party, Wedding'
    );

-- update product set description=
--     '{
--         "Not your average bear! These gummies work by boosting the body''s estrogen level in an organic way. Bearvana gummies help you enhance and show off your womanly figure more naturally.",
--         "DELICIOUS BERRY FLAVORED GUMMY: Bearvana gummies are delicious and easy to eat. Boost your confidence and rock that bold dress you bought by taking only two gummies a day! One jar contains 60 gummies, which are good for a one month supply.",
--         "SAFE, NATURAL INGREDIENTS: Bearvana gummies are vegan, gluten-free, soy-free, and cruelty-free gummies. Made from 9 exotic herbal extracts plus vitamins, these yummy gummies are ideal for a woman.",
--         "NO DANGEROUS PROCEDURES: Not everyone can afford surgical implants to increase their bottom size. Bearvana gummies will help women without fake implants, and prefer a more vegan-friendly way.",
--         "IMPROVES HAIR HEALTH: They also contain essential vitamins and nutrients that contribute to beautiful hair. It''s the perfect solution for a woman who wants to enhance her feminine side."
--     }'
--     where id = 4;

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
        ('Neron Brands', 1),
        ('BG Health', 2),
        ('CrayproFG Direct', 3),
        ('BEARVANA', 4);
        -- ('Whale Online US', 5);

insert into pictures
    (productId, pictureUrl)
        values
        (1, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/613rrhRTmEL._AC_SL1200_.jpg'),
        (1, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/71YegV7wcQL._AC_SL1200_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/61CMjcAl-1L._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71BVNra%2BxeL._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71G4IhlP2sL._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71LFV4LJZlL._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71m126Sdd0L._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71OV0koOycL._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71To%2B10s9%2BL._AC_SL1500_.jpg'),
        (2, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product2/71UJDoeCsEL._AC_SL1500_.jpg'),
        (3, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product3/61-ao884nPL._AC_UX679_.jpg'),
        (3, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product3/617Hyl7kEjL._AC_UX679_.jpg'),
        (3, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product3/61ed1yNoAOL._AC_UX679_.jpg'),
        (3, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product3/61soArKV9yL._AC_UX679_.jpg'),
        (3, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product3/61U2Sqnh3gL._AC_UX679_.jpg'),
        (3, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product3/71N2QBUwtpL._AC_UX679_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/616F%2B8kisjL._AC_SL1500_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/51vuA8wemGL._AC_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/61SR-lSKcTL._AC_SL1280_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/61nFAO2IV2L._AC_SL1500_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/711Jp3nlwXL._AC_SL1500_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/719gziVuerL._AC_SL1500_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/71FCZCchUdL._AC_SL1500_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/71TKHA2S2bL._AC_SL1500_.jpg'),
        (4, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product4/product4/71jk986vccL._AC_SL1374_.jpg');

--         (5, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product5/71iRI-QAooL._AC_SL1500_.jpg'),
--         (5, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product5/81-PRSL49NL._AC_SL1500_.jpg'),
--         (5, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product5/81s0cg4JKYL._AC_SL1500_.jpg'),
--         (5, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product5/81yN08EMEHL._AC_SL1500_.jpg'),
--         (5, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product5/91HU9Noax%2BL._AC_SL1500_.jpg'),
--         (5, 'https://amazon-webstore-clone-bucket.s3.amazonaws.com/product5/91u88C6A9nL._AC_SL1500_.jpg')
        
insert into reviews
    (userId, productId, title, content, rating)
        values
        (1, 1, 'Awesome', 'This is an awesome product', 5),
        (4, 1, 'Cute', 'I bought this as a gag gift and it went over well. Silly and cute as described. The thumb portion was a bit small.', 4),
        (5, 1, 'Adorable and Hilarious', 'Honestly only bought this because I got an Amazon gift card from someone and thought it would be hilarious to bring out around friends. Work from home clearly got to me lol. It''s funny for sure, but unfortunately my hand can''t quite contort right to hold it how it''s supposed to go. Also, the finger holes are a little big, so it slides off sometimes, but it is what it is. I got some laughs out of it and that was enough for me.', 4),
        (6, 1, 'Arrived Damaged', 'I have purchased this product as a gift twice now and both times they have arrived damaged.', 1),
        (4, 2, 'Happy five year old‼️‼️', 'I must admit that I was pleasantly surprised with this because I had a totally different image of it in my head and my five year old is just ecstatic with it so I will be ordering more of them now that I see they''re worth the price ☺️', 5),
        (5, 2, 'Glitter is rough and limited responses', 'Cute but the main issue I have is with the glitter. It''s gritty and rough. You really cant comfortably put this on your finger. I didnt realize the glitter was exposed like this and I assumed it was under a smooth clear coat. And yes, the glitter sheds. Also, these are advertised to have like 40 responses and it actually only does a couple things. Blowing into the mouth sensor doesnt make it blow us a kiss back like our other fingerling does.', 3),
        (6, 2, 'My daughter loves!', 'My daughter loves this! It came within 2 days and already had batteries', 5),
        (7, 3, 'Much Nicer Than Expected', 'I was afraid that they might be made of thin rubber, but no. The heads are thick enough to hold their shapes even when they are not on a finger. Painting is just as nice as the catalog picture. Right size for smallish fingers - and ten is the perfect number for a kid to put on a dinosaur war.', 5),
        (8, 3, 'Great', 'Great quality. My son is going to love these', 5),
        (9, 3, 'Worth it!', 'Super cute, 2 year old loves it! Good material!', 4),
        (1, 4, 'it taste good', 'It do taste good I just got done taking them honestly I gained weight while taking them but I don’t think in the butt area . I mean it’s good and all but I don’t think I see results', 4),
        (2, 4, 'Yes and no', 'The flavor and texture is not the best', 4),
        (3, 4, 'it was okay.', 'i dont know whats all the hype about these gummies but i don''t see results even when i work out every week.', 3),
        (4, 4, 'Ok', 'ok', 5);
--         -- (5, 5, 'Great value', 'This was exactly what I needed for my tree costume for Halloween. These do smell very bad when first opened. However, I opened them all up and laid them out over night which got rid of the smell. Also they hold up great to hot glue!', 5),
--         -- (6, 5, 'EXACTLY AS DESCRIBED!!', 'They did stink a little but I mean all fake leaves do for some reason lol. Anyway they were perfectly separated into colors and in bags. I liked that so then i could use an even amount of all the colors! They are super cute too for decorating! Definitely a good value for your money!', 5),
--         -- (7, 5, 'Great for crafters!', 'I did not notice much of a scent. This product was great for crafting or just sprinkling across a table for a look of fallen leaves! I have plenty left over for future projects! Great value for the money!', 5),
--         -- (8, 5, 'Cute for price', 'These were great for decorating my mantle piece for the fall. Very cute, nice detail. The only thing is that they had a weird fishy smell when I first opened the package but it didn’t linger. Would be great for crafting or decor.', 4);

insert into questions
    (userId, question, productId)
        values
        (5, 'Can the puppet be worn while performing intricate hand motions in a Cthulhu summoning ritual?', 1),
        (5, 'Do you have one with no glitter?', 2),
        (6, 'Are the baby really smaller than the bigger fingerlings?', 2),
        (7, 'What size batteries do these Fingerlings use?', 2),
        (8, 'Do they have ant bad rubber smell ?', 3),
        (9, 'How mant dinosaurs are included in this package?', 3),
        (10, 'It shows 10 different dinos. The answers from people says only five. So which is it, 10 dinos or 5 dinos?', 3);

insert into questions
    (productId, userId, question)
        values
        (4, 1, 'Do they make me gain the weight?'),
        (4, 2, 'If you stop taking them will your body go back to its original form??'),
        (4, 3, 'Can your butt be bigger with it ?'),
        (4, 4, 'Por favor cuál es la diferencia entre la azul y la de color rosa?');

-- insert into questions
--     (productId, userId, question)
--         values
--         (5, 5, 'Is there a metal wire in the leaves?'),
--         (5, 6, 'I am looking for something to stamp clay. Will these leave an imprint?'),
--         (5, 7, 'It says I received my leaves when all that was in my package was my mini bulletin board.'),
--         (5, 8, 'Can these be painted on and have hot glue or glitter for a project? I''m looking to pain them white with adding hot glue and glitter for a project.');

insert into answers
    (userId, questionID, answer)
        values
        (2, 1, 'My squirrel throws intricate gangs signs at foos not repping his set. So i dont see why it cant summon lord Cthulhu. I plan on working a deal with Beelzebub later on my lunch break. Ill lyk how it goes'),
        (1, 8, 'Not a panda'),
        (2, 9, 'This is not a baby one, but yes the babies are smaller'),
        (3, 10, 'Fingerlings require 4 LR44/AG13 button cell batteries but they come with batteries and ready to play with.'),
        (1, 11, 'Nop no smell at all');
        

-- insert into answers
--     (userId, questionId, answer)
--         values
--         (2, 12, 'Yes, there are five sets in it, which can satisfy five dinosaur states'),
--         (3, 13, 'I received all 10 - all different. The little dinosaur enthusiast I gave them to LOVED them. She would put all the carnivores on one hand and the herbivores on the other hand and have Dinosaur Family Feuds.'),
--         (5, 14, 'It''s been a year since I''ve been taking them I never gained weight. I''ve lost weight and fee other people mentioned something about losing weight. Also the gummies makes me very sleepy'),
--         (6, 15, 'It doesn’t work at all'),
--         (7, 16, 'No'),
--         (8, 17, 'Ellas son las mismas'),
--         (1, 18, 'No it’s all plastic'),
--         (2, 19, 'The decoration is OK, but if you want to find products with better quality and more family style, you can go to 》𝒃𝒍𝒐𝒐𝒎𝟳𝟳𝟳/ᴄᴏᴍ《 Look, I bought it. The quality is much better.'),
--         (3, 20, 'You needed to report missing product right away.'),
--         (4, 21, 'I did add glitter to some of them for a project and it worked using a glue gun. I did not paint any but the material is polyester so paint probably could work. They wash easily as some of mine got dirty on outside project and I just washed them in warm water and mild dis detergent. Hope this helps. Good luck with your project.');


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
        (null, 10, '552 Harvest Row', 'Lackland AFB', 'IL', '98715' ),
        (2, null, '1 Amazoom Dr', 'Seattle', 'WA', '98109' ),
        (3, null, '1 Amazoom Dr', 'Seattle', 'WA', '98109' );



-- update product set description=
--     '{
--         "Polyester",
--         "Different shades of color – 300 pieces of maple leaves are assorted in 6 colors mixed together, each color has 50 leaves",
--         "Leaves Size – Range from 2.48-3.39inch/ 6.3-8.6cm wide, and you can pick a handful of unified or mixed colors to create more fun",
--         "Suitable for different occasions – These artificial maple leaves can be served as decorations for your wedding, festival, house, bars, party, banquet, stores or other occasions. And you sticking on the wall, write wishes on it as a card, serve as scatters for your wedding and so on",
--         "Durable material – Made with durable and eco-friendly polyester material, It''s not easy to fade or fall, and can be applied repeatedly",
--         "Vivid artificial autumn leaves – Color realistic, these fall leaves are conducive to providing visual enjoyment and creating a warm atmosphere"
--     }'
--     where id = 5;





