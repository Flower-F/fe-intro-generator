import { Input } from 'antd';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

interface IHeroProps {
  attributes: {
    title: string;
    description: string;
  };
  changeAttributes: ({
    nickName,
    title,
    description,
  }: {
    nickName?: string;
    title?: string;
    description?: string;
  }) => void;
}

const Hero: React.FC<IHeroProps> = ({ attributes, changeAttributes }) => {
  const { title = '', description = '' } = attributes;

  return (
    <div className={commonStyles.wrapper}>
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
