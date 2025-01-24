const http = require('http');
const app = require('./src/app');
const { initializeSocket } = require('./src/socket');
const port = process.env.PORT || 5000;




const server = http.createServer(app);  


initializeSocket(server);


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

