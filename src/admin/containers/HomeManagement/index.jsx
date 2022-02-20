import { useState } from 'react';
import { Button, Modal } from 'antd';
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

const useLoadingSave = () => {
  const [loadingSave, setLoadingSave] = useState(false);
  return { loadingSave, setLoadingSave };
};

const useLoadingReset = () => {
  const [loadingReset, setLoadingReset] = useState(false);
  return { loadingReset, setLoadingReset };
};

const HomeManagement = () => {
  const { schema, changeSchema } = useStore();
  const { loadingSave, setLoadingSave } = useLoadingSave();
  const { loadingReset, setLoadingReset } = useLoadingReset();

  const handleSaveButtonClick = () => {
    setLoadingSave(true);
    axiosInstance
      .post('/save', {
        schema: JSON.stringify(schema),
      })
      .then((res) => {
        const data = res?.data;
        if (data?.code !== 200) {
          Modal.warning({
            title: 'Warning',
            content: data?.message || '',
          });
        }
        if (data?.code === 200) {
          Modal.success({
            title: 'Success',
            content: '保存成功',
          });
        }
        setLoadingSave(false);
      })
      .catch(() => {
        setLoadingSave(false);
      });
  };

  const handleResetButtonClick = () => {
    setLoadingReset(true);
    axiosInstance
      .get('/getLatestOne')
      .then((res) => {
        const data = res?.data;
        if (data) {
          changeSchema(parseJsonByString(data.schema));
        }
        setLoadingReset(false);
      })
      .catch(() => {
        setLoadingReset(false);
      });
  };

  return (
    <>
      <AreaList />
      <div className={styles.buttons}>
        <Button
          type="primary"
          onClick={handleSaveButtonClick}
          loading={loadingSave}
        >
          保存区块配置
        </Button>
        <Button
          type="primary"
          onClick={handleResetButtonClick}
          className={styles.reset}
          loading={loadingReset}
          disabled={loadingSave}
        >
          返回上次保存配置
        </Button>
      </div>
    </>
  );
};

export default HomeManagement;
