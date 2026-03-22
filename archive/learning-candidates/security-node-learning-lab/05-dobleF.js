const express = require('express');
const app = express();
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( { extended: true } ));

var router = express.Router();


var user = {
    two_factor_temp_secret: null,
    two_factor_secret: null,
    two_factor_enabled: false
};

/**
 * ver http://localhost:3000/app/2fa
*/
router.get('/2fa', function(req, res){
    var secret = speakeasy.generateSecret(); // genera el secreto para el usuario
    user.two_factor_temp_secret = secret.base32; // hace el encoding en base 32
    //mostrar el qr en pantall
    qrcode.toDataURL(secret.otpauth_url, function(err, data_url){
        res.send('<img src="' + data_url + '">');
    });
});


/**
 * ver http://localhost:3000/app/authenticate
 * muestra el formulario, al completarlo llama al app/verify
*/
router.get('/authenticate', function(req, res){
    res.send('<form action="/app/verify" method="post">Enter Token: <input type="text" name="token"><br><input type="submit" value="submit">');

});

router.post('/verify', function(req, res){
    var userToken = req.body.token; //toma el token ingresado
    var base32secret = user.two_factor_temp_secret; //toma el dato que teniamos almacenado

    //verifico los datos con speakeasy
    var verified = speakeasy.totp.verify({
        secret: base32secret,
        encoding: 'base32',
        token: userToken
    });

    if(verified){
        user.two_factor_secret = user.two_factor_temp_secret;
        user.two_factor_enabled = true;

        console.log('Successfully verified');

        res.send('<p>Your token has been verified!</p>');
    } else {
        console.log('verification failed');

        res.send('<p>verification failed</p>');
    }
});

app.use('/app', router);

app.listen(3000);
console.log('App is running on port 3000');