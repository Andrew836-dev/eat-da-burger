const connection = require("./connection");

const orm = {
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        connection.query(query, table, function(err, data) {
            if (err) throw err;
            else cb(data);
        });
    },
    insertOne: function(table, object, cb) {
        let query = "INSERT INTO ?? SET ?";
        connection.query(query, [table, object], function(err, data) {
            if (err) throw err;
            else cb(data);
        });
    },
    updateOne: function(table, object, id, cb) {
        let query = "UPDATE ?? SET ? WHERE ?";
        connection.query(query, [table, object, id], function(err, data) {
            if (err) throw err;
            else cb(data);
        });
    }
}

module.exports = orm;