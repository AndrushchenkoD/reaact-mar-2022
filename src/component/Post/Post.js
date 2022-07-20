export default function Post({posts}){

    return(
      <div>
          {
              posts.map(value=><div>{value.body}</div>)
          }
      </div>

);
}