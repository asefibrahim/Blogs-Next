"use client"
import { useEffect, useState } from "react";
import CommetSection from "../ReuseableComponents/CommetSection";

const BlogDetails = ({params}) => {
    const [blogs, setBlogs] = useState(null);
    useEffect(()=>{
        fetch("blog.json").then(res=> res.json()).then(data=> {
            const blog = data.articles.find(blog=> blog.source.id == params.id);
            setBlogs(blog);
        })
    },[]);
    
    return (
        <div>
            <img className="rounded-md shadow-sm w-2/5 h-72" src={blogs?.urlToImage} alt="" />
            <div className="p-5">
                <h1 className="text-sm font-bold text-gray-500">{blogs?.author}</h1>
                <h1><span className="font-bold text-yellow-500">Publish Date: </span>{blogs?.publishedAt}</h1>
                <h1 className="text-2xl font-bold font-serif">{blogs?.title}</h1>
                <h1>{blogs?.description}</h1>
                <p>{blogs?.content}</p>
            </div>
            <CommetSection/>
        </div>
    );
};

export default BlogDetails;