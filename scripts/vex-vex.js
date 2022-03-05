let game = {
    database: {
        flags: ["arg", "aut", "bel", "bol", "bra", "can", "cpv", "chl", "hrv", "cze", "dnk", "etr", "ecu", "egy", "est", "eth", "fra", "deu", "gha", "grl", "hnd", "isl", "irl", "imn", "ita", "civ", "jpn", "ken", "kir", "mdg", "mwi", "mlt", "nru", "nzl", "nga", "nir", "nor", "pan", "wsm", "sco", "sen", "syc", "zaf", "esp", "swe", "ukr", "ury", "usa", "vnm", "wal"],
        countries:["Argentina","Austria","Belgium","Bolivia","Brazil","Canada","Cape Verde","Chile","Croatia","Czech Republic","Denmark","East Timor","Ecuador","Egypt","Estonia","Ethiopia","France","Germany","Ghana","Greenland","Honduras","Iceland","Ireland","Isle of Man","Italy","Ivory Coast","Japan","Kenya","Kiribati","Madagascar","Malawi","Malta","Nauru","New Zealand","Nigeria","Northern Ireland","Norway","Panama","Samoa","Scotland","Senegal","Seychelles","South Africa","Spain","Sweden","Ukraine","Uruguay","USA","Vietnam","Wales"],
    },
    option1:[],
    option2:[],
    };

function optionGen () {
    game.option1 = (game.database.flags[Math.floor(Math.random() * game.database.flags.length)]);
    game.option2 = (game.database.flags[Math.floor(Math.random() * game.database.flags.length)]);
};

module.exports = {
    game,
    optionGen,
};