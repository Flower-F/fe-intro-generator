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
  const changeSchema = (schema: IPageSchema) => {
    dispatch(getChangeSchemaAction(schema));
  };
  const changePageAttribute = (key: IPageAttributeKey, value: string) => {
    dispatch(getChangePageAttributeAction(key, value));
  };

  const children = useSelector(
    (state: RootState) => state.admin.schema?.children || [],
  );
  const addPageChildren = () => {
    dispatch(getAddPageChildrenAction());
  };

  const pageChild = useSelector(
    (state: RootState) => state.admin.schema?.children?.[index] || {},
  );

  const changePageChild = (schema: IAllSchema) => {
    dispatch(getChangePageChildAction(index, schema));
  };

  const removePageChild = () => {
    dispatch(getDeletePageChildAction(index));
  };

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
