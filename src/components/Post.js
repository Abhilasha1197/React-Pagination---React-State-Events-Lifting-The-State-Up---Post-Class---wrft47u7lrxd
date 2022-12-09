import React from 'react'
const Post = ({heading,body}) => {
    return (
        <div className="post">
            <h3>{heading}</h3>
            <p>{body}</p>

        </div>
    )
}

export { Post }