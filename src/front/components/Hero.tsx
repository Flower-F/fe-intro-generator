import React from 'react';
import { IHeroSchema } from '../../common/types/schema';

interface IHeroProps {
  schema: IHeroSchema;
}

const Hero: React.FC<IHeroProps> = ({ schema }) => {
  const { attributes = { link: '', title: '', description: '' } } = schema;
  const { title, description, link } = attributes;

  return (
    <section
      className="flex flex-col items-center
     justify-center text-center min-h-screen"
    >
      <>
        <h1
          className="text-4xl sm:text-6xl leading-none text-[#444] 
          font-semibold"
        >
          {title}
        </h1>
        <p
          className="text-xl sm:text-2xl pb-2 text-[#27ae60] leading-snug
        mt-4"
        >
          {description}
        </p>

        <div
          className="w-40 h-40 shadow-hover rounded-full
        flex items-center justify-center mt-4"
        >
          <img
            src={link}
            alt="我的头像"
            className="w-32 h-32 shadow-normal rounded-full"
          />
        </div>

        {/* <a
          className="mt-4 px-6 py-3 rounded-lg 
          cursor-pointer text-xl text-[#444]
          shadow-normal hover:shadow-hover hidden xl:inline-block
          hover:text-[#27ae60]"
          href="https://fe-intro-generator-1305624698.file.myqcloud.com/admin.html"
          target="_blank"
          rel="noreferrer"
        >
          参观后台
        </a> */}
      </>
    </section>
  );
};

export default Hero;
