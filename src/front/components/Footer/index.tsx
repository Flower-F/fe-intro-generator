import { AiOutlineLink } from 'react-icons/ai';
import styles from './style.module.scss';

interface IFooterItem {
  attributes: {
    link: string;
    title: string;
  };
}

interface IFooterSchema {
  list: Array<IFooterItem>;
}

interface IFooterProps {
  schema: IFooterSchema;
}

const Footer: React.FC<IFooterProps> = ({ schema }) => {
  const { list = [] } = schema;

  return (
    <div className="wrapper">
      <div className={styles.footer}>
        <ul className={styles.list}>
          {list.map(({ attributes: { link = '', title = '' } }, index) => (
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
