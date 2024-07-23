import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server is running</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        }
        .container {
        max-width: 400px; 
        margin: 20px;
        background-color: #ffffff; 
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
        text-align: center;
        }
        h1 {
        color: #333;
        margin-bottom: 20px; 
        }
        p {
        color: #666; 
        margin-bottom: 0; 
        }
        @keyframes blink {
        0% { opacity: 0; }
        50% { opacity: 1; } 
        100% { opacity: 0; }
        }
        .blinking-text {
        animation: blink 2s infinite; 
        font-size: 24px; 
        font-weight: bold; 
        color: #007bff;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1>Server is running</h1>
        <p>UserFlow API is up and running!</p>
        <p class="blinking-text">...</p>
    </div>
    </body>
    </html>
  `;
    res.send(htmlResponse);
});

export default router;