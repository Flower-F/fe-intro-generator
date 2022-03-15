import React, { useState } from 'react';
import { techStackListData } from '../../common/data/TechStackListData';
import { IDetailSchema } from '../../common/types/schema';

interface IDetailProps {
  schema: IDetailSchema;
}

const Detail: React.FC<IDetailProps> = ({ schema }) => {
  const [active, setActive] = useState(true);
  const { attributes } = schema;
  const { index = 0, description = '' } = attributes;

  return (
    <section
      className={`w-full bg-black min-h-screen`}
      style={{
        transformStyle: 'preserve-3d',
        background: `${techStackListData[index].color}`,
      }}
    >
      <div
        className={`three-d cursor-pointer
      ${active && 'active'}`}
        onClick={() => setActive(!active)}
      >
        <div
          className={`origin-center transition
        ${active && 'main-active'}`}
        >
          <div
            className="flex min-h-screen flex-col
          items-center justify-center text-base text-white
          px-12 sm:px-20 sm:text-xl md:text-2xl md:px-32 xl:px-52"
          >
            <div
              className="text-[6rem] md:text-[10rem]
            pb-4"
              style={{ color: `${techStackListData[index].color}` }}
            >
              {techStackListData[index].icon}
            </div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
