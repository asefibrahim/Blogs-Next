import React from "react";
import { AiFillGithub,AiFillLinkedin,AiOutlineDribbble } from "react-icons/ai";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <img
        className="w-4/5"
        src="https://media.licdn.com/dms/image/D5603AQFmbJT9yefhnQ/profile-displayphoto-shrink_800_800/0/1690904446270?e=2147483647&v=beta&t=iXzvDJt5cnK0MU_2Ah6svWPgQj9wtw6kI88EcHi9MlU"
        alt=""
      />
      <div>
        <h1 className="text-lg font-bold">Mern Stack Developer</h1>
        <h1 className="text-3xl font-bold font-serif mb-3">
          Mohaiminur Rahman Mukta
        </h1>
        <p className="text-sm text-gray-500">
          My name is Mohaiminur Rahman Mukta. I am a Mern stack website
          developer. I have a passion for web development, and I specialize in
          front-end development using React.js. I have been working on React
          projects. With a strong foundation in React.js and expertise in
          Express.js, JWT, MongoDB,Next js, TypeScript and JavaScript, I am
          confident in my ability to build interactive and user-friendly web
          applications. Throughout my experience, I have collaborated
          effectively with backend developers and demonstrated problem-solving
          skills in tackling complex challenges. <br /> Apart from programming,
          I have other interests as well. I am an avid traveler, always looking
          for opportunities to explore new places and experience different
          cultures. I believe traveling helps broaden my perspective and fuels
          my creativity. Additionally, I enjoy reading books, especially those
          related to technology, personal development, and philosophy. I find
          that reading allows me to continuously learn and stay updated in my
          field.
        </p>
        <div>
          <h1 className="text-2xl mt-3 font-bold font-serif border-b mb-2">My skill</h1>
          <p className="text-sm font-mono">
            <span className="text-base font-bold font-sans">Expertise:</span> HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React
            JS, Express JS, Firebase, JWT (JSON web token) <br /> <span className="text-base font-bold font-sans">Comfortable:</span> REST
            APIs, Node JS, MongoDB, Next JS, Mongoose, Payment Method Stripe,
            Typescript <br /> <span className="text-base font-bold font-sans">Familiar:</span> MySQL, WordPress, PHP, Redux, GraphQL, SQL,
            React Native <br /> <span className="text-base font-bold font-sans">Tools:</span> VS Code, GitHub, Figma, Netlify, Vercel, Adobe
            Photoshop cs6
          </p>
        </div>
        <div className="flex gap-3 text-4xl mt-3">
            <a className="hover:text-yellow-500" target="blank" href="https://github.com/Mohaiminur-MernStackDeveloper"><AiFillGithub/></a>
            <a className="hover:text-yellow-500" target="blank" href="https://www.linkedin.com/in/mohaiminur-mernstack/"><AiFillLinkedin/></a>
            <a className="hover:text-yellow-500" target="blank" href="https://www.linkedin.com/in/mohaiminur-mernstack/"><AiOutlineDribbble/></a>
        </div>
      </div>
    </div>
  );
};

export default page;
