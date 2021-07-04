import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import ExampleComponent from './example/ExampleComponent';

const store = configureStore();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <ExampleComponent />
    </Provider>
  );
};

export default App;
