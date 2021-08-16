// const express = require ("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("hello world"));
// app.listen(port, () => console.log(`example app listening at http://localhost:${port}`));

const express = require ("express");
const app = express();
const port = 3000;

//app.listen(port, ()=> console.log(`example app listening at http://localhost:${port}`));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const router = require ("./router");
app.use (router);

app.get("/endpointlain", (req, res)=>{
    res.send("lain")

})

app.listen(port, () =>{
    console.log("hello world !!!")
} )


const logger = (req,res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

app.use(logger)



app.get ('/products', (req, res)=> {
    res.json([
        "apple",
        "redmi",
        "one plus one"
    ])
})

app.get("/orders", (req, res) =>{
    res.json ([
        {
            id: 1,
            paid: false,
            user_id: 1
        },
        {
            id: 2,
            paid: false,
            user_id: 2
        },
    ])
})





// app.listen(3000, function(){
// console.log("Server Nyala")
// })

//harus nyala terminalnya - berjalan terus