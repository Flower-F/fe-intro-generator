import { IAllSchema, IPageSchema } from '../../common/types/schema';
import {
  ADD_PAGE_CHILDREN,
  CHANGE_PAGE_CHILD,
  CHANGE_SCHEMA,
  DELETE_PAGE_CHILD,
  CHANGE_PAGE_CHILD_POSITION,
  CHANGE_PAGE_ATTRIBUTE,
} from './constants';

// 修改最外层 schema
export const getChangeSchemaAction = (schema: IPageSchema) => {
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
export const getChangePageChildAction = (index: number, value: IAllSchema) => {
  return {
    type: CHANGE_PAGE_CHILD,
    value,
    index,
  };
};

// 删除最外层 schema 的子节点
export const getDeletePageChildAction = (index: number) => {
  return {
    type: DELETE_PAGE_CHILD,
    index,
  };
};

// 拖拽排序
export const getChangePageChildPositionAction = (
  oldIndex: number,
  newIndex: number,
) => {
  return {
    type: CHANGE_PAGE_CHILD_POSITION,
    oldIndex,
    newIndex,
  };
};

export type IPageAttributeKey = 'title' | 'description';

// 修改最外层 schema 的 seo 属性
export const getChangePageAttributeAction = (
  key: IPageAttributeKey,
  value: string,
) => {
  return {
    type: CHANGE_PAGE_ATTRIBUTE,
    key,
    value,
  };
};
