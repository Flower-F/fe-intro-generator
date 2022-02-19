import React from 'react';
import { Input, Button } from 'antd';

import commonStyles from '../common.module.scss';
import styles from './style.module.scss';

const Footer = (props) => {
  const {
    attributes = {},
    changeAttributes,
    children = [],
    changeChildren,
  } = props;
  const { copyright, record } = attributes;

  const addItemToChildren = () => {
    const newChildren = [...children];
    newChildren.push({
      name: 'Item',
      attributes: {
        title: '',
        link: '',
      },
      children: [],
    });
    changeChildren(newChildren);
  };

  const deleteItemFromChildren = (index) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    changeChildren(newChildren);
  };

  const changeChildrenItem = (index, key, value) => {
    const originItem = children[index];
    const item = { ...originItem };
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
      {children.map(({ attributes: { title, link } }, index) => (
        <div className={styles.area} key={index}>
          <div
            className={styles.delete}
            onClick={() => deleteItemFromChildren(index)}
          >
            X
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

export default Footer;
