const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

// Use routes
app.use(authRoutes);



// Connect to MongoDB
mongoose.connect('mongodb+srv://nyirurugoomar:nyirurugoomar@cluster0.k9q14fo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB Connected Successful'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
