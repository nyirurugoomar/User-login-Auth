const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

// Use routes
app.use(authRoutes);



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB Connected Successful'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
