import { Input, Select, Switch } from 'antd';
import { techStackListData } from '../../../../common/data/TechStackListData';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

const { TextArea } = Input;
const { Option } = Select;

const Detail = (props) => {
  const { attributes = {}, changeAttributes } = props;
  const { index = 0, reverse = false, description = '' } = attributes;

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
      <div className={styles.row}>
        <span className={styles.label}>图片在左</span>
        <Switch
          checked={reverse}
          onChange={(checked) => {
            changeAttributes({
              reverse: checked,
            });
          }}
        />
      </div>
    </div>
  ) : null;
};

export default Detail;
