const express = require('express');
require('dotenv').config();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// validar la info y asegurar que el JWT fue provisto por Auth0
/*
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache:true,
        rateLimit:true,
        jwksRequestsPerMinute:5,
        jwksUri: `https//${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    issuer: `https//${process.env.REACT_APP_AUTH0_DOMAIN}`,
    algorithms:["RS256"]
})*/

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

app.listen(3001);
console.log("API en " + process.env.REACT_APP_AUTH0_AUDIENCE);
