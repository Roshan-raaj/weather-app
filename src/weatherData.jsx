import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



import { useState } from 'react';

export default function Weather(){

    let [h,seth]=useState(2);

let [city,setcity]=useState("");
let url="https://api.openweathermap.org/data/2.5/weather?";
let api_key="daa5cd6ecde1ace081c4d075752b5901";

let [data,setdata]= useState({temp:23,
    max_temp:22,
    min_temp:34,
    humidity:78})


 async function findo(){

let getresponse= await fetch(`${url}q=${city}&appid=${api_key}&units=metric`)
let jsonres=await getresponse.json();

data={
    temp:jsonres.main.temp,
    max_temp:jsonres.main.temp_max,
    min_temp:jsonres.main.temp_min,
    humidity:jsonres.main.humidity,
}

setdata(data);



console.log(data.temp);
setcity("");
  seth(h+1);
}






function handlechange(event){

setcity(event.target.value);




}
   let show;
 if(data.humidity>70){
    show="it's raining now"
 }
else{
    show="";
}

function changer(){
seth(h+1);


}


if(h%2==0){
  return(
<div className='search'>
<form >
<TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handlechange}   /></form>

<Button variant="outlined"  onClick={findo}>SEarch</Button>



</div>
  );



}

else{
return(
<>
<div className='search'>




<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Current Weather:
          </Typography>
          <h2>Temperature: {data.temp}</h2>
          <h2>Humidity: {data.humidity}</h2>
          <h2>Maximum Temperature: {data.max_temp}</h2>
          <h2>Minimum Temperature: {data.min_temp}</h2>

               

        </CardContent>
      </CardActionArea>
    </Card>

  <h2>{show}</h2>

  <Button variant="contained"  onClick={changer}>Back</Button>
</div>
</>

)}

}