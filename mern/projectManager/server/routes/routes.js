const ProjectController = require("../controllers/project.controllers");
const UserController = require("../controllers/user.controllers");

module.exports = app => {
    app.post("/api/project/new", ProjectController.createNewProject);
    app.get("/api/project", ProjectController.allProjects);
    app.get("/api/project/:id", ProjectController.projectById);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/:id', ProjectController.deleteProject);

    app.post("/api/user/new", UserController.createNewUser);
    app.get("/api/user", UserController.allUser);
    app.get("/api/user/:id", UserController.userById);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);
};

