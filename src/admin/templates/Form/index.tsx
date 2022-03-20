import { Button, Input, InputNumber } from 'antd';
import React from 'react';
import { GiCancel } from 'react-icons/gi';
import { IFormItem } from '../../../common/types/schema';
import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

interface IFormProps {
  children: Array<IFormItem>;
  changeChildren: (newChildren: IFormItem[]) => void;
  attributes: {
    link: string;
  };
  changeAttributes: ({ link }: { link?: string }) => void;
}

const Form: React.FC<IFormProps> = ({
  children,
  changeChildren,
  attributes,
  changeAttributes,
}) => {
  const addItemToChildren = () => {
    const newChildren = [...children];
    newChildren.push({
      name: 'FormItem',
      attributes: {
        name: '',
        key: '',
        rows: '1',
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
    const item = { ...(originItem as IFormItem) };
    // @ts-ignore
    item.attributes[key] = value;
    const newChildren = [...children];
    newChildren.splice(index, 1, item);
    changeChildren(newChildren);
  };

  const { link } = attributes;

  return (
    <div className={commonStyles.wrapper}>
      <div className={styles.row}>
        <span className={styles.label}>请求链接</span>
        <Input
          className={styles.content}
          placeholder="请输入后端请求链接"
          value={link}
          onChange={(e) => changeAttributes({ link: e.target.value })}
        />
      </div>
      <Button
        type="primary"
        className={styles.button}
        onClick={addItemToChildren}
      >
        新增列表项
      </Button>
      {children.map(({ attributes: { key, name, rows } }, index) => (
        <div className={styles.area} key={index}>
          <div className={styles.delete}>
            <GiCancel onClick={() => deleteItemFromChildren(index)} />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>表项名</span>
            <Input
              className={styles.content}
              placeholder="请输入表项名"
              value={key}
              onChange={(e) => changeChildrenItem(index, 'key', e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>字段名</span>
            <Input
              className={styles.content}
              placeholder="请输入表项对应的后端数据库字段名"
              value={name}
              onChange={(e) =>
                changeChildrenItem(index, 'name', e.target.value)
              }
            />
          </div>
          <div className={styles.row}>
            <span className={styles.label}>行数</span>
            <InputNumber
              size="large"
              min={1}
              max={4}
              value={parseInt(rows)}
              onChange={(value) =>
                changeChildrenItem(index, 'rows', value.toString())
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Form;
