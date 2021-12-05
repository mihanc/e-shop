const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

const api = process.env.API_URL;
const mongoConnection = process.env.CONNECTION_STRING;

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Routers
const productsRouter = require('./routers/product')
const usersRouter = require('./routers/user')
const ordersRouter = require('./routers/orders')
const categoriesRouter = require('./routers/category')
app.use(`/${api}/products`, productsRouter)
app.use(`/${api}/users`, usersRouter)
app.use(`/${api}/orders`, ordersRouter)
app.use(`/${api}/categories`, categoriesRouter)

// Database
mongoose.connect(mongoConnection)
    .then(() => {
        console.log('database connection is ready...')
    })
    .catch(e => {
        console.log(e)
    })

// Server
app.listen(3000, () => {
    console.log('api:', api)
    console.log('server is running http://localhost:3000')
})
