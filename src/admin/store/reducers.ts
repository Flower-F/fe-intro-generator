import { produce, original } from 'immer';
import { AnyAction } from 'redux';
import { IAllSchema, IPageSchema } from '../../common/types/schema';
import { IPageAttributeKey } from './actions';
import {
  CHANGE_SCHEMA,
  ADD_PAGE_CHILDREN,
  CHANGE_PAGE_CHILD,
  DELETE_PAGE_CHILD,
  CHANGE_PAGE_CHILD_POSITION,
  CHANGE_PAGE_ATTRIBUTE,
} from './constants';

const initialSchema = {
  name: 'Page',
  attributes: {
    description: '',
    title: '',
  },
  children: [],
};

export interface IPageSchemaState {
  schema: {
    name: string;
    attributes: {
      description: string;
      title: string;
    };
    children: IAllSchema[];
  };
}

const defaultState = {
  schema: initialSchema,
};

export const reducer = (state = defaultState, action: AnyAction) =>
  produce(state, (draft: { schema: IPageSchema }) => {
    switch (action.type) {
      case CHANGE_SCHEMA:
        draft.schema = action.value as IPageSchema;
        break;
      case ADD_PAGE_CHILDREN:
        draft.schema.children.push(action.value);
        break;
      case CHANGE_PAGE_CHILD:
        draft.schema.children.splice(
          action.index,
          1,
          action.value as IAllSchema,
        );
        break;
      case DELETE_PAGE_CHILD:
        draft.schema.children.splice(action.index, 1);
        break;
      case CHANGE_PAGE_CHILD_POSITION:
        // immer 原理：
        // https://juejin.cn/post/6926099651510665230

        // original(draft) -> Proxy 类型
        // const schema = original(draft);
        // schema.children.splice(action.oldIndex, 1);

        // 这里不可以直接删除，要先拷贝一份数据
        const copy = original(draft.schema.children as IAllSchema[]);
        //  把这一项删除
        draft.schema.children.splice(action.oldIndex, 1);
        // 把删掉的加回去
        copy &&
          draft.schema.children.splice(
            action.newIndex,
            0,
            copy[action.oldIndex],
          );
        break;
      case CHANGE_PAGE_ATTRIBUTE:
        if (
          action.key !== undefined &&
          action.key !== null &&
          action.key !== ''
        ) {
          draft.schema.attributes[action.key as IPageAttributeKey] =
            action.value;
        }
        break;
      default:
        break;
    }
  });
