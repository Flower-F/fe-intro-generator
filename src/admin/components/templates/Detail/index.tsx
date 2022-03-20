import { Input, Select, Slider } from 'antd';
import { memo } from 'react';
import { techStackListData } from '../../../../common/data/TechStackListData';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

const { TextArea } = Input;
const { Option } = Select;

interface IDetailProps {
  changeAttributes: ({
    index,
    description,
    percent,
  }: {
    index?: string;
    description?: string;
    percent?: number;
  }) => void;
  attributes: {
    index: number;
    description: string;
    percent: number;
  };
}

const Detail: React.FC<IDetailProps> = ({ changeAttributes, attributes }) => {
  const { index = 0, description = '', percent = 50 } = attributes;

  function formatter(value = 0) {
    return `${value}%`;
  }

  return index < techStackListData.length ? (
    <div className={commonStyles.wrapper}>
      <div className={styles.row}>
        <span className={styles.label}>技能点</span>
        <Select
          defaultValue={techStackListData[index].title}
          style={{ width: 120 }}
          onChange={(value) => changeAttributes({ index: value })}
        >
          {techStackListData.map((item, index) => (
            <Option value={index} key={index}>
              {item.title}
            </Option>
          ))}
        </Select>
      </div>
      <div className={styles.handle}>
        掌握程度
        <Slider
          tipFormatter={formatter}
          value={percent}
          onChange={(value) => changeAttributes({ percent: value })}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>详细描述</span>
        <TextArea
          rows={4}
          placeholder="请详细描述该技能点"
          value={description}
          onChange={(e) => changeAttributes({ description: e.target.value })}
          style={{ marginLeft: 10 }}
        />
      </div>
    </div>
  ) : null;
};

export default memo(Detail);
