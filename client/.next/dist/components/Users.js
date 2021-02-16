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
      initialLoad = _useState4[0],
      setInitialload = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      loadedUsers = _useState6[0],
      setLoadedUsers = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
      initialCount = _useState8[0],
      setInitialCount = _useState8[1];

  var tableBody = [];
  var totalData = [];

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
                console.log(responseData);
                partNumber = 5;

                if (response.ok) {
                  _context.next = 13;
                  break;
                }

                throw new Error(responseData.message);

              case 13:
                tableBody = responseData.slice(0, partNumber);
                setInitialload(tableBody);
                setLoadedUsers(tableBody);
                setIsLoading(false);
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](1);

                setError(_context.t0.message);

              case 22:
                setIsLoading(false);

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 19]]);
      }));

      return function sendRequest() {
        return _ref.apply(this, arguments);
      };
    }();
    sendRequest();
  }, []);

  (0, _react.useEffect)(function () {
    // setInitialCount((prevCount) => prevCount + 1);
  }, []);

  // const handleShowMorePosts = () => {
  //   debugger;
  //   setInitialCount((prevCount) => prevCount + 1);
  // };


  var seeMoreShowControl = function seeMoreShowControl() {
    debugger;
    setTimeout(function () {
      if (initialCount.length > initialLoad.length) {
        var val = initialLoad.length + 20;
        var _data = initialCount.slice(0, val);
        setLoadedUsers(_data);
        // that.setState({
        //   showMoreButton: "d-b"
        // })
      } else {
          // that.setState({
          //   showMoreButton: "d-n"
          // })
        }
    }, 100);
  };
  // seeMore() {
  //   that.setState({
  //     partNumber: that.state.partNumber + 10,
  //   });
  //   setTimeout(function () {
  //     that.setState({
  //       tableBody: that.state.searchDataSet.slice(0, that.state.partNumber)
  //     })
  //   }, 100);
  //   that.seeMoreShowControl();
  // }

  return _react2.default.createElement(_react2.default.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, !isLoading && loadedUsers && _react2.default.createElement(_UsersList2.default, { items: loadedUsers, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }), _react2.default.createElement('button', { onClick: seeMoreShowControl, __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, 'Load More'));
};

