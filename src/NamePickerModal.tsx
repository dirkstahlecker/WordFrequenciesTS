import * as React from "react";
import {observable, action, runInAction, computed} from "mobx";
import {observer} from "mobx-react";
import * as $ from 'jquery';
import * as Modal from 'react-modal';

export class NamePickerModalMachine
{  
  @observable
  public lastName: string = "";

  public updateLastName(): void
  {
    this.lastName = $("#lastNameTxt").val() as string;
  }


}

export interface NamePickerModalProps
{
  machine: NamePickerModalMachine;
  onRequestClose: () => void;
  isOpen: boolean;
  currentName: string;
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
          Last name:&nbsp;
          <input type="text" 
                 onChange={() => this.props.machine.updateLastName()}
                 id="lastNameTxt"
                 onKeyDown={this.onModalKeyDown}
          />
          <button onClick={this.props.onRequestClose}>Submit</button>
        </div>
      </Modal>
      );
  }
}

export default NamePickerModal;
