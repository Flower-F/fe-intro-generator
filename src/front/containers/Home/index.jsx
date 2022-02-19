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
  const [pageSchema, setPageSchema] = useState(
    parseJsonByString(localStorage.schema, { attributes: {}, list: [] }),
  );
  const { list, attributes } = pageSchema;

  return <>{list.map((item, index) => render(item, index))}</>;
};

export default Home;
