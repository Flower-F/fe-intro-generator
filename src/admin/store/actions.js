import {
  ADD_PAGE_CHILDREN,
  CHANGE_PAGE_CHILD,
  CHANGE_SCHEMA,
  DELETE_PAGE_CHILD,
  CHANGE_PAGE_CHILD_POSITION,
  CHANGE_PAGE_ATTRIBUTE,
} from './constants';

export const getChangeSchemaAction = (schema) => {
  return {
    type: CHANGE_SCHEMA,
    value: schema,
  };
};

export const getAddPageChildrenAction = (schema) => {
  return {
    type: ADD_PAGE_CHILDREN,
    value: {},
  };
};

export const getChangePageChildAction = (index, value) => {
  return {
    type: CHANGE_PAGE_CHILD,
    value,
    index,
  };
};

export const getDeletePageChildAction = (index) => {
  return {
    type: DELETE_PAGE_CHILD,
    index,
  };
};

export const getChangePageChildPositionAction = (oldIndex, newIndex) => {
  return {
    type: CHANGE_PAGE_CHILD_POSITION,
    oldIndex,
    newIndex,
  };
};

export const getChangePageAttributeAction = (key, value) => {
  return {
    type: CHANGE_PAGE_ATTRIBUTE,
    key,
    value,
  };
};
