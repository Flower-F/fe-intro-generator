import styles from './style.module.scss';
import { techStackListData } from '../../../common/data/TechStackListData';

const occupied = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const TechStackList = () => {
  return (
    <section className="wrapper">
      <h3 className={styles.tech}>我的技术栈</h3>
      <div className={styles.list}>
        {techStackListData.map((item, index) =>
          occupied[index] ? (
            <div
              className={styles.item}
              style={{
                borderBottom: `2px solid ${item.color}`,
                color: item.color,
              }}
              key={index}
            >
              <div className={styles.title}>{item.title}</div>
              <div className={styles.icon}>{item.icon}</div>
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
};

export default TechStackList;
