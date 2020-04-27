const express = require('express');
require('dotenv').config();
const jwt = require("express-jwt"); // Valida el JWT 
const jwksRsa = require("jwks-rsa"); // Recibe el RSA desde un JWKS endpoint
const checkScope = require("express-jwt-authz"); //Valida JWT scope

// validar la info y asegurar que el JWT fue provisto por Auth0
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.REACT_APP_JWKS
    }),
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    issuer: process.env.REACT_APP_AUTH0_DOMAIN_HTTPS,
    algorithms: ['RS256']
});

const app = express();

//endpoint público (cualquiera puede llamarlo)
app.get('/public', (req, res) => {
    res.json({ message: "hello" })
})

//endpoint privado (requiere login)
app.get('/private', checkJwt, (req, res) => {
    res.json({ message: "autentico user" })
})

//endpoint con permisos (requiere login)
app.get('/courses', checkJwt, checkScope(["read:courses"]), (req, res) => {
    res.json({ courses: [
        {id:1, title: "Building App"},
        {id:2, title: "Creating Components"}
    ] })
})

app.listen(3001);
console.log("API en " + process.env.REACT_APP_AUTH0_AUDIENCE);
