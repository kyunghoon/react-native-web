'use strict';

exports.__esModule = true;

var _UnimplementedView = require('../../modules/UnimplementedView');

var _UnimplementedView2 = _interopRequireDefault(_UnimplementedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//exports.default = _UnimplementedView2.default;

exports.default = (props) => {
  if (!props.visible)
    return null;
  else {
    return (React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: () => props.onRequestClose && props.onRequestClose() },
      React.createElement(react_native_1.View, { style: {
        flex: 1,
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#000000cc',
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
      } }, React.createElement(react_native_1.TouchableWithoutFeedback, {}, props.children))));
  }
};

module.exports = exports['default'];
