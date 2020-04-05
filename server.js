// Read .env values
const dotenv = require('dotenv');
dotenv.config();

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Import Swagger Options
const swagger = require('./src/config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Declare routes
const routes = require('./src/routes');

// Initialize Routes with Fastify
routes.forEach((route, index) => {
    fastify.route(route)
})

// Require external modules
const mongoose = require('mongoose')

// Set MongoDB URI
const uri = process.env.MONGODB_URI || 'mongodb://localhost/testdb';

// Mongoose Connection Options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

const connectdb = async () => {

    // Set MongoDB URI
    const uri = process.env.MONGODB_URI || 'mongodb://localhost/testdb';

    // Mongoose Connection Options
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false, // Don't build indexes
        poolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    };

    // Connect to DB
    await mongoose.connect(uri, options)
        .then(() => {
            fastify.log.info('MongoDB connected…');
        })
        .catch(err => {
            fastify.log.error(err);
            process.exit(1);
        })
}

// Run the server!
const start = async () => {
    try {

        //Connect to database
        await connectdb();

        //Start fastify server
        await fastify.listen(process.env.PORT || 3000);

        //Initialize Swagger documentation
        fastify.swagger();

        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

//Start the Server
start();