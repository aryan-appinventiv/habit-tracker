import React from 'react';
import RootNavigator from './src/navigators';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Toast from 'react-native-toast-message';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <RootNavigator />
      <Toast />
    </Provider>  
  );
};

export default App;
