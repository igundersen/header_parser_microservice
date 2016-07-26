var express = require("express"),
    app = express()
    
app.get('/api/whoami', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.headers);
    res.json({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers["accept-language"].split(',')[0],
        software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");