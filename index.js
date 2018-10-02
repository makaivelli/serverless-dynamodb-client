const AWS = require('aws-sdk');

class RawClientWrapper extends AWS.DynamoDB {
    constructor(params) {
        offlineOptions = {
            region: "localhost",
            endpoint: "http://localhost:8000"
        };
        options = process.env.IS_OFFLINE ? offlineOptions : {};
        super(options, ...params);
    }
}

class DocumentClientWrapper extends AWS.DynamoDB.DocumentClient {
    constructor(params) {
        offlineOptions = {
            region: "localhost",
            endpoint: "http://localhost:8000"
        };
        options = process.env.IS_OFFLINE ? offlineOptions : {};
        super(options, ...params);
    }
}

module.exports = [RawClientWrapper, DocumentClientWrapper];
