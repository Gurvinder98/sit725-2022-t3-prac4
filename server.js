// loading express
var express=require("express")
var cors=require('cors')
let projectCollection;

var app= express()

// defining the middleware
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

//mongodb connection..
const MongoClient = require('mongodb').MongoClient;
const uri='mongodb+srv://gurvinder:sid@cluster0.jl7rzbc.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})




const createCollection =(collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDb Connected Successfully')
        }
        else{
            console.log('DB ERROR:',err);
            process.exit(1);
        }
    })
    }


//post api..
app.post("/api/projects", (req, res) => {
    console.log("New project added", req.body);
    var newProject = req.body;
    insertProjects(newProject, (err, result) => {
      if (err) {
        res.json({
          statusCode: 400,
          message: err,
        });
      } else {
        res.json({statusCode: 200, message: "project added successfully", data: result})
      }})})


    //const cardList = [
    //     {
    //       title: "CHAMPIONS LEAGUE",
    //       image: "images/sports2.jpg",
    //       link: "https://en.wikipedia.org/wiki/UEFA_Champions_League",
    //       desciption: "The UEFA Champions League (abbreviated as UCL, or sometimes, UEFA CL) is an annual club football competition organised by the Union of European Football Associations (UEFA)",
    //     },
    //     {
    //       title: "EUROPA LEAGUE",
    //       image: "images/sports3.png",
    //       link: "https://en.wikipedia.org/wiki/UEFA_Europa_League",
    //       desciption: "The UEFA Europa League (abbreviated as UEL, or sometimes, UEFA EL), formerly the UEFA Cup, is an annual football club competition organised since 1971 by the Union of European Football Associations (UEFA)",
    //     },
    //   ];

// setting portbinding
var port = process.env.port || 3000;

// get project..

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);

}
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}

app.get("/api/projects", (req, res) => {
    getProjects((err, result) => {
      if (err) {
        res.json({
          statusCode: 400,
          message: err,
        });
      } else {
        res.json({
          statusCode: 200,
          message: "Success",
          data: result,
        })
      }
    })
  })

app.listen(port,()=>{
    console.log("App listening to:http://localhost:"+port)
    createCollection('Football')

})