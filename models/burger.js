const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burger", function(response){
            cb(response);
        });
    }
}

module.exports = burger;