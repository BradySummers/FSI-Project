import { Component, Input, Inject } from '@angular/core';
import { DataService, IBoardObject } from '../data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css'],
})
export class NewBoardComponent {
  @Input() Object: string= "";
  @Input() Drawing: string= "";
  @Input() updateRate: string=  "";
  @Input() hardware: string= "";
  @Input() Comment: string= "";
  @Input() boardName: string = "";
  @Input() drawNumber: string = "";

  constructor(
    public dialogRef: MatDialogRef<NewBoardComponent>,
    public dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public boardFields: IBoardObject[]
  ) {
    this.boardFields = [];
  }
  // called when "Add Board" in side bar in clicked.
  openBoard() {
    console.log('BJ was here - open board.');
    let index = this.dataService.data.boards.length;
    let boardindex = this.dataService.data.boards.length;
    let newBoard: IBoardObject = {
      index: index,
      boardName:{
        label: 'Board Name',
        model: this.boardName,
        placeholder: '',
        disabled: false
      },
      drawNumber: {
        label: 'Drawing Number',
        model: this.drawNumber,
        placeholder: '',
        disabled: false
      },
      updateRate: {
        label: 'Update Rate',
        model: this.updateRate,
        placeholder: '',
        disabled: false
      },
      hardware: {
        label: 'Hardware Version',
        model: this.hardware,
        placeholder: '',
        disabled: false
      },
      comment: {
        label: 'Comment',
        model: this.Comment,
        placeholder: '',
        disabled: false
      },
      variables: [],
        disabled: false
    };
    console.log(this.boardName)
    if (this.boardFields.length > 0) {
      const boardName = this.boardFields[boardindex].boardName.model;
      const jsonData: string = JSON.stringify({ boardName });
      localStorage.setItem('boarddata', jsonData);
      console.log('Saved boardname:', boardName);
    }
    console.log('new board', newBoard)
    this.dataService.data.boards.push({ ...newBoard });
    this.boardFields.push({ ...newBoard });
    this.dialogRef.close();
  }
  
  
  
}
