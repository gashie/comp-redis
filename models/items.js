const redis = require('redis');
require('dotenv').config();

// Connect to Redis
const client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});
client.connect();

const itemModel = {
    async create(key, value) {
        await client.set(key, JSON.stringify(value));
    },

    async read(key) {
        const item = await client.get(key);
        return JSON.parse(item);
    },

    async update(key, value) {
        await client.set(key, JSON.stringify(value));
    },

    async delete(key) {
        await client.del(key);
    }
};

module.exports = itemModel;
