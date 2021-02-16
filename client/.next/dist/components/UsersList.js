'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UserItem = require('./UserItem');

var _UserItem2 = _interopRequireDefault(_UserItem);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/divakarshetty/Desktop/sapient-test/next-apollo-demo/client/components/UsersList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query name {\n    items\n  }\n'], ['\n  query name {\n    items\n  }\n']);

var UsersList = function UsersList(data) {
  if (data.items.length === 0) {
    return _react2.default.createElement('div', { className: 'center', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement('h2', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, 'No users found.'));
  }

  return _react2.default.createElement('ul', { className: 'users-list', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, data.items.map(function (user) {
    return _react2.default.createElement(_UserItem2.default, {
      key: user.login.uuid,
      id: user.id.value,
      name: user.login.username,
      photo: user.picture.medium,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.location.country,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    });
  }));
};

var query = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(query)(UsersList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlckl0ZW0iLCJncmFwaHFsIiwiZ3FsIiwiVXNlcnNMaXN0IiwiZGF0YSIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwidXNlciIsImxvZ2luIiwidXVpZCIsImlkIiwidmFsdWUiLCJ1c2VybmFtZSIsInBpY3R1cmUiLCJtZWRpdW0iLCJlbWFpbCIsInBob25lTnVtYmVyIiwibG9jYXRpb24iLCJjb3VudHJ5IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7OztBQUdQLElBQU0sWUFBWSxTQUFaLEFBQVksZ0JBQVEsQUFDeEI7TUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQWYsQUFBMEIsR0FBRyxBQUMzQjsyQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2tCQUFmO29CQUFBLEFBRUk7QUFGSjtLQUFBLGtCQUVJLGNBQUE7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQUhOLEFBQ0UsQUFFSSxBQUlQO0FBRUQ7O3lCQUVFLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDRztBQURIO0dBQUEsT0FDRyxBQUFLLE1BQUwsQUFBVyxJQUFJLGdCQUFBOzJCQUNkLEFBQUM7V0FDTSxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNoQjtVQUFJLEtBQUEsQUFBSyxHQUZYLEFBRWMsQUFDWjtZQUFNLEtBQUEsQUFBSyxNQUhiLEFBR21CLEFBQ2pCO2FBQU8sS0FBQSxBQUFLLFFBSmQsQUFJc0IsQUFDcEI7YUFBTyxLQUxULEFBS2MsQUFDWjttQkFBYSxLQU5mLEFBTW9CLEFBQ2xCO2VBQVMsS0FBQSxBQUFLLFNBUGhCLEFBT3lCOztrQkFQekI7b0JBRGMsQUFDZDtBQUFBO0FBQ0UsS0FERjtBQUpOLEFBRUUsQUFDRyxBQWFOO0FBM0JEOztBQTZCQSxJQUFNLFFBQUEsQUFBUSwwQkFBZCxBQU1BOztrQkFBZSwwQkFBQSxBQUFRLE9BQXZCLEFBQWUsQUFBZSIsImZpbGUiOiJVc2Vyc0xpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RpdmFrYXJzaGV0dHkvRGVza3RvcC9zYXBpZW50LXRlc3QvbmV4dC1hcG9sbG8tZGVtby9jbGllbnQifQ==