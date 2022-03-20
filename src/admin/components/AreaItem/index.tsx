import { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Select } from 'antd';
import { cloneDeep } from 'lodash';
import { SortableElement } from 'react-sortable-hoc';
import Footer from '../templates/Footer';
import Detail from '../templates/Detail';
import Hero from '../templates/Hero';
import TechStackList from '../templates/TechStackList';
import ProjectList from '../templates/ProjectList';
import useStore from '../../hooks/useStore';
import { IFooterItem, IProjectItem } from '../../../common/types/schema';
import styles from './style.module.scss';

const { Option } = Select;

interface AreaItemProps {
  value: number;
}

const AreaItem: React.FC<AreaItemProps> = ({ value: index }) => {
  const { pageChild, changePageChild, removePageChild } = useStore(index);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tempPageChild, setTempPageChild] = useState(cloneDeep(pageChild));

  useEffect(() => {
    setTempPageChild(cloneDeep(pageChild));
  }, [pageChild]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    changePageChild(tempPageChild);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setTempPageChild(cloneDeep(pageChild));
  };

  const handleSelectorChange = (value: any) => {
    setTempPageChild({
      name: value,
      attributes: {},
      children: [],
    });
  };

  const changeTempPageChildAttributes = useCallback(
    (obj: { [x: string]: any }) => {
      const newTempChild = { ...tempPageChild };
      for (const key in obj) {
        // @ts-ignore
        newTempChild.attributes[key] = obj[key];
      }
      setTempPageChild(newTempChild);
    },
    [tempPageChild],
  );

  const changeTempPageChildren = useCallback(
    (children: [] | IProjectItem[] | IFooterItem[]) => {
      const newTempChild = { ...tempPageChild };
      newTempChild.children = children;
      setTempPageChild(newTempChild);
    },
    [tempPageChild],
  );

  const getComponent = () => {
    const { name } = tempPageChild;

    switch (name) {
      case 'Footer':
        return (
          <Footer {...tempPageChild} changeChildren={changeTempPageChildren} />
        );
      case 'Detail':
        return (
          <Detail
            {...tempPageChild}
            changeAttributes={changeTempPageChildAttributes}
          />
        );
      case 'Hero':
        return (
          <Hero
            {...tempPageChild}
            changeAttributes={changeTempPageChildAttributes}
          />
        );
      case 'ProjectList':
        return (
          <ProjectList
            {...tempPageChild}
            changeChildren={changeTempPageChildren}
          />
        );
      case 'TechStackList':
        return (
          <TechStackList
            {...tempPageChild}
            changeAttributes={changeTempPageChildAttributes}
          />
        );
      default:
        break;
    }
  };

  return (
    <li className={styles.item}>
      <span className={styles.content} onClick={showModal}>
        {pageChild.name ? pageChild.name + ' 组件' : '当前区块内容为空'}
      </span>
      <span>
        <Button
          size="small"
          type="dashed"
          danger
          className={styles.delete}
          onClick={removePageChild}
        >
          删除
        </Button>
        <Modal
          title="选择组件"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          okText="确认"
          cancelText="取消"
          bodyStyle={{ maxHeight: 500, overflowY: 'auto' }}
        >
          <Select
            style={{ width: '100%' }}
            onChange={handleSelectorChange}
            value={tempPageChild.name}
          >
            <Option value="Detail">Detail 组件</Option>
            <Option value="Hero">Hero 组件</Option>
            <Option value="Footer">Footer 组件</Option>
            <Option value="TechStackList">TechStackList 组件</Option>
            <Option value="ProjectList">ProjectList 组件</Option>
          </Select>
          {getComponent()}
        </Modal>
      </span>
    </li>
  );
};

export default SortableElement(AreaItem);
