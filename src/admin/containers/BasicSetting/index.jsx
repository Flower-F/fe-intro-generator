import { useCallback } from 'react';
import { Button, Input } from 'antd';
import { parseJsonByString } from '../../../common/utils';
import { useSelector, useDispatch } from 'react-redux';
import {
  getChangeSchemaAction,
  getChangePageAttributeAction,
} from '../../store/actions';
import styles from './style.module.scss';

const useStore = () => {
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.admin.schema);
  const changeSchema = (schema) => {
    dispatch(getChangeSchemaAction(schema));
  };
  const changePageAttribute = (key, value) => {
    dispatch(getChangePageAttributeAction(key, value));
  };
  return { schema, changePageAttribute, changeSchema };
};

const BasicSetting = () => {
  const { schema = {}, changePageAttribute, changeSchema } = useStore();
  const { attributes = {} } = schema;
  const { title = '' } = attributes;

  // 最外层 schema 生成
  const handleSaveButtonClick = () => {
    console.log(schema);
    // localStorage.schema = JSON.stringify(schema);
  };

  const handleResetButtonClick = () => {
    // axiosInstance.get('/api/schema/getLatestOne').then((res) => {
    //   const data = res?.data;
    //   if (data) {
    //     changeSchema(parseJsonByString(data.schema));
    //   }
    // });
    const schema = localStorage.schema;
    changeSchema(parseJsonByString(schema));
  };

  const handleTitleChange = useCallback(
    (e) => {
      changePageAttribute('title', e.target.value);
    },
    [changePageAttribute],
  );

  return (
    <>
      <div className={styles.row}>
        <div className={styles.title}>页面标题：</div>
        <div className={styles.content}>
          <Input value={title} onChange={handleTitleChange} />
        </div>
      </div>

      <div className={styles.buttons}>
        <Button type="primary" onClick={handleSaveButtonClick}>
          保存区块配置
        </Button>
        <Button
          type="primary"
          onClick={handleResetButtonClick}
          className={styles.reset}
        >
          返回上次保存配置
        </Button>
      </div>
    </>
  );
};

export default BasicSetting;
