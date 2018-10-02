const AWS = require('aws-sdk');

class SwitchDynamoDB {
    constructor () {
        this.offlineOptions = {
            region: "localhost",
            endpoint: "http://localhost:8000"
        };
        this.options = process.env.IS_OFFLINE ? this.offlineOptions : {};
    }

    DocumentClient(params) {
        new AWS.DynamoDB.DocumentClient(this.options, ...params)
    }

    RawClient(params) {
        new AWS.DynamoDB(this.options, ...params)
    }
}

module.exports = SwitchDynamoDB;
