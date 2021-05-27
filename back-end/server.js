import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();



const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/tinderDB",{useNewUrlParser:true ,useCreateIndex:true ,useUnifiedTopology:true});

const cardSchema = {
    name: String,
    url: String
}

const card = mongoose.model("cards",cardSchema);

app.get('/',(req,res) => {
    res.send("<h1>Sahil</h1>")
})

app.get('/tinder',(req,res) => {
    card.find((err,data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/tinder',(req,res) => {
    const bodyData = req.body;
    const newCard = new card({
        name:bodyData.name,
        url:bodyData.url
    })
    newCard.save((err,data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.listen(port,() => {
    console.log('SERVER STARTED ON PORT : '+port)
})
