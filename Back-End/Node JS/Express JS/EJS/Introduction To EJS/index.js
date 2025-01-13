
import  express from "express"
const app=express()
const port=3000

import ejs from "ejs"

app.get("/",(req,res)=>{
const d=new Date()
let day=d.getDay()
let dayType="weekend"
let advice="its time to relax"
//if day is saturday or sunday then its a weekend
if(day==0 || day==6){
    dayType="weekend"
    advice="its time to relax"
}
else{
    dayType="weekday"
    advice="its time to work hard"

}
//render the ejs file
res.render("index.ejs",{dayType:dayType,advice:advice});

});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });