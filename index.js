var AWS = require('aws-sdk'),
    localOptions = {
        region: "localhost",
        endpoint: "http://localhost:8000"
    };

var isOffline = function () {
    // Depends on serverless-offline plugion which adds IS_OFFLINE to process.env when running offline
    return process.env.IS_OFFLINE;
};

var dynamodb = function (customOptions) {
    var options = isOffline() ? localOptions : Object.assign({}, localOptions, customOptions);
    var doc = new AWS.DynamoDB.DocumentClient(options);
    var raw = new AWS.DynamoDB(options);
};
module.exports = dynamodb;
