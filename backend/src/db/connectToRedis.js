import redis from 'redis';
import { configDotenv } from 'dotenv';
configDotenv();
// Create the Redis client using environment variable
const client = redis.createClient({
  url: process.env.REDIS_URI// The URI should be in the format: redis://<username>:<password>@<host>:<port>
});

// Event listeners for debugging
client.on('connect', () => {
  console.log('Connected to Redis successfully!');
});

client.on('error', (err) => {
  console.error('Redis connection error:', err);
});

// Function to establish a connection (if needed)
const connectionToRedis = async () => {
  try {
    await client.connect();
    console.log('Redis connection established!');
  } catch (err) {
    console.error('Error connecting to Redis:', err);
  }
};

export { client, connectionToRedis };
