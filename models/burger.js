const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(response){
            cb(response);
        });
    },
    insert: function(burger, cb) {
        orm.insertOne("burgers", burger, function(response) {
            cb(response);
        });
    },
    update: function(burger, id, cb) {
        orm.updateOne("burgers", burger, id, function(response) {
            cb(response);
        });
    },
    delete: function(id, cb) {
        orm.delete("burgers", id, function(response) {
            cb(response);
        });
    }
}

module.exports = burger;