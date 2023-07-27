const mongoose = require('mongoose');

const ProjectModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
},{timestamps: true});

const Project = mongoose.model('Project', ProjectModel);
module.exports = Project;