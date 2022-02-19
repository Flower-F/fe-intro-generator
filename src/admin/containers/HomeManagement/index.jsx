import { Button } from 'antd';
import styles from './style.module.scss';
import AreaList from '../../components/AreaList';
import { parseJsonByString } from '../../../common/utils';
import { useSelector, useDispatch } from 'react-redux';
import { getChangeSchemaAction } from '../../store/actions';

const useStore = () => {
  const dispatch = useDispatch();
  const schema = useSelector((state) => state.admin.schema);
  const changeSchema = (schema) => {
    dispatch(getChangeSchemaAction(schema));
  };
  return { changeSchema, schema };
};

const HomeManagement = () => {
  const { schema, changeSchema } = useStore();

  // 最外层 schema 生成
  const handleSaveButtonClick = () => {
    // localStorage.schema = JSON.stringify(schema);
    // axiosInstance
    //   .post("/api/schema/save", {
    //     schema: JSON.stringify(schema),
    //   })
    //   .then(() => {});

    localStorage.schema = JSON.stringify(schema);
  };

  const handleResetButtonClick = () => {
    // axiosInstance.get('/api/schema/getLatestOne').then((res) => {
    //   const data = res?.data?.data;
    //   if (data) {
    //     changeSchema(parseJsonByString(data.schema));
    //   }
    // });
    const schema = localStorage.schema;
    if (schema) {
      changeSchema(parseJsonByString(schema));
    }
  };

  return (
    <>
      <AreaList />
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

export default HomeManagement;
