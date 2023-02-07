import React from "react";

const DislikeButton = (props) => {
    return (<button onClick={props.updateClickDislikeCount}>Dislike</button>);
}

export default DislikeButton;