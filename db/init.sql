create table users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INTEGER REFERENCES users
);

INSERT INTO users (username, password, profile_pic)
VALUES ('Bilbo', 'notAPass', 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg');
INSERT INTO users (username, password, profile_pic)
VALUES ('Johnny', 'OldManJohnny', 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg');
INSERT INTO users (username, password, profile_pic)
VALUES ('Henlo henlllo', 'ThisMyPassWerd', 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg');

INSERT INTO posts(title, img, content)
VALUES ('Welcome to Miami', 'https://static.umotive.com/img/product_image_thumbnail_placeholder.png', 'Fake dummmmmy datat int ajdlsakfldf');
INSERT INTO posts(title, img, content)
VALUES ('Are you Feeling Stressed?', 'https://static.umotive.com/img/product_image_thumbnail_placeholder.png', 'heehalfj afhgfkhjfafjf  fahfkjlf');
INSERT INTO posts(title, img, content)
VALUES ('Everything good, very happy, very happy', 'https://static.umotive.com/img/product_image_thumbnail_placeholder.png', 'sdhfljewjrla fehrkajwfljdalfhkjaehwkrh');