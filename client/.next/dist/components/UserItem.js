'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/divakarshetty/Desktop/sapient-test/next-apollo-demo/client/components/UserItem.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query name {\n    name\n  }\n'], ['\n  query name {\n    name\n  }\n']);
//import './UserItem.css';


var UserItem = function UserItem(data) {

  return _react2.default.createElement('li', { style: { listStyle: 'none' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('div', { style: { boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2', transition: '0.3s', padding: '2rem', width: '20rem', margin: '1rem' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('img', {
    style: { borderRadius: '50%', height: '72px', marginRight: '20px', width: '72px' },
    alt: data.name,
    src: data.photo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, data.name), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, data.email), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, data.phoneNumber), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, data.address))));
};

var query = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(query)(UserItem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlckl0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJncmFwaHFsIiwiZ3FsIiwiTGluayIsIlVzZXJJdGVtIiwibGlzdFN0eWxlIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiZGF0YSIsIm5hbWUiLCJwaG90byIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBRVAsQUFBTzs7Ozs7Ozs7O0FBRFA7OztBQUdBLElBQU0sV0FBVyxTQUFYLEFBQVcsZUFBUSxBQUV2Qjs7eUJBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBQyxXQUFaLEFBQVcsQUFBWTtnQkFBdkI7a0JBQUEsQUFFSTtBQUZKO0dBQUEsa0JBRUksY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxXQUFGLEFBQWEsOEJBQTZCLFlBQTFDLEFBQXNELFFBQU8sU0FBN0QsQUFBc0UsUUFBUSxPQUE5RSxBQUFxRixTQUFRLFFBQXpHLEFBQVksQUFBcUc7Z0JBQWpIO2tCQUFBLEFBQ0E7QUFEQTs7V0FFYSxFQUFDLGNBQUQsQUFBZSxPQUFNLFFBQXJCLEFBQTZCLFFBQVEsYUFBckMsQUFBa0QsUUFBUSxPQUR2RSxBQUNhLEFBQWlFLEFBQ3hFO1NBQUssS0FGWCxBQUVnQixBQUNWO1NBQUssS0FIWCxBQUdnQjs7Z0JBSGhCO2tCQURBLEFBQ0EsQUFLRTtBQUxGO0FBQ00sc0JBSUosY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEsVUFORixBQU1FLEFBQVcsQUFDWCx1QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFNO0FBQU47QUFBQSxVQVBGLEFBT0UsQUFBVyxBQUNYLHdCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQU07QUFBTjtBQUFBLFVBUkYsQUFRRSxBQUFXLEFBQ1gsOEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTTtBQUFOO0FBQUEsVUFiVixBQUNFLEFBRUksQUFDRSxBQVNFLEFBQVcsQUFPdEI7QUF0QkQ7O0FBd0JBLElBQU0sUUFBQSxBQUFRLDBCQUFkLEFBTUE7O2tCQUFlLDBCQUFBLEFBQVEsT0FBdkIsQUFBZSxBQUFlIiwiZmlsZSI6IlVzZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaXZha2Fyc2hldHR5L0Rlc2t0b3Avc2FwaWVudC10ZXN0L25leHQtYXBvbGxvLWRlbW8vY2xpZW50In0=