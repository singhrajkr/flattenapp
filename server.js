const express = require("express");
const app = express();
morgan = require("morgan");
require("dotenv").config();
var convert = require('xml-js');
var flatten = require('flat')

const port = process.env.PORT || 4444;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send({ message: "API Server is up and running !!!" });
});

app.post("/getflattenkeys", (req, res) => {
    try {
        options = {
            compact: true, ignoreComment: true, spaces: 4, ignoreAttributes: true, ignoreText: false,
            addParent: false, ignoreDeclaration: false, declarationKey: "declaration", attributesKey: "attributes",
            typeKey: null, textKey: "_text", textFn: function (val) { return val = null; },
            attributeValueFn: function (val) { return val = null; }
        };
        // console.log('Data: ', req.body.xmlData)
        result = convert.xml2js(req.body.xmlData, options);    // to convert xml text to javascript object
        attributesJson = flatten(result)
        // Remove _text or text from attributes tags
        Object.keys(attributesJson)
            .filter(key => key.endsWith(`._text`))
            .forEach(key => {
                attributesJson[key.replace(`._text`, ``)] = attributesJson[key];
                delete attributesJson[key];
            })
        // Remove root tags
        // Object.keys(attributesJson)
        // .filter(key => key.startsWith(`soapenv:Envelope.soapenv:`))
        // .forEach(key => {
        //     attributesJson[key.replace(`soapenv:Envelope.soapenv:`, ``)] = attributesJson[key];
        //    delete attributesJson[key];
        // })
        const ATTR_KEYS = { attributes: [] }
        // Take out keys from JSON
        Object.keys(attributesJson).forEach(key => {
            ATTR_KEYS.attributes.push(key);
        })
        res.send(ATTR_KEYS)
    } catch (error) {
        res.send(error)
    }
});

//Start The Server
app.listen(port, function () {
    console.log(`App is Listening on http://localhost:${port}`);
});