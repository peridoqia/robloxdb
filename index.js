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
    } catch(error) {
        res.status(500);
        res.send("fail.")
        console.log(`dataName: ${dataName}`)
        console.log(`data: ${data}`)
        console.log(`Request to send data to place ${placeID} failed due to error: ${error}`)
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
    } catch(error) {
        res.status(500);
        res.send("fail.")
        console.log(`dataName: ${dataName}`)
        console.log(`data: ${data}`)
        console.log(`Request to push data to place ${placeID} failed due to error: ${error}`)
    }
})

app.get('/robloxdb/get-data', function (req, res) {
    let placeID = req.query.id.replace("?id=","").replace("&id=","")
    let dataName = req.query.dataName.replace("?dataName=","").replace("&dataName=","")
    try {
        let data = db.get(`${placeID}.${dataName}`);
        res.send(`${data}`)
    } catch (error) {
        res.status(500);
        res.send("fail.")
        console.log(`Request to get data ${dataName} from place ${placeID} failed due to error: ${error}`)
    }
})

app.listen(port, () => {
    console.log(`ROBLOX database listening on port ${port}`)
})
  
