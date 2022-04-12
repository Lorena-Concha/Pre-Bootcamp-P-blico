const Project = require("../models/project.models");

module.exports.allProjects = (req, res) => {
    console.log("estoy buscando todo");
    Project.find()
        .then(allProjects => res.json({allProjects }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.projectById = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(projectById => res.json({projectById }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.createNewProject = (req, res) => {
    console.log(req.body)
    Project.create(req.body)
        .then((newProject)=>res.json({newProject}))
        .catch((err)=> res.json({message: "Algo salio mal", error: err}))
};

module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((project)=>res.json({project: project}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.deleteProject = (req, res) => {
    console.log(req.params.id)
    Project.deleteOne({_id: req.params.id})
        .then((result)=>res.json({resultado: result}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};
