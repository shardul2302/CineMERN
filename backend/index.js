
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db.js');
 

// Load environment variables
dotenv.config();    
const app = express();
const PORT = process.env.PORT || 5000;
// Connect to the database
connectDB();    

app.use(express.json());
// Define a simple route
app.get('/', (req, res) => {
    res.send('API is running...');  
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});