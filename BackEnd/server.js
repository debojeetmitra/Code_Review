require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000; // Render provides PORT dynamically

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
