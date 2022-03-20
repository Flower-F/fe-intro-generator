import { Input, Button } from 'antd';
import { memo } from 'react';
import { GiCancel } from 'react-icons/gi';
import { IProjectItem } from '../../../common/types/schema';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

const { TextArea } = Input;

interface IProjectListProps {
  children: IProjectItem[];
  changeChildren: (newChildren: IProjectItem[]) => void;
}

const ProjectList: React.FC<IProjectListProps> = ({
  children,
  changeChildren,
}) => {
  const addItemToChildren = () => {
    const newChildren = [...children];
    newChildren.push({
      name: 'ProjectItem',
      attributes: {
        title: '',
        link: '',
        description: '',
      },
      children: [],
    });
    changeChildren(newChildren);
  };

  const deleteItemFromChildren = (index: number) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    changeChildren(newChildren);
  };

  const changeChildrenItem = (index: number, key: string, value: string) => {
    const originItem = children[index];
    const item = { ...(originItem as IProjectItem) };
    // @ts-ignore
    item.attributes[key] = value;
    const newChildren = [...children];
    newChildren.splice(index, 1, item);
    changeChildren(newChildren);
  };

  return (
    <div className={commonStyles.wrapper}>
      <Button
        type="primary"
        className={styles.button}
        onClick={addItemToChildren}
      >
        新增列表项
      </Button>
      {children.map(({ attributes: { title, description, link } }, index) => (
        <div className={styles.area} key={index}>
          <div className={styles.delete}>
            <GiCancel onClick={() => deleteItemFromChildren(index)} />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>标题</span>
            <Input
              className={styles.content}
              placeholder="请输入标题"
              value={title}
              onChange={(e) =>
                changeChildrenItem(index, 'title', e.target.value)
              }
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>描述</span>
            <TextArea
              rows={4}
              placeholder="请输入关于项目的描述"
              value={description}
              onChange={(e) =>
                changeChildrenItem(index, 'description', e.target.value)
              }
              style={{ marginLeft: 4 }}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>链接</span>
            <Input
              className={styles.content}
              placeholder="请输入跳转链接"
              value={link}
              onChange={(e) =>
                changeChildrenItem(index, 'link', e.target.value)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ProjectList);
