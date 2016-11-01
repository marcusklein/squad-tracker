var express = require('express');
var squadRouter = express.Router();
var squadService = require('../../services/squadService');

// Get all squads
squadRouter.get('/', (req, res) => {
    squadService.get()
        .then((squads) => {
            res.status(200).json(squads)
        });
});

// Get all squads
squadRouter.get('/:id', (req, res) => {
    var id = req.params.id;
    squadService.getSquadById(id)
        .then((squads) => {
            res.status(200).json(squads)
        });
});

// Get squad by name
squadRouter.get('/name/:name', (req, res) => {
    var squadName = req.params.name;

    if(squadName) {
        squadService.getByName(name)
            .then((squads) => {
                res.status(200).json(squads)
            });
    } else {
        res.status(500).json( { error: "Provide a name for the new squad" } );
    }
});

// Create squad
squadRouter.post('/', (req, res) => {
    var squadName = req.body.name;
    if(squadName) {
        squadService.create(squadName)
            .then((squad) => {
                res.status(200).json(squad);
            });
    } else {
        res.status(500).json( { error: "Provide a name for the new squad" } );
    }
});

module.exports = squadRouter;