
db = db.getSiblingDB('Projeto');

db.Users.insertOne({
    "username": "admin",
    "password": "admin",
});