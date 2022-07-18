import {useEffect, useState} from "react";
import User from "../User/User";

export default function Users(){

let [users,setUsers] = useState([]);
let[user,setUser]=useState(null);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {setUsers(value)});
},[]);

const choseUser=(item)=>{
    setUser(item);
};
    return(
      <div>
          {user && <div>
              {user.id}
              {user.username}
              {user.email}
              {user.address.city}</div>}
          {users.map((user,index) => <User key={index} item={user} choseUser={choseUser}/>)}
      </div>);
}