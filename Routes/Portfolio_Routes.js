const router = require("express").Router();
const Project = require('../Database/Models/Projects');
const Para = require("../Database/Models/Docs");
const Chat = require("../Database/Models/Chats");
const Message = require("../Database/Models/Messages");

//Creating a Project
router.post("/createProject", async (req, res) => {
    const {name, site_url, github_url, image_url} = req.body;

    const data = new Project({
        name, site_url, github_url, image_url
    })

    const savedData = await data.save();
    res.json(savedData);
});

//Getting Project info according to the name provided
router.post("/getProjectInfo", async (req,res) => {
    const {name} = req.body;

    const data = await Project.findOne({name});

    res.json(data);
})

//Creating a Para
router.post("/createPara", async (req,res) => {
    const {name, title, para} = req.body;

    const data = new Para({
        name,title,para
    })

    const savedData = await data.save();
    res.json(savedData);
})

router.get("/getDocs/:name", async (req,res) => {
    const {name} = req.params;

    const data = await Para.find({name});

    res.json(data);
});

//Creating Chat
router.get("/createChat/:name", async (req,res) => {
    const {name} = req.params;
    const data = new Chat({
        name
    });
    const savedData = await data.save();
    res.json(savedData);
});

//Creating Message
router.post("/createMessage", async (req,res) => {
    const {chat_id, user, message} = req.body;

    const data = new Message({
        chat_id, user, message
    })

    const savedData = await data.save();
    res.json(savedData);
});

router.get("/getMessages/:chat_id", async (req,res) => {
    const {chat_id} = req.params;

    const data = await Message.find({chat_id});
    res.json(data);
});

module.exports = router;