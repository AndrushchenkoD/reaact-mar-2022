
function PostComponent({item}) {
    return (
        <div>
            <h3>{item.id} {item.title}</h3>
            <p>{item.body}</p>
        </div>
    );
}

export default PostComponent;