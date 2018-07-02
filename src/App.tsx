import * as React from 'react';
import * as $ from 'jquery';

// import logo from './logo.svg';

export class App extends React.Component 
{
  public onSubmit = (): void => {
    const entry: any = $("#journalEntry").val();
    console.log(entry);
  };

  public render() 
  {
    return (
      <>
        <label htmlFor="dateEntry">Date: </label>
        <br />
        <input type="text" id="dateEntry" />
        <br />
        <br />
        <label htmlFor="journalEntry">Entry: </label>
        <br />
        <textarea id="journalEntry" />
        <br />
        <button onClick={this.onSubmit}>Submit</button>
      </>
    );
  }
}

export default App;