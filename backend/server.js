// Example backend server.js for sending email
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());  // For parsing JSON request bodies
app.use(cors());          // For handling cross-origin requests

// Add this route to fix the "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Server is up and running!');  // This will show when you visit http://localhost:3000
});

// The route to send emails
app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',  // Gmail service (or use other services if applicable)
        auth: {
            user: 'your-email@gmail.com',  // Your Gmail address
            pass: 'your-email-password',  // App-specific password or OAuth token
        },
    });
    

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com',
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);  // Log the full error for better insight
            res.status(500).json({ message: 'Error sending message.' });
        } else {
            console.log('Email sent: ' + info.response);  // Success log
            res.status(200).json({ message: 'Message sent successfully!' });
        }
    });
    
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
