INSERT INTO users (id, username, password , profile_pic)
VALUES ( ${sub}, ${username}, ${password}, ${profile_pic})
RETURNING *;