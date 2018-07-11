import * as React from 'react';
// import * as $ from 'jquery';
import {NameReference} from "./NameReference";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react";
// import Popup from "reactjs-popup";
// import logo from './logo.svg';

export class AppMachine
{
  @observable
  public journalText: string;

  @observable
  public currentName: string;
}

export interface AppProps
{
  machine: AppMachine;
}

@observer
export class App extends React.Component<AppProps>
{
  public onSubmit = (): void => {    
    for (let word in this.props.machine.journalText.split(" "))
    {
      if (NameReference.isName(word))
      {
        runInAction(() => {
          this.props.machine.currentName = word;
        });
      }
    }
  };

  public render() 
  {
    return (
      <span style={{width: "100%", display: "inline-block", verticalAlign: "top"}}>
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top"}}>
          <label htmlFor="dateEntry">Date: </label>
          <br />
          <input type="text" id="dateEntry" />
          <br />
          <br />
          <label htmlFor="journalEntry">Entry: </label>
          <br />
          <textarea id="journalEntry" value={this.props.machine.journalText}/>
          <br />
          <button onClick={this.onSubmit}>Submit</button>
        </div>
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top"}}>
          {}
          <button>Okay</button>
          <button>Ignore</button>
        </div>
      </span>
    );
  }
}

export default App;