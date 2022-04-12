const router = require('express').Router();
const task = require('../handlers/taskactivity');
const validateTaskParameters = require('../handlers/validateTaskParameters');

router.get('/', async function (req, res) {
    let schedule = req.query.schedule;
    let website = req.query.website;
    let resultValidator = await validateTaskParameters.validator(schedule,website);
    if(resultValidator.isExpressionValid){
         task.executeTask(schedule,website)
    }
    res.json(resultValidator.message);
});
module.exports = router;