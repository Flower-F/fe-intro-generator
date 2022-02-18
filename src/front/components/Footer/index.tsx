import { AiOutlineLink } from 'react-icons/ai';
import styles from './style.module.scss';

const data = [
  {
    title: 'My Github',
    link: 'https://github.com/Flower-F',
  },
  {
    title: '后台系统',
    link: 'http://localhost:3000/admin.html',
  },
];

const Footer = () => {
  return (
    <div className="wrapper">
      <div className={styles.footer}>
        <ul className={styles.list}>
          {data.map((item, index) => (
            <li className={styles.item} key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {item.title}
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
