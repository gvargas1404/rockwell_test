const router = require('express').Router();
const task = require('../controller/taskactivity');

router.get('/', function(req, res) {
    console.log(req.query);
    var result = task.executeTask(req.query);

    res.json("wenis");
});
module.exports = router;