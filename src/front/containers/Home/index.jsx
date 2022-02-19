import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { parseJsonByString } from '../../../common/utils';
import { mapping } from './mapping';
import { axiosInstance } from '../../../common/request';

const render = (item, index) => {
  const Component = mapping[item.name];
  return Component ? <Component key={index} schema={item} /> : null;
};

const Home = () => {
  const [pageSchema, setPageSchema] = useState({
    attributes: {},
    children: [],
  });
  const { attributes, children } = pageSchema;
  const { title = '', description = '' } = attributes;

  useEffect(() => {
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
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>{title || 'FE Intro Generator'}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children.map((item, index) => render(item, index))}
    </>
  );
};

export default Home;
