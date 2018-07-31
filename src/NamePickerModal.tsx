import * as React from "react";
import {observable, action, runInAction, computed} from "mobx";
import {observer} from "mobx-react";
import * as $ from 'jquery';
import * as Modal from 'react-modal';

export class NamePickerModalMachine
{  
  @observable
  public lastName: string = "";
  @observable
  public displayName: string = "";

  public updateLastName(): void
  {
    this.lastName = $("#lastNameTxt").val() as string;
  }

  public updateDisplayName(): void
  {
    this.displayName = $("#displayNameTxt").val() as string;
  }

  public lastNameTxtInput: any;
  public displayNameTxtInput: any;

}

export interface NamePickerModalProps
{
  machine: NamePickerModalMachine;
  onRequestClose: () => void;
  isOpen: boolean;
  currentName: string;
  context?: string; //currently unused, probably won't ever be used
}

@observer
export class NamePickerModal extends React.Component<NamePickerModalProps>
{
  private onModalKeyDown = (e: any): void => {
    if (e.key === "Enter")
    {
      e.preventDefault();
      this.props.onRequestClose();
    }
  };

  componentDidMount()
  {
    // this.props.machine.lastNameTxtInput.focus();
  }

  render()
  {
    return (
      <Modal 
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel="Example Modal"
      >
        <div>
          Current name:&nbsp;
          {this.props.currentName}
          <br />
          <br />
          {
            this.props.context !== undefined &&
            <>
              <div>this.props.context</div>
              <br />
              <br />
            </>
          }
          Last name:&nbsp;
          <input type="text" 
                 onChange={() => this.props.machine.updateLastName()}
                 id="lastNameTxt"
                 onKeyDown={this.onModalKeyDown}
                 ref={(x) => {
                   this.props.machine.lastNameTxtInput = x;
                   if (x != null) 
                   {
                     this.props.machine.lastNameTxtInput.focus();
                   }
                 }}
          />
          <br />
          <br />
          Display Name:&nbsp;
          <input type="text" 
                 onChange={() => this.props.machine.updateDisplayName()}
                 id="displayNameTxt"
                 onKeyDown={this.onModalKeyDown}
                 ref={(x) => {
                   this.props.machine.displayNameTxtInput = x;
                 }}
          />
          <br />
          <br />
          <button onClick={this.props.onRequestClose}>Submit</button>
        </div>
      </Modal>
      );
  }
}

export default NamePickerModal;
