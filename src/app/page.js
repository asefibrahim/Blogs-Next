"use client"

import { useEffect, useState } from "react"
import HomeSingleBlog from "./ReuseableComponents/HomeSingleBlog";

export default function Home() {
  const [Blog, setBlog] = useState(null);
  useEffect(()=>{
    fetch("blog.json").then(res=> res.json())
    .then(data=> setBlog(data.articles));
  },[]);

  return (
    <div>
      {
        Blog && Blog.map((singleBlog,index)=> <HomeSingleBlog key={index}  Blog={singleBlog}/>)
      }
    </div>
  )
}
