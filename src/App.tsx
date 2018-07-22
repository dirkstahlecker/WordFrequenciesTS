import * as React from "react";
// import * as $ from 'jquery';
import {NameReference} from "./NameReference";
import {observable, action, runInAction} from "mobx";
import {observer} from "mobx-react";
import * as $ from 'jquery';
// import * as Popup from "react-popup";
// import logo from './logo.svg';
import * as Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root')!!);

export class AppMachine
{
  @observable
  public journalText: string = "";

  @observable
  public currentName: string = "";

  @observable
  public allNames: string[] = [];

  @observable
  public finalText: string = "";

  @observable
  public modalOpen: boolean = false;

  @action
  public setModalOpen(value: boolean): void
  {
    this.modalOpen = value;
  }

  @action
  public updateJournalText = (): void => {
    this.journalText = $("#journalEntry").val() as string;

    let text: string = this.journalText;
    let lastWord: string = text.substring(text.lastIndexOf(" "), text.length);
    lastWord = NameReference.cleanWord(lastWord);
    if (NameReference.isName(lastWord))
    {
        //do something with name
      console.log("IS NAME");
    }
  };

  public populateModal(): React.ReactElement
  {
    
  }

  @action.bound
  public onSubmit():void 
  {
    let outputText: string = "";
    const words: string[] = this.journalText.split(/\s|\.|,/);
    for (let i: number = 0; i < words.length; i++)
    {
      const word: string = words[i];
      if (NameReference.isName(word))
      {
         // this.currentName = word;
         this.allNames.push(word); //TODO: need to deal with punctuation after sentences (split on punctuation as well as spaces)
      }
      else
      {
        outputText += word + " ";
      }
    }
    this.finalText = outputText;
  };

  // private buffer: string = "";
  @observable
  public outputText: string = "";

  // private legalLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  // "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "'", "\""];

  private wordSplitCharacters: string [] = [".", ",", "!", " ", "?", ":", ";"];
  // private wordSplitRegex: RegExp = /\.|,|!|\s|\?|:|;/;
 

  //don't use buffer, but change the text directly with the markup.

  //On a particular keypress, look at the last name typed and ask for last name
  @action.bound
  public onKeyDown(e: React.KeyboardEvent)
  {
    // let text: string = this.journalText.substring(0, this.journalText.length - );
    let text: string = this.journalText;
    // if (this.wordSplitCharacters.indexOf(e.key) > -1)
    // {
      let lastWord: string = text.substring(text.lastIndexOf(" "), text.length);
      if (NameReference.isName(lastWord))
      {
        //do something with name
        console.log("IS NAME");
      }
    // }
    // if (e.key === "Backspace")
    // {
    //   this.buffer = this.buffer.substr(0, this.buffer.length - 2); //remove last character
    // }
    // if (this.wordSplitCharacters.indexOf(e.key) > -1) //reset buffer, check for name
    // {
    //   if (NameReference.isName(this.buffer)) //its a name, ask for proper markup
    //   {
    //     //do alert here and get markup and add it
    //     this.outputText += this.buffer + e.key;
    //   }
    //   else //not a name, just add it
    //   {
    //     this.outputText += this.buffer + e.key;
    //   }
    //   this.buffer = "";
    // }
    // else if (this.legalLetters.indexOf(e.key) < 0)
    // {
    //   return;
    // }
    // else //just add to buffer
    // {
    //   this.buffer += e.key;
    // }
  };

}

export interface AppProps
{
  machine: AppMachine;
}

@observer
export class App extends React.Component<AppProps>
{
  public render()
  {
    return (
      <span style={{width: "100%", height: "100%", display: "inline-block", verticalAlign: "top"}} 
            // onKeyDown={this.props.machine.onKeyDown}
            tabIndex={0}
            id="mainApp"
      >
        <Modal
            isOpen={this.props.machine.modalOpen}
            onRequestClose={() => this.props.machine.setModalOpen(false)}
            contentLabel="Example Modal"
        >
          {this.props.machine.populateModal()}
        </Modal>
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top"}}>
          <label htmlFor="dateEntry">Date: </label>
          <br />
          <input type="text" id="dateEntry" />
          <br />
          <br />
          <label htmlFor="journalEntry">Entry: </label>
          <br />
          <textarea id="journalEntry" 
                    value={this.props.machine.journalText} 
                    onChange={() => this.props.machine.updateJournalText()}
                    style={{width: "90%", height: "200px"}}
          />
          <br />
          <button onClick={this.props.machine.onSubmit}>Submit</button>
        </div>
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top"}}>
          {this.props.machine.currentName}
          <br />
          Last name: 
          <br />
          <button>Okay</button>
          <button>Ignore</button>
          <br />
          <br />
          {this.props.machine.outputText}
        </div>
      </span>
    );
  }
}

export default App;
