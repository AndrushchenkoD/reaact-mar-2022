import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../User/User";

export default function Users({elevate}){
let [users,setUsers]=useState([]);
useEffect(() => {
getUsers().then(value=>setUsers(value.data));
},[]);
    return(
      <div>
          {
              users.map(data=><User item={data} key={data.id} elevate={elevate}/>)
          }
      </div>
);
}