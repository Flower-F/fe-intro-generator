import {
  ADD_PAGE_CHILDREN,
  CHANGE_PAGE_CHILD,
  CHANGE_SCHEMA,
  DELETE_PAGE_CHILD,
  CHANGE_PAGE_CHILD_POSITION,
  CHANGE_PAGE_ATTRIBUTE,
} from './constants';

// 修改最外层 schema
export const getChangeSchemaAction = (schema) => {
  return {
    type: CHANGE_SCHEMA,
    value: schema,
  };
};

// 为最外层 schema 添加一个新节点
export const getAddPageChildrenAction = () => {
  return {
    type: ADD_PAGE_CHILDREN,
    value: {},
  };
};

// 修改页面第一层的子节点
export const getChangePageChildAction = (index, value) => {
  return {
    type: CHANGE_PAGE_CHILD,
    value,
    index,
  };
};

// 删除最外层 schema 的子节点
export const getDeletePageChildAction = (index) => {
  return {
    type: DELETE_PAGE_CHILD,
    index,
  };
};

// 拖拽排序
export const getChangePageChildPositionAction = (oldIndex, newIndex) => {
  return {
    type: CHANGE_PAGE_CHILD_POSITION,
    oldIndex,
    newIndex,
  };
};

// 修改最外层 schema 的 seo 属性
export const getChangePageAttributeAction = (key, value) => {
  return {
    type: CHANGE_PAGE_ATTRIBUTE,
    key,
    value,
  };
};
