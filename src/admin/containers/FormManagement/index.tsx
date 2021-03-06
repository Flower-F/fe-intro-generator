import { Divider, message, Spin, Card } from 'antd';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../common/request';

const FormManagement = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<{ [x: string]: string }[]>([]);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .post('/getContent', {
        id: localStorage.getItem('id'),
      })
      .then((res) => {
        const data = res?.data;
        if (data && data.code === 200) {
          // console.log(data.content);
          setContent(data.content);
        }
      })
      .catch(() => {
        message.error('网络错误');
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Spin
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        />
      ) : (
        <>
          <Divider orientation="center">表单数据</Divider>
          <div>
            {content.map((item, index) => (
              <Card hoverable style={{ marginBottom: 10 }} key={index}>
                {Object.keys(item).map(
                  (key, index) =>
                    item[key] && (
                      <p key={index}>
                        {key}：{item[key]}
                      </p>
                    ),
                )}
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FormManagement;
