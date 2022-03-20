import React from 'react';
import { Progress } from 'antd';
import { techStackListData } from '../../common/data/TechStackListData';
import { IDetailSchema } from '../../common/types/schema';

interface IDetailProps {
  schema: IDetailSchema;
}

const Detail: React.FC<IDetailProps> = ({ schema }) => {
  const { attributes } = schema;
  const { index = 0, description = '', percent = 0 } = attributes;
  const { icon, color } = techStackListData[index];

  return (
    <section
      className="relative inline-flex items-center justify-center w-full 
        min-h-screen duration-300 ease-out shadow-md group rounded-2xl
        cursor-pointer overflow-hidden"
      style={{ border: `4px solid ${color}` }}
    >
      <span
        className="absolute inset-0 flex flex-col items-center justify-center 
        w-full h-full text-white duration-300 -translate-x-full
        group-hover:translate-x-0 ease sm:flex-row"
      >
        <Progress
          percent={percent}
          format={(percent) => `${percent}%`}
          type="circle"
          strokeColor={color}
          style={{ color: 'white' }}
          width={160}
        />
        <p
          className="text-black text-xl max-w-[200px] mt-4
        sm:ml-6 sm:max-w-[300px] sm:mt-0"
        >
          {description}
        </p>
      </span>
      <span
        className="absolute flex items-center justify-center
         w-full h-full transition-all duration-300 text-[14rem]
         transform group-hover:translate-x-full ease rounded"
        style={{ color: `${color}` }}
      >
        {icon}
      </span>
      <span className="relative invisible"></span>
    </section>
  );
};

export default Detail;
