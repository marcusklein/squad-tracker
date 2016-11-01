'use strict';

var Squad = require('../database/squad');

// Get all squads
function get () {
    return new Promise((resolve, reject) => {
        Squad.find((err, squads) => {
            if (err) {
                reject(err);
            }

            resolve(squads);
        });
    });
}

// Get squad by id
function getSquadById(squadId) {
    return new Promise((resolve, reject) => {
        if(squadId == null) {
            reject("You must enter a squad id");
        }

        Squad.find({ _id: squadId }, (err, squads) => {
            if (err) {
                reject(err);
            }

            resolve(squads);
        });
    });
}

// Create new squad
function createSquad (squadName) {
    return new Promise((resolve, reject) => {
        if(squadName == null) {
            reject("You must enter a squad name");
        }

        let newSquad = Squad({ name: squadName });

        newSquad.save(function(err) {
            if (err) reject(err);
            resolve(newSquad);
            console.log(newSquad.name + ' saved!');
        });
    });
}



module.exports = {
    get: get,
    getSquadById: getSquadById,
    create: createSquad,
};