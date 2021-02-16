'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UsersList = require('../components/UsersList');

var _UsersList2 = _interopRequireDefault(_UsersList);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/divakarshetty/Desktop/sapient-test/next-apollo-demo/client/components/Users.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query name {\n    loadedUsers\n  }\n'], ['\n  query name {\n    loadedUsers\n  }\n']);

var Users = function Users(data) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      loadedUsers = _useState4[0],
      setLoadedUsers = _useState4[1];

  var _useState5 = (0, _react.useState)(5),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      initialCount = _useState6[0],
      setInitialCount = _useState6[1];

  var tableBody = [];

  (0, _react.useEffect)(function () {
    var sendRequest = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, responseData, partNumber;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setIsLoading(true);
                _context.prev = 1;
                _context.next = 4;
                return _superagent2.default.get('https://randomuser.me/api/?results=100');

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.body.results;

              case 7:
                responseData = _context.sent;

                setInitialCount(responseData);
                partNumber = 5;

                if (response.ok) {
                  _context.next = 12;
                  break;
                }

                throw new Error(responseData.message);

              case 12:
                tableBody = responseData.slice(0, partNumber);
                setLoadedUsers(tableBody);
                setIsLoading(false);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](1);

                setError(_context.t0.message);

              case 20:
                setIsLoading(false);

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 17]]);
      }));

      return function sendRequest() {
        return _ref.apply(this, arguments);
      };
    }();
    sendRequest();
  }, []);

  (0, _react.useEffect)(function () {}, []);

  var seeMoreShowControl = function seeMoreShowControl() {
    setTimeout(function () {
      if (initialCount.length > loadedUsers.length) {
        var val = loadedUsers.length + 20;
        var _data = initialCount.slice(0, val);
        setLoadedUsers(_data);
      } else {}
    }, 100);
  };

  return _react2.default.createElement(_react2.default.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, !isLoading && loadedUsers && _react2.default.createElement(_UsersList2.default, { items: loadedUsers, __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement('button', { onClick: seeMoreShowControl, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, 'Load More'));
};

var query = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(query)(Users);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwibGF6eSIsIlVzZXJzTGlzdCIsImdyYXBocWwiLCJncWwiLCJyZXF1ZXN0IiwiVXNlcnMiLCJkYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibG9hZGVkVXNlcnMiLCJzZXRMb2FkZWRVc2VycyIsImluaXRpYWxDb3VudCIsInNldEluaXRpYWxDb3VudCIsInRhYmxlQm9keSIsInNlbmRSZXF1ZXN0IiwiZ2V0IiwicmVzcG9uc2UiLCJib2R5IiwicmVzdWx0cyIsInJlc3BvbnNlRGF0YSIsInBhcnROdW1iZXIiLCJvayIsIkVycm9yIiwibWVzc2FnZSIsInNsaWNlIiwic2V0RXJyb3IiLCJzZWVNb3JlU2hvd0NvbnRyb2wiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwidmFsIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU8sQUFBUyxBQUFVLEFBQVU7Ozs7QUFFM0MsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7O0FBR1AsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsTUFBUztrQkFDUyxxQkFEVCxBQUNTLEFBQVM7MkRBRGxCO01BQUEsQUFDZix1QkFEZTtNQUFBLEFBQ0wsMEJBREs7O21CQUFBLEFBRWE7NERBRmI7TUFBQSxBQUVmLHlCQUZlO01BQUEsQUFFSCw0QkFGRzs7bUJBR2UscUJBSGYsQUFHZSxBQUFTOzREQUh4QjtNQUFBLEFBR2YsMEJBSGU7TUFBQSxBQUdGLDZCQUNwQjs7TUFBSSxZQUFKLEFBQWMsQUFFYjs7d0JBQVUsWUFBSSxBQUNaO1FBQU0sMEJBQUE7MEZBQWMsbUJBQUE7b0NBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ2xCOzZCQURrQixBQUNsQixBQUFhO2dDQURLO2dDQUFBO3VCQUdHLHFCQUFBLEFBQVEsSUFIWDs7bUJBR2I7QUFIYSxvQ0FBQTtnQ0FBQTt1QkFJUSxTQUFBLEFBQVMsS0FKakIsQUFJc0I7O21CQUFuQztBQUphLHdDQUtuQjs7Z0NBQUEsQUFBZ0IsQUFDWjtBQU5lLDZCQUFBLEFBTUg7O29CQUNaLFNBUGUsQUFPTixJQVBNO2tDQUFBO0FBQUE7QUFBQTs7c0JBUVgsSUFBQSxBQUFJLE1BQU0sYUFSQyxBQVFYLEFBQXVCOzttQkFFL0I7NEJBQVUsYUFBQSxBQUFhLE1BQWIsQUFBbUIsR0FBN0IsQUFBVSxBQUFzQixBQUNoQzsrQkFBQSxBQUFlLEFBQ2Y7NkJBWm1CLEFBWW5CLEFBQWE7Z0NBWk07QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBY25COzt5QkFBUyxZQWRVLEFBY25CLEFBQWE7O21CQUVmOzZCQWhCcUIsQUFnQnJCLEFBQWE7O21CQWhCUTttQkFBQTtnQ0FBQTs7QUFBQTtnQ0FBQTtBQUFkOztvQ0FBQTtnQ0FBQTtBQUFBO0FBQU4sQUFrQkg7QUFDRDtBQXBCRSxLQUFBLEFBb0JELEFBR0Y7O3dCQUFVLFlBQU0sQUFDZixDQURELEdBQUEsQUFDRyxBQUdIOztNQUFNLHFCQUFtQixTQUFuQixBQUFtQixxQkFBSyxBQUM1QjtlQUFXLFlBQVksQUFDckI7VUFBSSxhQUFBLEFBQWEsU0FBUyxZQUExQixBQUFzQyxRQUFRLEFBQzVDO1lBQUksTUFBSyxZQUFBLEFBQVksU0FBckIsQUFBNEIsQUFDNUI7WUFBSSxRQUFNLGFBQUEsQUFBYSxNQUFiLEFBQW1CLEdBQTdCLEFBQVUsQUFBc0IsQUFDaEM7dUJBQUEsQUFBZSxBQUNoQjtBQUpELGFBSU8sQUFDTixDQUNGO0FBUEQsT0FBQSxBQU9HLEFBQ0o7QUFURCxBQVdFOzt5QkFDRyxjQUFELGdCQUFBLEFBQU87O2dCQUFQO2tCQUFBLEFBQWlCO0FBQWpCO0FBQUEsR0FBQSxHQUFpQixBQUFDLGFBQUQsQUFBYywrQkFBZSxBQUFDLHFDQUFVLE9BQVgsQUFBa0I7Z0JBQWxCO2tCQUE5QyxBQUE4QyxBQUM5QztBQUQ4QztHQUFBLG1CQUM5QyxjQUFBLFlBQVEsU0FBUixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQUZGLEFBQ0UsQUFDQSxBQUdIO0FBakREOztBQW1EQSxJQUFNLFFBQUEsQUFBUSwwQkFBZCxBQU1BOztrQkFBZSwwQkFBQSxBQUFRLE9BQXZCLEFBQWUsQUFBZSIsImZpbGUiOiJVc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGl2YWthcnNoZXR0eS9EZXNrdG9wL3NhcGllbnQtdGVzdC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9