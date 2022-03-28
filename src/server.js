"use strict";

const express = require("express"),
	app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    controller = require("./controller.js");

const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const imageUpload = multer({
    storage: multer.diskStorage(
        {
            destination: function (req, file, cb) {
                cb(null, 'src/images/');
            },
            filename: function (req, file, cb) {
                let file_split = file.originalname.split('.')
                let extension = file_split[file_split.length - 1]
                cb(
                    null,
                    uuidv4() + 
                    '.' +
                    extension
                );
            }
        }
    ), 
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/image', imageUpload.single('image'), (req, res) => { 
    console.log(req.file);
    res.json({ 
        filename: req.file.filename
    }); 
});

app.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname, 'src/images/' + filename);
    console.log(fullfilepath)
    return res.sendFile(fullfilepath);
});


app.get('/image/:directory/:filename', (req, res) => {
    const { directory, filename } = req.params;
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname, 'src/images/' + directory + '/' + filename);
    console.log(fullfilepath)
    return res.sendFile(fullfilepath);
});


app.route("/api/:entity")
    .get(controller.query)
    .post(controller.save);
app.route("/api/:entity/:id")
    .get(controller.show)
    .put(controller.update)
    .delete(controller.remove);

app.route("/api/:entity/:entityId/:related")
    .get(controller.queryRelationship)
    .post(controller.saveRelationship);
app.route("/api/:entity/:entityId/:related/:relatedId")
    .get(controller.showRelationship)
    .put(controller.updateRelationship)
    .delete(controller.removeRelationship);



app.listen(3000, function() {
    console.log("Server started");
});