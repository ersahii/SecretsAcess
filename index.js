import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended: true}));
var userIsAuthorised = false;
function userValidation(req , res , next){
    if(req.body["username"] === "mirmehraj" && req.body["password"] === "Companyforesite@786"){
        userIsAuthorised = true;
    }
    else {
        userIsAuthorised = false ;
    }
    next();
}
app.use(userValidation);
app.get("/", (req , res)=>{
    res.sendFile(_dirname + "/public/Login.html");
    })
    app.post("/check", (req , res)=>{
        if(userIsAuthorised){
            res.sendFile(_dirname + "/public/secrets.html");
            }
            else{
        // res.sendFile(_dirname + "/public/Login.html");
        res.redirect("/");
    }     
})


app.listen(port, ()=>{
    console.log("server started at port" , port)
})