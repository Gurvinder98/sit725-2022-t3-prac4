// loading express
var express=require("express")

var app= express()

// defining the middleware
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// setting portbinding
var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to:http://localhost:"+port)

})