import React from 'react'



export default function PostCard({post}){
    console.log(post)

    return(
        <div className='card'>
            <h3>{post.title}</h3>
            <img src={post.image}/>
            <h3>{post.description}</h3>
        </div>
    )

}