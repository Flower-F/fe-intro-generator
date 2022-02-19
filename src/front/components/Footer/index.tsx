import { AiOutlineLink } from 'react-icons/ai';
import { IFooterSchema } from '../../../common/types/schema';
import styles from './style.module.scss';

interface IFooterProps {
  schema: IFooterSchema;
}

const Footer: React.FC<IFooterProps> = ({ schema }) => {
  const { children = [] } = schema;

  return (
    <div className="wrapper">
      <div className={styles.footer}>
        <ul className={styles.list}>
          {children.map(({ attributes: { link = '', title = '' } }, index) => (
            <li className={styles.item} key={index}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {title}
                <AiOutlineLink />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
