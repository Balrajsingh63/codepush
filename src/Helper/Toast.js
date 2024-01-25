import Toast from 'react-native-toast-message';

export const showSuccess = (success) => {
  Toast.show({
    type: 'success',
    text1: success,
    visibilityTime: 2000,
    autoHide: true,
  });
};

export const showError = (error) => {
  Toast.show({
    type: 'error',
    text1: error,
    visibilityTime: 2000,
    autoHide: true,
  });
};
