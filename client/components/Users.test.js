
// import ReactDOM from 'react-dom'
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { Users } from './Users'
import { graphql } from 'react-apollo'


const graphql=()=>{
    return (component)=>{
     return component;
    }   
}
jest.mock('react-apolo',graphql);

const UserComponent = () => {
  return render(<Users/>);
};

describe('Unit tests for Users', () => {
  describe('Visual snapshot testing', () => {
    test('Renders without crashing', () => {
      const { container } = UserComponent();
      expect(container).toMatchSnapshot();
    });
  });
});