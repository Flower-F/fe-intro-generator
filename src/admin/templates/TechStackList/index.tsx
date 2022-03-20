import { Checkbox } from 'antd';
import { memo } from 'react';
import { techStackListData } from '../../../common/data/TechStackListData';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

interface ITechStackList {
  attributes: {
    occupied: Array<number>;
  };
  changeAttributes: (attributes: { occupied: Array<number> }) => void;
}

const TechStackList: React.FC<ITechStackList> = ({
  attributes,
  changeAttributes,
}) => {
  const { occupied = new Array(techStackListData.length).fill(0) } = attributes;

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

export default memo(TechStackList);
