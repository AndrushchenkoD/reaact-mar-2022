export default function User({item,elevate}){
    const onclick = () => {
    elevate(item.id);
    }
    return(
      <div>
          <div>{item.id}{item.name}</div>
          <button onClick={onclick}>click me</button>
      </div>
);
}