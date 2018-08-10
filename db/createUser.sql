-- INSERT INTO users (id, username, password , profile_pic)
-- VALUES ( ${sub}, ${username}, ${password}, ${profile_pic})
-- RETURNING *;

insert into users ( username, password)
values ( $1, $2);

Select * from users;