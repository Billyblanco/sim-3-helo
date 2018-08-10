SELECT posts.*, users.username 
FROM posts
JOIN users ON posts.author_id = users.id



-- select users.username, posts.*
-- from users
-- join posts on posts.author_id = users.id