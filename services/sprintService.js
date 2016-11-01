'use strict';

var Sprint = require('../database/sprint');

// Get all sprints
function get () {
    return new Promise((resolve, reject) => {
        Sprint.find((err, sprints) => {
            if (err) {
                reject(err);
            }

            resolve(sprints);
        });
    });
}

// Get sprint by id
function getSprintById (sprintId) {
    return new Promise((resolve, reject) => {
        if(sprintId == null) {
            reject("You must enter a sprint id");
        }

        Sprint.find({ _id: sprintId }, (err, sprint) => {
            if (err) {
                reject(err);
            }

            resolve(sprint);
        });
    });
}

// Get all sprints for a squad
function getSprintsBySquadId (squadId) {
    return new Promise((resolve, reject) => {
        if(squadId == null) {
            reject("You must enter a squad id");
        }

        Sprint.find({ squadId: squadId }, (err, sprints) => {
            if (err) {
                reject(err);
            }

            resolve(sprints);
        });
    });
}

// Create new sprint
function createSprint (sprintData) {
    return new Promise((resolve, reject) => {
        if(sprintData == null) {
            reject("You must enter sprint data");
        } else if (sprintData.squadId == null) {
            reject("You must enter a squad for this sprint");
        }

        let newSprint = Sprint(sprintData);

        newSprint.save(function(err) {
            if (err) reject(err);
            resolve(newSprint);
            console.log(newSprint.name + ' saved!');
        });
    });
}

module.exports = {
    get: get,
    getSprintById: getSprintById,
    getSprintsBySquadId: getSprintsBySquadId,
    createSprint: createSprint
};