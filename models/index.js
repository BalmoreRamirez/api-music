const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : './mysql'

const models = {
    userModel: require(`${pathModels}/users`),
    storageModel: require(`${pathModels}/storage`),
    tracksModel: require(`${pathModels}/tracks`),
};


module.exports = models;
