import { useDispatch, useSelector } from 'react-redux';
import { IAllSchema, IPageSchema } from '../../common/types/schema';
import { RootState } from '../store';
import {
  getAddPageChildrenAction,
  getChangePageAttributeAction,
  getChangePageChildAction,
  getChangePageChildPositionAction,
  getChangeSchemaAction,
  getDeletePageChildAction,
  IPageAttributeKey,
} from '../store/actions';

const useStore = (index = 0) => {
  const dispatch = useDispatch();
  const schema = useSelector((state: RootState) => state.admin.schema);

  // 修改页面级别 schema
  const changeSchema = (schema: IPageSchema) => {
    dispatch(getChangeSchemaAction(schema));
  };
  // 修改页面 attributes
  const changePageAttribute = (key: IPageAttributeKey, value: string) => {
    dispatch(getChangePageAttributeAction(key, value));
  };
  // 获取二级 schema
  const children = useSelector(
    (state: RootState) => state.admin.schema?.children || [],
  );
  // 为一级 schema 添加二级 schema
  const addPageChildren = () => {
    dispatch(getAddPageChildrenAction());
  };

  // 获取具体的二级 schema
  const pageChild = useSelector(
    (state: RootState) => state.admin.schema?.children?.[index] || {},
  );
  // 修改二级 schema
  const changePageChild = (schema: IAllSchema) => {
    dispatch(getChangePageChildAction(index, schema));
  };
  // 移除二级 schema
  const removePageChild = () => {
    dispatch(getDeletePageChildAction(index));
  };
  // 拖拽排序
  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    dispatch(getChangePageChildPositionAction(oldIndex, newIndex));
  };

  return {
    schema,
    changePageAttribute,
    changeSchema,
    pageChild,
    changePageChild,
    removePageChild,
    children,
    addPageChildren,
    getChangePageChildPositionAction,
    onSortEnd,
  };
};

export default useStore;
