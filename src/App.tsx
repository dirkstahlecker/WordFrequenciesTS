import * as React from "react";
import {NameReference} from "./NameReference";
import {observable, action, runInAction, computed} from "mobx";
import {observer} from "mobx-react";
import * as $ from 'jquery';
// import logo from './logo.svg';
import {MarkupUtils} from "./MarkupUtils";
import * as Modal from 'react-modal';
import {NamePickerModal, NamePickerModalMachine} from "./NamePickerModal";

Modal.setAppElement(document.getElementById('root')!!);

export class AppMachine
{
  @observable
  public journalText: string = "";

  @observable
  public currentName: string | null = null;

  @observable
  public finalText: string = "";

  public modalObj: NamePickerModal | null;

  @action
  public setCurrentName(value: string | null): void
  {
    this.currentName = value;
  }

  @computed
  public get showModal(): boolean
  {
    return this.currentName != null;
  }

  public namePickerModalMachine: NamePickerModalMachine = new NamePickerModalMachine();

  @action
  public createFinalText(): void
  {
    const dateStr: string = $("#dateEntry").val() as string;
    this.finalText = dateStr + ": " + "\n" + this.journalText;
  }

  @action
  public updateJournalText = (): void => {
    this.journalText = $("#journalEntry").val() as string;

    let text: string = this.journalText;
    let lastWord: string;
    let lastCharacter: string = text.substring(text.length - 1, text.length);
    if (lastCharacter === " ")
    {
      text = text.substring(0, text.length - 1); //remove trailing space
      lastWord = text.substring(Math.max(text.lastIndexOf(" "), text.lastIndexOf("\n")), text.length);
      lastWord = lastWord + " "; //add space back in for the rest of the logic to work properly
    }
    else
    {
      lastWord = text.substring(Math.max(text.lastIndexOf(" "), text.lastIndexOf("\n")), text.length);
    }
    
    //names must be preceeded by a space and followed by a word split character
    if (this.wordSplitCharacters.indexOf(lastWord.substring(lastWord.length - 1, lastWord.length)) > -1) //last character is a word split character
    {
      lastWord = NameReference.cleanWord(lastWord.substring(0, lastWord.length - 1)); //remove the final character to get just the name
      if (NameReference.isName(lastWord))
      {
        this.currentName = lastWord;
      }
    }
  };

  public handleModalCloseRequest(): void
  {
    if (this.currentName == null)
    {
      throw Error("name shouldn't be null");
    }
    //take the last name given by the user and insert the proper markup into the box itself
    const markup: string = MarkupUtils.makeMarkup(this.currentName, this.namePickerModalMachine.lastName, this.currentName);
    const textLen: number = this.journalText.length;
    const previousJournalText: string = this.journalText;
    //add the markup in place of the name
    this.journalText = previousJournalText.substring(0, textLen - this.currentName.length - 1) + markup +  previousJournalText.substring(textLen - 1, textLen);

    //clean up
    this.currentName = null; //close the modal
    this.namePickerModalMachine.lastName = ""; //reset
  }

  // private legalLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  // "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "'", "\""];

  private wordSplitCharacters: string [] = [".", ",", "!", " ", "?", ":", ";", "\s", "\n"];
  // private wordSplitRegex: RegExp = /\.|,|!|\s|\?|:|;/;
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
            tabIndex={0}
            id="mainApp"
      >
        <NamePickerModal 
          machine={this.props.machine.namePickerModalMachine}
          onRequestClose={() => this.props.machine.handleModalCloseRequest()}
          isOpen={this.props.machine.showModal}
          currentName={this.props.machine.currentName == null ? "" : this.props.machine.currentName}
          ref={(x) => this.props.machine.modalObj = x}
        />
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
          <button onClick={() => this.props.machine.createFinalText()}>Submit</button>
        </div>
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top", whiteSpace: "pre-wrap"}}>
          {this.props.machine.finalText}
        </div>
      </span>
    );
  }
}

export default App;


/*
BUGS
-have to write in chonological order - can't jump around with names, since they only add to end
-need to have a story for name picker cancel
-name matching doesn't work on the first character of a line - probably due to looking for space before 


FEATURES
-
*/