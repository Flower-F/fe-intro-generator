import React from 'react';
// import { SiGithub } from 'react-icons/si';
import { IHeroSchema } from '../../../common/types/schema';

interface IHeroProps {
  schema: IHeroSchema;
}

const Hero: React.FC<IHeroProps> = ({ schema }) => {
  const { attributes = { nickName: '', title: '', description: '' } } = schema;
  const { title, description } = attributes;

  return (
    <section
      className="flex flex-col items-center
     justify-center text-center"
    >
      <>
        <h1
          className="text-6xl leading-none text-[#444] 
          font-semibold"
        >
          {title}
        </h1>
        <p
          className="text-2xl pb-2 text-[#27ae60] leading-snug
        mt-4"
        >
          {description}
        </p>

        <button
          className="mt-4 px-6 py-3 rounded-lg 
          cursor-pointer text-xl text-[#444]
          shadow-normal hover:shadow-hover hidden xl:inline-block
          hover:text-[#27ae60]"
        >
          参观后台
        </button>

        {/* <a
          href="https://github.com/Flower-F/fe-intro-generator"
          target="_blank"
          rel="noreferrer"
          title={nickName}
          className="inline-flex text-xl items-center
          px-6 py-3 text-black bg-transparent 
          rounded-full mt-8 border-2 hover:text-[#27ae60]
          border-[#27ae60] transition"
        >
          <SiGithub className="mr-2" />
          Github
        </a> */}
      </>
    </section>
  );
};

export default Hero;
