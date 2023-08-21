const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const SetUpMiddleware = (app) => {
    app.use(cors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
        credentials: true
    }))
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(
        session({
            secret: 'SECRETTTT',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24,
                secure: true,
                httpOnly: true
            }
        })
    )
    return app;
}


module.exports = SetUpMiddleware;