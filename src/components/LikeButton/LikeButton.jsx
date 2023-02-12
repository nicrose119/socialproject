
import React from "react";

    const LikeButton = (props) => {
        return (<button onClick={props.updateClickLikeCount}>Like</button>);
    }

export default LikeButton;