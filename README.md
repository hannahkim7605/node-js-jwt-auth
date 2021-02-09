# JWT Authentication in Node.js
This is a JWT authentication built in Node.js. It hashes users' passwords and allows users to register and log in. Through token verification, it retrieves the user's information.

## Install pacakages

```
npm install express
npm install --save-dev nodemon
npm install mongoose
npm install dotenv
npm install joi
npm install bcrypt
npm install jsonwebtoken
```

## Deployment
```
git clone git@github.com:hannahkim7605/node-js-jwt-auth.git
cd node-js-jwt-auth
npm start
```

## User Registration
```
curl --header "Content-Type: application/json" \
-X POST \
--data '{"name":"Jake Choi", "email":"jakechoi@yahoo.com", "password":"jakespassword"}' \
localhost:3000/api/user/register
```

## User Login
```
curl --header "Content-Type: application/json" \
-X POST \
--data '{"email":"jakechoi@yahoo.com", "password":"jakespassword"}' \
localhost:3000/api/user/login
```

## Get user information using token
```
curl -H "Content-Type: application/json" \
-H "auth-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDIxOWIyMjAzMzE0MDc2MzhkZGYyYTYiLCJpYXQiOjE2MTI4MjQ3MjR9.QtlNHCY1md_PqZh3RW3kU62OBV0anqnw_b4Ip_p75Ls" \
-X GET \
localhost:3000/api/posts
```

Tokens get verified through the jsonwebtoken package.

Reference:
https://joi.dev/api/?v=17.4.0
https://www.npmjs.com/package/bcrypt
https://www.npmjs.com/package/jsonwebtoken