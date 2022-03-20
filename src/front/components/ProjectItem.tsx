import { useState } from 'react';
import { AiFillCloseCircle, AiOutlineLink } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

interface IProjectItemProps {
  link: string;
  title: string;
  description: string;
  [key: string]: any;
}

const ProjectItem: React.FC<IProjectItemProps> = ({
  link,
  title,
  description,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`border border-[#9fa4a8] 
      rounded-[10px] my-3 p-8 relative transition
      max-w-lg mx-auto
      ${open ? 'bg-white shadow-open' : 'bg-transparent'}`}
    >
      <div className="mr-8 text-black font-bold text-2xl">{title}</div>
      <div
        className={`my-8 text-black text-lg
       ${open ? 'block' : 'hidden'}`}
      >
        {description}
      </div>
      <div
        className="absolute top-6 right-6
      w-8 rounded-full cursor-pointer flex
      items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <AiFillCloseCircle
          className={`text-4xl text-[#9fa4a8]
         ${open ? 'block' : 'hidden'}`}
        />
        <BsChevronDown
          className={`text-2xl text-black
         ${open ? 'hidden' : 'block'}`}
        />
      </div>

      <a
        className={`flex w-full items-center justify-center
      text-center text-base shadow-normal py-4 transition
      rounded-[5px] hover:shadow-hover max-w-[180px]
      mx-auto
      hover:text-[#27ae60] ${open ? 'flex' : 'hidden'}`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        查看详情
        <AiOutlineLink className="ml-1" />
      </a>
    </li>
  );
};
export default ProjectItem;
