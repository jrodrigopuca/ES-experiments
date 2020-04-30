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


/**
 * Si tiene el rol correspondiente le deja acceder al endpoint
 * si no tiene el rol correspondiente le envia un 401.
 * @param role: rol que necesita el endpoint del API 
 */
const checkRole = (role) =>{
    return (req, res, next) =>{
        const assignedRoles = req.user["http://localhost:3000/roles"];
        if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) return next(); 
        else return res.status(401).send("No eres admin"); 
    } 
}


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

//endpoint privado con role
app.get('/admin', checkJwt, checkRole('admin'), (req, res) => {
    res.json({ message: "hello admin" })
})



app.listen(3001);
console.log("API en " + process.env.REACT_APP_AUTH0_AUDIENCE);
