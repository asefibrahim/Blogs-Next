"use client"

import { useEffect, useState } from "react"
import HomeSingleBlog from "./ReuseableComponents/HomeSingleBlog";

export default function Home() {
  const [Blog, setBlog] = useState(null);
  useEffect(()=>{
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8e26901aaa0943c5bc1f82180ef4449b").then(res=> res.json())
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
