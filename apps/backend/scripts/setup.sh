# !/bin/sh

echo "setup database"

# 
# user
# 
curl -X POST http://localhost:3100/user \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john.doe@example.com"}'

curl -X POST http://localhost:3100/user \
-H "Content-Type: application/json" \
-d '{"name": "Pip Bird", "email": "pip.bird@example.com"}'

curl -X POST http://localhost:3100/user \
-H "Content-Type: application/json" \
-d '{"name": "Drew Owen", "email": "drew.owen@example.com"}'