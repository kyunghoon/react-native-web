import createElement from '../createElement';
import View from '../View';
import TouchableWithoutFeedback from '../TouchableWithoutFeedback';

export default (props) => {
  if (!props.visible)
    return null;
  else {
    return (createElement(TouchableWithoutFeedback, {
      onPress: () => props.onRequestClose && props.onRequestClose() },
      createElement(View, { style: {
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#000000cc',
        justifyContent: 'center',
        alignItems: 'center',
      } }, createElement(TouchableWithoutFeedback, {}, props.children))));
  }
};
