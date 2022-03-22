import { useState } from 'react';
import { Button, message, Modal } from 'antd';
import AreaList from '../../components/AreaList';
import { parseJsonByString } from '../../../common/utils';
import { axiosInstance } from '../../../common/request';
import useStore from '../../hooks/useStore';
import styles from './style.module.scss';

const HomeManagement = () => {
  const { schema, changeSchema } = useStore();
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);

  const handleSaveButtonClick = () => {
    setLoadingSave(true);
    axiosInstance
      .post('/save', {
        schema: JSON.stringify(schema),
        id: localStorage.getItem('id'),
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
      })
      .catch(() => {})
      .finally(() => {
        setLoadingSave(false);
      });
  };

  const handleResetButtonClick = () => {
    setLoadingReset(true);
    axiosInstance
      .get('/getLatestOne', {
        params: {
          id: localStorage.getItem('id'),
        },
      })
      .then((res) => {
        const data = res?.data;
        if (data && data.code === 200) {
          changeSchema(parseJsonByString(data.schema));
        }
      })
      .catch(() => {
        message.error('网络错误');
      })
      .finally(() => {
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
          保存组件配置
        </Button>
        <Button
          type="primary"
          onClick={handleResetButtonClick}
          className={styles.reset}
          loading={loadingReset}
          disabled={loadingSave}
        >
          恢复最新配置
        </Button>
      </div>
    </>
  );
};

export default HomeManagement;
