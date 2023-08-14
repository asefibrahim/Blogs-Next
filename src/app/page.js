"use client";
import { useEffect, useState } from "react";
import HomeSingleBlog from "./ReuseableComponents/HomeSingleBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const [Blog, setBlog] = useState(null);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data.articles));
  }, []);

  return (
    <div>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full h-96"
              src="https://www.pngkey.com/png/full/382-3824537_paper-news-paper.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-96"
              src="https://inspirationhealthcaregroup.com/wp-content/uploads/2022/12/globe-with-world-map.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-96"
              src="https://www.aumentolaw.com.ph/wp-content/uploads/news-and-blog-background-img.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-2xl border-b py-2">Popular Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Blog &&
            Blog.slice(0,4).map((singleBlog, index) => (
              <HomeSingleBlog key={index} Blog={singleBlog} />
            ))}
        </div>
      </div>
    </div>
  );
}
