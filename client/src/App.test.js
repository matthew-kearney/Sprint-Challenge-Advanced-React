import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import PlayerCard from './components/PlayerCard';
import DarkMode from "./components/DarkMode";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`render app works`, () => {
  render(<App/>);
});


test(`renders Darkmode  `, () => {
  render (< DarkMode />);
});


test(`renders Title  `, () => {
  // const { getByText } = 
  render (< App-header />);
  // const Title = getByText(/title/i);
  // expect(Title).toBeInTheDocument();
});