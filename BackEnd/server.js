require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 10000; // Render defaults to 10000
const HOST = '0.0.0.0'; // Required for Render

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
