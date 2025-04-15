# !/bin/sh

echo "setup database"

# 
# user
# 
curl -X POST http://localhost:3100/users \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john.doe@example.com"}'

curl -X POST http://localhost:3100/users \
-H "Content-Type: application/json" \
-d '{"name": "Pip Bird", "email": "pip.bird@example.com"}'

curl -X POST http://localhost:3100/users \
-H "Content-Type: application/json" \
-d '{"name": "Drew Owen", "email": "drew.owen@example.com"}'


# 
# item
# 
curl -X POST http://localhost:3100/items \
-H "Content-Type: application/json" \
-d '{"name": "アイテム1", "price": 500, "description": "アイテム1の説明" }'

curl -X POST http://localhost:3100/items \
-H "Content-Type: application/json" \
-d '{"name": "アイテム2", "price": 600, "description": "アイテム2の説明" }'

curl -X POST http://localhost:3100/items \
-H "Content-Type: application/json" \
-d '{"name": "アイテム3", "price": 700", "description": "アイテム3の説明" }'

# 
# itemimg
# 
curl -X POST http://localhost:3100/itemimgs \
-H "Content-Type: application/json" \
-d '{ "item_id": 1, "url": "/imgs/img01.png" }'

curl -X POST http://localhost:3100/itemimgs \
-H "Content-Type: application/json" \
-d '{ "item_id": 2, "url": "/imgs/img01.png" }'

curl -X POST http://localhost:3100/itemimgs \
-H "Content-Type: application/json" \
-d '{ "item_id": 3, "url": "/imgs/img01.png" }'