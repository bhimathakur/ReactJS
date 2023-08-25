const Comment = ({data}) => {
    return data.map((item) => {
        return <>        <div className="flex flex-col p-5 m-2">
                    <span><img alt="user" height="50" width="50" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" /></span>
                    <span>Name: {item.name}</span>
                    <span>Comment: {item.comment}</span>
                    <CommentContainer mycomment={item.replies}/>
                </div>
                </>
    });
}

const CommentContainer = ({mycomment}) => {
        return mycomment.map((item) => {
            return (
            <div className="flex flex-col p-5 m-2 border-l-4 border-blue-400">
                <span>Profile Image:</span>
                <span>Name: {item.name}</span>
                <span>Comment: {item.comment}</span>
            </div>
            );
        })
    }    
        


export default Comment;