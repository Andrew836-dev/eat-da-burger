const connection = require("./connection");

const orm = {
    selectAll: function (table, cb) {
        let query = "SELECT * FROM ??";
        try {
            connection.query(query, table, function (err, data) {
                if (err) throw err;
                else cb(data);
            });
        } catch (error) {
            cb(error)
        }
    },
    insertOne: function (table, object, cb) {
        let query = "INSERT INTO ?? SET ?";
        try {
            connection.query(query, [table, object], function (err, data) {
                if (err) throw err;
                else cb(data);
            });
        } catch (error) {
            cb(error)
        }
    },
    updateOne: function (table, object, id, cb) {
        let query = "UPDATE ?? SET ? WHERE ?";
        console.log(query, [table, object, { id: id }])
        try {
            connection.query(query, [table, object, { id: id }], function (err, data) {
                if (err) throw err;
                else cb(data);
            });
        } catch (error) {
            cb(error)
        }
    },
    delete: function (table, id, cb) {
        let query = "DELETE FROM ?? WHERE ?";
        try {
            connection.query(query, [table, { id: id }], function (err, data) {
                if (err) throw err;
                else cb(data);
            });
        } catch (error) {
            cb(error)
        }
    }
}

module.exports = orm;