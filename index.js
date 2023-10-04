var express = require('express')
const { QuickDB } = require("quick.db");
const db = new QuickDB();
var app = express()
let port = 24365


app.get('/robloxdb/send-data', function (req, res) {
    let placeID = req.query.id.replace("?id=","").replace("&id=","")
    let dataName = req.query.dataName.replace("?dataName=","").replace("&dataName=","")
    let data = req.query.data.replace("?data=","").replace("&data=","")
    try {
        db.set(`${placeID}.${dataName}`, data);
        res.send(`OK! Set ${dataName} for ${placeID} to ${data} !`)
    } catch {
        res.send("fail.")
    }
})


app.get('/robloxdb/push-data', function (req, res) {
    let placeID = req.query.id.replace("?id=","").replace("&id=","")
    let dataName = req.query.dataName.replace("?dataName=","").replace("&dataName=","")
    let data = req.query.data.replace("?data=","").replace("&data=","")
    try {
        db.push(`${placeID}.${dataName}`, data);
        res.send(`OK! Pushed 
        ${data} 
        to array for ${placeID} into ${dataName} !`)
    } catch {
        res.send("fail.")
    }
})

app.get('/robloxdb/get-data', function (req, res) {
    let placeID = req.query.id.replace("?id=","").replace("&id=","")
    let dataName = req.query.dataName.replace("?dataName=","").replace("&dataName=","")
    try {
        let data = db.get(`${placeID}.${dataName}`);
        res.send(`${data}`)
    } catch {
        res.send("fail.")
    }
})

app.listen(port, () => {
    console.log(`ROBLOX database listening on port ${port}`)
})
  
