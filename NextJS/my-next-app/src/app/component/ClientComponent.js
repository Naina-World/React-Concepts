"use client";

import { useEffect, useState } from "react";

export default function ClientComponent(){
    const [count, setCount] = useState(0);
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${3+count}`)
        .then(res=>res.json())
        .then(data=>setPosts(data));
    },[count]);

    return(
        <div>
           <h2> Posts (Client Fetched)</h2>
           {posts.map(post =>(
            <p key={post.id} >{post.title}</p>
           ))}
           <button onClick={()=>setCount(c => c + 1)}>+1</button>
           <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}