import Link from 'next/link';
import React from 'react';

const HomeSingleBlog = (Blog) => {
    const {urlToImage,title,publishedAt,description,source} = Blog.Blog;
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 my-5 shadow-md p-5 gap-2 rounded-md'>
            <img className='w-4/5 rounded-sm' src={urlToImage} alt="" />
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl'>{source.name}</h1>
                <h1 className='text-lg'>{title}</h1>
                <p className='text-sm text-gray-500'>{publishedAt}</p>
                <p className='my-3 text-sm text-gray-500'>{description}</p>
                <Link className='mt-auto px-5 py-2 bg-slate-600 text-center text-white rounded-md shadow-md hover:bg-slate-700' href={`/${source.id}`}>Click here for Details</Link>
            </div>
        </div>
    );
};

export default HomeSingleBlog;