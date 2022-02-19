import { useState } from 'react';
import { parseJsonByString } from '../../../common/utils';
import { mapping } from './mapping';

const render = (item, index) => {
  const Component = mapping[item.name];
  return Component ? <Component key={index} schema={item} /> : null;
};

const Home = () => {
  // const [pageSchema, setPageSchema] = useState({ attributes: {}, list: [] });
  // const { attributes, list } = pageSchema;
  const [pageSchema] = useState(
    parseJsonByString(localStorage.schema, { attributes: {}, list: [] }),
  );
  const { children } = pageSchema;

  return <>{children.map((item, index) => render(item, index))}</>;
};

export default Home;
