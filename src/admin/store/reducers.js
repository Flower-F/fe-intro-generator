import { produce, original } from 'immer';
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
  attributes: {},
  children: [],
};

const defaultState = {
  schema: initialSchema,
};

const reducer = (state = defaultState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_SCHEMA:
        draft.schema = action.value;
        break;
      case ADD_PAGE_CHILDREN:
        draft.schema.children.push(action.value);
        break;
      case CHANGE_PAGE_CHILD:
        draft.schema.children.splice(action.index, 1, action.value);
        break;
      case DELETE_PAGE_CHILD:
        draft.schema.children.splice(action.index, 1);
        break;
      case CHANGE_PAGE_CHILD_POSITION:
        // 这里不可以直接删除，要先拷贝一份数据，否则会出错
        const copy = original(draft.schema.children);
        //  把这一项删除
        draft.schema.children.splice(action.oldIndex, 1);
        // 把删掉的加回去
        draft.schema.children.splice(action.newIndex, 0, copy[action.oldIndex]);
        break;
      case CHANGE_PAGE_ATTRIBUTE:
        if (
          action.key !== undefined &&
          action.key !== null &&
          action.key !== ''
        ) {
          draft.schema.attributes[action.key] = action.value;
        }
        break;
      default:
        break;
    }
  });

export default reducer;