var query = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(query)(Users);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1c3BlbnNlIiwibGF6eSIsIlVzZXJzTGlzdCIsImdyYXBocWwiLCJncWwiLCJyZXF1ZXN0IiwiVXNlcnMiLCJkYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaW5pdGlhbExvYWQiLCJzZXRJbml0aWFsbG9hZCIsImxvYWRlZFVzZXJzIiwic2V0TG9hZGVkVXNlcnMiLCJpbml0aWFsQ291bnQiLCJzZXRJbml0aWFsQ291bnQiLCJ0YWJsZUJvZHkiLCJ0b3RhbERhdGEiLCJzZW5kUmVxdWVzdCIsImdldCIsInJlc3BvbnNlIiwiYm9keSIsInJlc3VsdHMiLCJyZXNwb25zZURhdGEiLCJjb25zb2xlIiwibG9nIiwicGFydE51bWJlciIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwic2xpY2UiLCJzZXRFcnJvciIsInNlZU1vcmVTaG93Q29udHJvbCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJ2YWwiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTyxBQUFTLEFBQVUsQUFBVTs7OztBQUUzQyxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7Ozs7QUFHUCxJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxNQUFTO2tCQUNTLHFCQURULEFBQ1MsQUFBUzsyREFEbEI7TUFBQSxBQUNmLHVCQURlO01BQUEsQUFDTCwwQkFESzs7bUJBQUEsQUFFYTs0REFGYjtNQUFBLEFBRWYseUJBRmU7TUFBQSxBQUVILDRCQUZHOzttQkFBQSxBQUdhOzREQUhiO01BQUEsQUFHZix5QkFIZTtNQUFBLEFBR0gsNEJBSEc7O21CQUFBLEFBSWU7NERBSmY7TUFBQSxBQUlmLDBCQUplO01BQUEsQUFJRiw2QkFDcEI7O01BQUksWUFBSixBQUFjLEFBQ2Q7TUFBSSxZQUFKLEFBQWMsQUFHYjs7d0JBQVUsWUFBSSxBQUNaO1FBQU0sMEJBQUE7MEZBQWMsbUJBQUE7b0NBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ2xCOzZCQURrQixBQUNsQixBQUFhO2dDQURLO2dDQUFBO3VCQUdHLHFCQUFBLEFBQVEsSUFIWDs7bUJBR2I7QUFIYSxvQ0FBQTtnQ0FBQTt1QkFJUSxTQUFBLEFBQVMsS0FKakIsQUFJc0I7O21CQUFuQztBQUphLHdDQUtuQjs7Z0NBQUEsQUFBZ0IsQUFDaEI7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDUjtBQVBlLDZCQUFBLEFBT0g7O29CQUNaLFNBUmUsQUFRTixJQVJNO2tDQUFBO0FBQUE7QUFBQTs7c0JBU1gsSUFBQSxBQUFJLE1BQU0sYUFUQyxBQVNYLEFBQXVCOzttQkFFL0I7NEJBQVUsYUFBQSxBQUFhLE1BQWIsQUFBbUIsR0FBN0IsQUFBVSxBQUFzQixBQUNoQzsrQkFBQSxBQUFlLEFBQ2Y7K0JBQUEsQUFBZSxBQUNmOzZCQWRtQixBQWNuQixBQUFhO2dDQWRNO0FBQUE7O21CQUFBO2dDQUFBO2dEQWdCbkI7O3lCQUFTLFlBaEJVLEFBZ0JuQixBQUFhOzttQkFFZjs2QkFsQnFCLEFBa0JyQixBQUFhOzttQkFsQlE7bUJBQUE7Z0NBQUE7O0FBQUE7Z0NBQUE7QUFBZDs7b0NBQUE7Z0NBQUE7QUFBQTtBQUFOLEFBb0JIO0FBQ0Q7QUF0QkUsS0FBQSxBQXNCRCxBQUdGOzt3QkFBVSxZQUFNLEFBQ2Y7QUFDQTtBQUZELEtBQUEsQUFFRyxBQUVIOztBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7TUFBTSxxQkFBbUIsU0FBbkIsQUFBbUIscUJBQUssQUFDNUI7QUFDQTtlQUFXLFlBQVksQUFDckI7VUFBSSxhQUFBLEFBQWEsU0FBUyxZQUExQixBQUFzQyxRQUFRLEFBQzVDO1lBQUksTUFBSyxZQUFBLEFBQVksU0FBckIsQUFBNEIsQUFDNUI7WUFBSSxRQUFNLGFBQUEsQUFBYSxNQUFiLEFBQW1CLEdBQTdCLEFBQVUsQUFBc0IsQUFDaEM7dUJBQUEsQUFBZSxBQUNmO0FBQ0E7QUFDQTtBQUNEO0FBUEQsYUFPTyxBQUNMO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7QUFiRCxPQUFBLEFBYUcsQUFDSjtBQWhCRCxBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUU7O3lCQUNHLGNBQUQsZ0JBQUEsQUFBTzs7Z0JBQVA7a0JBQUEsQUFBaUI7QUFBakI7QUFBQSxHQUFBLEdBQWlCLEFBQUMsYUFBRCxBQUFjLCtCQUFlLEFBQUMscUNBQVUsT0FBWCxBQUFrQjtnQkFBbEI7a0JBQTlDLEFBQThDLEFBQzlDO0FBRDhDO0dBQUEsbUJBQzlDLGNBQUEsWUFBUSxTQUFSLEFBQWlCO2dCQUFqQjtrQkFBQTtBQUFBO0tBRkYsQUFDRSxBQUNBLEFBR0g7QUEvRUQ7O0FBaUZBLElBQU0sUUFBQSxBQUFRLDBCQUFkLEFBTUE7O2tCQUFlLDBCQUFBLEFBQVEsT0FBdkIsQUFBZSxBQUFlIiwiZmlsZSI6IlVzZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaXZha2Fyc2hldHR5L0Rlc2t0b3Avc2FwaWVudC10ZXN0L25leHQtYXBvbGxvLWRlbW8vY2xpZW50In0=