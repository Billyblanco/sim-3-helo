INSERT INTO posts (title, image, content, author_id)
VALUES ( ${title}, ${image}, ${content}, ${author_id})

RETURNING *;