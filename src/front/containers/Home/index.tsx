import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Skeleton } from 'antd';
import { parseJsonByString } from '../../../common/utils';
import { axiosInstance } from '../../../common/request';
import Footer from '../../components/Footer';
import ProjectList from '../../components/ProjectList';
import Detail from '../../components/Detail';
import TechStackList from '../../components/TechStackList';
import Hero from '../../components/Hero';
import { IAllSchema } from '../../../common/types/schema';

const render = (index: number, schema: IAllSchema) => {
  switch (schema.name) {
    case 'Footer':
      return <Footer key={index} schema={schema} />;
    case 'Detail':
      return <Detail key={index} schema={schema} />;
    case 'Hero':
      return <Hero key={index} schema={schema} />;
    case 'ProjectList':
      return <ProjectList key={index} schema={schema} />;
    case 'TechStackList':
      return <TechStackList key={index} schema={schema} />;
    default:
      break;
  }
};

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  return { loading, setLoading };
};

const Home = () => {
  const [pageSchema, setPageSchema] = useState({
    attributes: { title: '', description: '' },
    children: [],
  });
  const { attributes, children } = pageSchema;
  const { title, description } = attributes;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // children.map((item, index) => render(item.name, index,item))
        children.map((item: IAllSchema, index) => render(index, item))
      )}
    </>
  );
};

export default Home;