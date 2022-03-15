import { AiOutlineLink } from 'react-icons/ai';
import { IFooterSchema } from '../../../common/types/schema';

interface IFooterProps {
  schema: IFooterSchema;
}

const Footer: React.FC<IFooterProps> = ({ schema }) => {
  const { children = [] } = schema;

  return (
    <ul
      className="flex m-auto mt-2 flex-wrap
    shadow-normal py-4 justify-center"
    >
      {children.map(({ attributes: { link = '', title = '' } }, index) => (
        <li
          key={index}
          className="py-1 p-2 text-base shadow-normal
          ml-2 leading-8 hover:shadow-hover"
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-[#444]
             hover:text-[#27ae60]"
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
