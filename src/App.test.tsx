import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App, AppMachine} from './App';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App machine={new AppMachine()}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
