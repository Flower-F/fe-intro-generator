import { AiOutlineLink } from 'react-icons/ai';
import { IFooterSchema } from '../../../common/types/schema';
// import styles from './style.module.scss';

interface IFooterProps {
  schema: IFooterSchema;
}

const Footer: React.FC<IFooterProps> = ({ schema }) => {
  const { children = [] } = schema;

  return (
    <ul className="flex flex-col">
      {children.map(({ attributes: { link = '', title = '' } }, index) => (
        <li key={index} className="py-1 pl-2 text-base">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-[#444]
             hover:text-[#27ae60]"
          >
            {title}
            <AiOutlineLink className="ml-1" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Footer;
