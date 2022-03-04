const express = require('express')
const connect = require('./database/connection')
const cors = require('cors');

require('dotenv').config({ path: "./config.env"});
const PORT = process.env.PORT || 8080 ;

// create express instance
const app = express();
app.use(express.json());
app.use(cors());

// database connection
connect();

// routes
app.use('/api', require('./router/router'));

// Use routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/api/categories', require('./router/api/category'));
app.use('/api/items', require('./router/api/item'));
app.use('/api/suppliers', require('./router/api/supplier'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:4000`);
})
