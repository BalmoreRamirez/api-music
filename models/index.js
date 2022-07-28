//const engine = process.env.DB_ENGINE || null;

//const pathModel = engine === "mysql" ? "./sql" : "./nosql"

const models = {
    userModel: require("./nosql/users"),
    storageModel: require("./nosql/storage"),
    tracksModel: require("./nosql/tracks"),
};


module.exports = models;
