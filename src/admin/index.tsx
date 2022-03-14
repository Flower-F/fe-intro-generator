import store from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './Layout';

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root'),
);
