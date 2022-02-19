import { Button } from 'antd';
import styles from './style.module.scss';
import AreaList from '../../components/AreaList';
import { parseJsonByString } from '../../../common/utils';
import { useSelector, useDispatch } from 'react-redux';
import { getChangeSchemaAction } from '../../store/actions';
import { axiosInstance } from '../../../common/request';

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

  const handleSaveButtonClick = () => {
    axiosInstance
      .post('/save', {
        schema: JSON.stringify(schema),
      })
      .then(() => {})
      .catch(() => {});
  };

  const handleResetButtonClick = () => {
    axiosInstance
      .get('/getLatestOne')
      .then((res) => {
        const data = res?.data;
        if (data) {
          changeSchema(parseJsonByString(data.schema));
        }
      })
      .catch(() => {});
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
