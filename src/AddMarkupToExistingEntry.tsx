import * as React from "react";
import {observable, action, runInAction, computed} from "mobx";
import {observer} from "mobx-react";
import * as $ from 'jquery';
import {NameReference} from "./NameReference";
import {NamePickerModal, NamePickerModalMachine} from "./NamePickerModal";
import {MarkupUtils} from "./MarkupUtils";

export class AddMarkupMachine
{
  static wordSplitCharacters: string [] = [".", ",", "!", " ", "?", ":", ";", "\s", "\n"];

  public namePickerModalMachine: NamePickerModalMachine = new NamePickerModalMachine();

  @observable
  public currentName: string | null = null

  @observable
  public oldEntryText: string = "";

  @action
  public updateOldEntryText = (): void => {
    this.oldEntryText = $("#oldEntry").val() as string;
  }

  private stripWord(inp: string): string
  {
    let outputStr: string = "";
    for (let i: number = 0; i < inp.length; i++)
    {
      let c: string = inp[i];
      if (AddMarkupMachine.wordSplitCharacters.indexOf(c) > -1)
      {
        continue
      }
      outputStr += c;
    }
    return outputStr;
  }

  @action.bound
  public startNameSearch(): void
  {
    // let words: string[] = this.oldEntryText.split(/\s|\.|,|:/);
    // console.log(words);
    let outputText: string = "";
    let currentWord: string = "";

    for (let i: number = 0; i < this.oldEntryText.length; i++)
    {
      let c: string = this.oldEntryText[i];
      if (AddMarkupMachine.wordSplitCharacters.indexOf(c) > -1) //boundary
      {
        //check if it's a name
        let word: string = this.stripWord(currentWord);
        if (NameReference.isName(word))
        {
          //show modal
          //TODO
          console.log(word);
          this.currentName = word;
        }
        else
        {
          outputText += currentWord;
        }
        currentWord = "";
      }
      else //regular letter
      {
        currentWord += c;
      }
    }
  }

  public handleModalCloseRequest(): void
  {
    if (this.currentName == null)
    {
      throw Error("name shouldn't be null");
    }
    //take the last name given by the user and insert the proper markup into the box itself
    const markup: string = MarkupUtils.makeMarkup(this.currentName, this.namePickerModalMachine.lastName, this.currentName);
    //add the markup in place of the name

    //TODO: something here
    //TODO: need to make modal into a promise we can wait on here

    //clean up
    this.currentName = null; //close the modal
  }
}

export interface AddMarkupProps
{
  machine: AddMarkupMachine
}

@observer
export class AddMarkupToExistingEntry extends React.Component<AddMarkupProps>
{
  render()
  {
    return <div>
      <NamePickerModal 
        machine={this.props.machine.namePickerModalMachine}
        onRequestClose={() => this.props.machine.handleModalCloseRequest()}
        isOpen={this.props.machine.currentName != null}
        currentName={this.props.machine.currentName == null ? "" : this.props.machine.currentName}

      />
      Paste old entry here:<br />
      <textarea id="oldEntry" 
                value={this.props.machine.oldEntryText} 
                onChange={() => this.props.machine.updateOldEntryText()}
                style={{width: "90%", height: "100px"}}
      />
      <br />
      <button onClick={() => this.props.machine.startNameSearch()}>Submit</button>
      <br />

    </div>
    ;
  }
}

export default AddMarkupToExistingEntry;
