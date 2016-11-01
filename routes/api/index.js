var express = require('express');
var apiRouter = express.Router({mergeParams: true});
var squadRouter = require('./squads');
var sprintRouter = require('./sprints');

apiRouter.use('/squad', squadRouter);
apiRouter.use('/squad/:squadId/sprint', sprintRouter);

module.exports = apiRouter;