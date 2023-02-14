const PostList = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.postList.map((post) => {
                return (
                <tr>
                    <td>{post.name}</td>
                    <td>{post.entry}</td>
                </tr>
                );
            })}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    );
}

export default PostList;