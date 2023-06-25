const express=require("express");
const path=require('path');
const app = express();
const port = 80;

//express specific stuff
app.use('/static',express.static('static')); //to serve the static file
//app.use(express.urlencoded());

//pug specific stuff
app.set('view engine','pug'); //to set the template engine as pub
app.set('views',path.join(__dirname,'views')); // to set the views directory

app.get('/',(req,res)=>{
    res.render('demo.pug');
});

app.listen(port,()=>{
    console.log(`this site is running in the port: ${port}`)
});