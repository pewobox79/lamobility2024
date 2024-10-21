import express from 'express';
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));

//set global ejs extension
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('homepage', {heading: "Hallo Homepage"})
})


app.post("/", (req, res)=>{

    console.log("req", req.body.firstname)
    
    res.send("user created")

})


app.get("/aboutus", (req, res) => {
    res.render('aboutus')
})

app.get("/aboutus/:user", (req, res)=>{
    const username = req.params.user
    res.render('aboutus', {name: username})

})

app.listen(3333, () => console.log("http://localhost:3333"))