const Project = require('../model/ProjectModel');
const router = require('express').Router();

router.post('/', async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.status(200).json(project);
})

router.get('/', async (req,res) => {
    const project = await Project.find();
    res.status(200).json(project);
})

module.exports = router;