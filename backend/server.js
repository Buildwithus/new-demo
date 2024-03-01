
const { error } = require('console');
const express=require('express');
const cors=require('cors')

const http=require('https');

const app=express();
app.use(express.json());
app.use(cors())

app.get("/:cityname",async(req,res)=>{
     let city=req.params.cityname;
    console.log(city)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f5ad66cc6e050178d98025fd7547f59`;
    function httpget(url){
        return new Promise((resolve,reject)=>{
            http.get(url,(response)=>{
                response.on('data',(data)=>{
                    resolve(JSON.parse(data))
                })
            }).on('end',(error)=>{
                reject(error)
            })
        })
    }
    httpget(url).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log(error)
    });
})
app.post("/",async(req,res)=>{
    console.log(req.body.cityname)
    res.send("successfully posted!")
})
const port=4000;
app.listen(port,(req,res)=>{
    console.log(`the server is running on port ${port}`)
})