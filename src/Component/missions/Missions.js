import {useState,useEffect} from "react";
import {Mission} from "../mission/Mission";

function Missions(){
    const [missions,setMissions]=useState([]);

   useEffect(()=> {
       fetch('https://api.spacexdata.com/v3/launches/')
           .then(value => value.json())
           .then(value => setMissions(value.filter(value=>value.launch_year !== '2020')))
   },[]);
    return(
      <div>
          {
              missions.map((mission, index) => <Mission key={index} item={mission}/>)
          }
      </div>
);
}
export {Missions};