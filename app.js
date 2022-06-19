import express from "express"
import bodyParser from "body-parser"
import registerController from "./controller/registerController.js"
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//page view
app.set("view engine","ejs")
app.set("views","./views")

//route
app.get('/',(req,res)=>{
    registerController.showData().then((result)=>{
       (result.length==0) ? res.render("homeEmpty",{"output":"no data found, pls goto register"}): res.render("home",{"output":result})
    }).catch((err)=>{
        console.log(err);
    })
})

app.get('/login',(req,res)=>{
    res.render("login",{"output":""})
})

app.post('/login',(req,res)=>{
    registerController.saveDataController(req.body).then((result)=>{
        res.render("login",{"output":"data save successfully"})
    }).catch((err)=>{
        res.render("login",{"output":err})
    })
})

app.post('/search',(req,res)=>{
    registerController.findUser(req.body).then((result)=>{
    console.log(result);
    (result.length==0) ? res.render("homeEmpty",{"output":"no data found, pls enter right entry"}): res.render("home",{"output":result})

      
    }).catch((err)=>{
        console.log(err);
    })
})

app.listen(3000)
console.log("http://localhost:3000");