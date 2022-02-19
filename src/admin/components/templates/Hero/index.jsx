import { Input } from 'antd';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

const Hero = (props) => {
  const { attributes = {}, changeAttributes } = props;
  const { nickName = '', title = '', description = '' } = attributes;

  return (
    <div className={commonStyles.wrapper}>
      <div className={styles.row}>
        <span className={styles.label}>昵称</span>
        <Input
          className={styles.content}
          placeholder="请输入您的昵称"
          value={nickName}
          onChange={(e) => changeAttributes({ nickName: e.target.value })}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>标题</span>
        <Input
          className={styles.content}
          placeholder="请输入页面标题"
          value={title}
          onChange={(e) => changeAttributes({ title: e.target.value })}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.label}>简介</span>
        <Input
          className={styles.content}
          placeholder="请输入页面简介"
          value={description}
          onChange={(e) => changeAttributes({ description: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Hero;
