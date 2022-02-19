import { useEffect, useState } from 'react';
import { Button, Modal, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { cloneDeep } from 'lodash';
import { SortableElement } from 'react-sortable-hoc';
import Footer from '../templates/Footer';
import Detail from '../templates/Detail';
import Hero from '../templates/Hero';
import TechStackList from '../templates/TechStackList';
import ProjectList from '../templates/ProjectList';

import {
  getChangePageChildAction,
  getDeletePageChildAction,
} from '../../store/actions';

import styles from './style.module.scss';

const { Option } = Select;

const mapping = { Footer, Detail, Hero, TechStackList, ProjectList };

const useStore = (index) => {
  const dispatch = useDispatch();
  const pageChild = useSelector(
    (state) => state.admin.schema?.children?.[index] || {},
  );
  const changePageChild = (schema) => {
    dispatch(getChangePageChildAction(index, schema));
  };
  const removePageChild = () => {
    dispatch(getDeletePageChildAction(index));
  };

  return { pageChild, changePageChild, removePageChild };
};

const AreaItem = (props) => {
  const { value: index } = props;
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

  const handleSelectorChange = (value) => {
    setTempPageChild({
      name: value,
      attributes: {},
      children: [],
    });
  };

  const changeTempPageChildAttributes = (obj) => {
    const newTempChild = { ...tempPageChild };
    for (let key in obj) {
      newTempChild.attributes[key] = obj[key];
    }
    setTempPageChild(newTempChild);
  };

  const changeTempPageChildren = (children) => {
    const newTempChild = { ...tempPageChild };
    newTempChild.children = children;
    setTempPageChild(newTempChild);
  };

  const getComponent = () => {
    const { name } = tempPageChild;
    const Component = mapping[name];
    return Component ? (
      <Component
        {...tempPageChild}
        changeAttributes={changeTempPageChildAttributes}
        changeChildren={changeTempPageChildren}
      />
    ) : null;
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
