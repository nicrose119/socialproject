import React from "react"

const PostList = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.displayPost.map((post) => {
                return (
                <tr>
                    <td>{post.name}</td>
                    <td>{post.date}</td>
                    <td>{post.entry}</td>
                    <button>{post.img}</button>
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