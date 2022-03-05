import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Skeleton, Spin } from 'antd';
import { parseJsonByString } from '../../../common/utils';
import { mapping } from './mapping';
import { axiosInstance } from '../../../common/request';

const render = (item, index) => {
  const Component = mapping[item.name];
  return Component ? <Component key={index} schema={item} /> : null;
};

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  return { loading, setLoading };
};

const Home = () => {
  const [pageSchema, setPageSchema] = useState({
    attributes: {},
    children: [],
  });
  const { attributes, children } = pageSchema;
  const { title = '', description = '' } = attributes;
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get('/getLatestOne')
      .then((res) => {
        const data = res?.data;
        if (data) {
          // console.log(data.schema);
          setPageSchema(parseJsonByString(data.schema));
        }
      })
      .catch(() => {
        // console.log('err', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{title || 'FE Intro Generator'}</title>
        <meta name="description" content={description} />
      </Helmet>
      {loading ? (
        <>
          <div
            className="wrapper"
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              marginTop: 10,
              maxHeight: '100vh',
            }}
          >
            <Skeleton.Button
              active
              size="large"
              shape="square"
              block
              style={{ marginTop: 20 }}
            />
            {[1, 1, 1, 1].map((_, index) => (
              <Skeleton key={index} active />
            ))}
          </div>
        </>
      ) : (
        children.map((item, index) => render(item, index))
      )}
    </>
  );
};

export default Home;
