import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from './app/redux/configStore';
import CalculatorScreen from './app/modules/Calculator/CalculatorScreen';
import AppStyles from './app/themes/AppStyles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <ScrollView>
        <SafeAreaView style={AppStyles.appContainer}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <CalculatorScreen />
          {console.log('hello first commit')}
          {console.log('hello second commit')}
          {console.log('hello third commit')}
        </SafeAreaView>
      </ScrollView>
    </Provider>
  );
};
export default App;
