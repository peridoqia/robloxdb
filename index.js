var express = require('express')
var app = express()
let port = 24365


app.get('/robloxdb/send-data', function (req, res) {
    let placeID = req.params.id
    let dataName = req.params.dataName
    let data = req.params.data
    try {
        db.set(`${placeID}.${dataName}`, data);
        res.send(`OK! Set ${dataName} for ${placeID} to ${data} !`)
    } catch {
        res.send("fail.")
    }
})


app.get('/robloxdb/push-data', function (req, res) {
    let placeID = req.params.id
    let dataName = req.params.dataName
    let data = req.params.data
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
    let placeID = req.params.id
    let dataName = req.params.dataName
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
  