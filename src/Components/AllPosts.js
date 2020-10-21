import React from 'react'
import PostCard from './PostCard'

export default function AllPosts({posts}){
    console.log(posts)
    const displayPosts = () =>{
        return posts.map(post => {
            return (
                <PostCard
                    key={post.id}
                    post={post}
                    />
            )
        })
    }

    return(
        <div classname="allPosts">
            {displayPosts()}
        </div>
    )
}