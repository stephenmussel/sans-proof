
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "business" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
    "rating" VARCHAR (5),
    "description" VARCHAR (255),
    "address" VARCHAR (255),
    "city" VARCHAR (20),
    "state" VARCHAR (2),
    "zip" INT,
    "phone" VARCHAR (12),
    "website" VARCHAR (55),
    "favorite" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (255),
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "favorite"(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "business_id" INT REFERENCES "business" 
);

INSERT INTO "business" 
	("name", "rating", "description", "address", "city", "state", "zip", "phone", "website", "favorite", "notes", "image_url", "user_id")
VALUES 
	('Colita', 
	'5', 
	'Modernized Mexican eatery specializing in housemade moles, BBQ from around the world & cocktails.',
	'5400 Penn Ave S',
	'Minneapolis',
	'MN',
	'55419',
	'612.886.1606',
	'colitampls.com',
	'true',
	'Great mocktails!',
	'images/sans_url_best.png',
	'1');

INSERT INTO "business" 
	("name", "rating", "description", "address", "city", "state", "zip", "phone", "website", "favorite", "notes", "image_url", "user_id")
VALUES 
	('Martina', 
	'5', 
	'Modern Argentinian food & craft cocktails served in chic, airy surrounds.',
	'4312 Upton Ave S',
	'Minneapolis',
	'MN',
	'55410',
	'612.922.9913',
	'martinarestaurant.com',
	'false',
	'Fantastic variety zero proof drinks, all at great prices.',
	'images/sans_url_best.png',
	'2');
	
INSERT INTO "business" 
	("name", "rating", "description", "address", "city", "state", "zip", "phone", "website", "favorite", "notes", "image_url", "user_id")
VALUES 
	('Sanjusan', 
	'', 
	'Japanese-Italian in the North Loop.',
	'33 N 1st Ave',
	'Minneapolis',
	'MN',
	'55401',
	'612.354.7763',
	'sanjusanrestaurant.com',
	'false',
	'Loved the patio and enjoyed my drinks.',
	'images/sans_url_best.png',
	'2');
	
INSERT INTO "business" 
	("name", "rating", "description", "address", "city", "state", "zip", "phone", "website", "favorite", "notes", "image_url", "user_id")
VALUES 
	('Cardamom', 
	'3', 
	'A casual Aegean & Mediterranean restaurant located in the @walkerartcenter.',
	'723 Vineland Pl',
	'Minneapolis',
	'MN',
	'55403',
	'612.375.7542',
	'cardamommpls.com',
	'false',
	'The service was exceptional, the drinks were meh.',
	'images/sans_url_better.png',
	'1');

INSERT INTO "business" 
	("name", "rating", "description", "address", "city", "state", "zip", "phone", "website", "favorite", "notes", "image_url", "user_id")
VALUES 
	('Rosalia', 
	'2', 
	'Fast casual Mediterranean Pizzeria.',
	'2811 W 43rd St',
	'Minneapolis',
	'MN',
	'55410',
	'612.345.5494',
	'rosaliapizza.com',
	'false',
	'Drinks were ok.',
	'images/sans_url_good.png',
	'2');

SELECT * FROM "business";
