"use strict";
exports.__esModule = true;
exports.createSingleConnection = void 0;
var mysql = require("mysql");
var createSingleConnection = /** @class */ (function () {
    function createSingleConnection() {
    }
    createSingleConnection.prototype.createSingleConnection = function () {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'tito',
            password: 'passWord123@',
            database: 'node_schoolx'
        });
        connection.connect(function (err) {
            if (err) {
                return console.error('error: ' + err.message);
            }
            console.log('Connected to the MySQL server.');
        });
    };
    createSingleConnection.getConection = function () {
        if (createSingleConnection != null) {
            return new createSingleConnection();
        }
        else {
            console.log('Connected to the MySQL server. was not null , opend');
        }
    };
    return createSingleConnection;
}());
exports.createSingleConnection = createSingleConnection;
