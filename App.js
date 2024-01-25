// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import Routes from './src/Navigation/route';
// import Toast from 'react-native-toast-message';
// import { Provider } from 'react-redux'
// import { Store } from './src/redux/store/store';
// const App = () => {
//   return (
//     <>
//       <Provider store={Store}>
//         <Routes />
//         <Toast />
//       </Provider>

//     </>

//   );
// };

// export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: 'white' }}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})