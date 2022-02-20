import { Checkbox } from 'antd';
import { techStackListData } from '../../../../common/data/TechStackListData';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

const TechStackList = (props) => {
  const { attributes = {}, changeAttributes } = props;
  const { occupied = new Array(techStackListData.length).fill(0) } = attributes;

  console.log(attributes);

  return (
    <div className={commonStyles.wrapper}>
      <div className={styles.row}>
        <div>请选择你擅长的技术栈</div>
        <div className={styles.checkbox}>
          {techStackListData.map((item, index) => (
            <Checkbox
              key={index}
              checked={occupied[index] ? true : false}
              onChange={() => {
                occupied[index] = occupied[index] === 0 ? 1 : 0;
                changeAttributes({ occupied: [...occupied] });
              }}
            >
              {item.title}
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackList;
