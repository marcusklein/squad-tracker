var express = require('express');
var sprintRouter = express.Router({mergeParams: true});
var sprintService = require('../../services/sprintService');

// Get all sprints for squad
sprintRouter.get('/', (req, res) => {
    var id = req.params.squadId;

    if (id) {
        sprintService.getSprintsBySquadId(id)
            .then((sprint) => {
                res.status(200).json(sprint)
            });
    } else {
        res.status(500).json( { error: "squadId required" } );
    }
});

// Get sprint by id
sprintRouter.get('/:id', (req, res) => {
    var id = req.params.id;
    sprintService.getSprintById(id)
        .then((sprint) => {
            res.status(200).json(sprint)
        });
});

// Create sprint
sprintRouter.post('/', (req, res) => {
    var sprintData = _getSprintData(req.body, req.params.squadId);

    if(sprintData.squadId && sprintData.name) {
        sprintService.createSprint(sprintData)
            .then((sprint) => {
                res.status(200).json(sprint);
            });
    } else {
        res.status(500).json( { error: "Provide a name and squadId for the new sprint" } );
    }
});

function _getSprintData(params, squadId) {
    var sprintData = {};

    sprintData['squadId'] = squadId;

    var sprintParams = [
        'name',
        'dateStart',
        'dateEnd',
        'committedPoints',
        'completedPoints'
    ];

    sprintParams.forEach((sprintParam) => {
       if(params[sprintParam]) {
           sprintData[sprintParam] = params[sprintParam]
       }
    });

    return sprintData;
}

module.exports = sprintRouter;