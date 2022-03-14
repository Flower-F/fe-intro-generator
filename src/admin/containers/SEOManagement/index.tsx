import { ChangeEvent, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { parseJsonByString } from '../../../common/utils';
import { axiosInstance } from '../../../common/request';
import styles from './style.module.scss';
import useStore from '../../hooks/useStore';

const SEOManagement = () => {
  const { schema, changePageAttribute, changeSchema } = useStore();
  const { attributes } = schema;
  const { title = '', description = '' } = attributes;
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingReset, setLoadingReset] = useState(false);

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
      <div className={styles.row}>
        <div className={styles.title}>页面标题：</div>
        <div className={styles.content}>
          <Input
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              changePageAttribute('title', e.target.value);
            }}
            placeholder="请输入页面标题（尽量简洁）"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>页面描述：</div>
        <div className={styles.content}>
          <Input
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              changePageAttribute('description', e.target.value);
            }}
            placeholder="请输入页面描述（尽量简洁）"
          />
        </div>
      </div>
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

export default SEOManagement;
