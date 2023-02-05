const express = require("express");
const bodyParser = require("body-parser");
const http = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    // console.log(__dirname + "/index.js")
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    console.log(req.body.search)
    var search = toUrl(req.body.search)
    console.log(search);
    
const options = {
	"method": "GET",
	"hostname": "genius-song-lyrics1.p.rapidapi.com",
	"port": null,
	"path": "/search/?q=" + search + "&per_page=10&page=1",
	"headers": {
		"X-RapidAPI-Key": "db9607d3c8msh491caaf8e7a77b3p1715f7jsnd823e9611a94",
		"X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
		"useQueryString": true
	}
};

const request = http.request(options, function (response) {
	const chunks = [];
    // console.log(response);

	response.on("data", function (chunk) {
		chunks.push(chunk);
	});

	response.on("end", function () {
		const body = Buffer.concat(chunks);
		// console.log(body.hits[0].result.full_title.toString());
        console.log(body.hits[0].type.toString());
	});
});

request.end();
});

app.listen(300, () => {
    console.log('hello world');
});

function toUrl(search)
{
    var str="";
    for(var i = 0; i<search.length; i++)
    {
        if(search.charAt(i)==" ")
            str+="%20";
        else 
            str+=search.charAt(i);
    
    }
    return str;
}




