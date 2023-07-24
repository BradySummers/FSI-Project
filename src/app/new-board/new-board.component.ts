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
  @Input() Object: string[] = [];
  @Input() Drawing: string[] = [];
  @Input() Update: string[] = [];
  @Input() Hardware: string[] = [];
  @Input() CommentBoard: string[] = [];
  @Input() boardName: string = "";
  @Input() drawNumber: string = "";

  constructor(
    public dialogRef: MatDialogRef<NewBoardComponent>,
    public dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public boardFields: IBoardObject[]
  ) {
    this.boardFields = [{index: 0,
      boardName:{
        label: 'Board Name',
        model: '',
        placeholder: '',
        disabled: false
      },
      drawNumber: {
        label: 'Drawing Number',
        model: '',
        placeholder: '',
        disabled: false
      },
      updateRate: {
        label: 'Update Rate',
        model: '',
        placeholder: '',
        disabled: false
      },
      hardware: {
        label: 'Hardware',
        model: '',
        placeholder: '',
        disabled: false
      },
      comment: {
        label: 'Comment',
        model: '',
        placeholder: '',
        disabled: false
      },
      variables: [],
      disabled: true}];
  }
  saveData(): void {
    const boardName = this.boardFields[0].boardName.model;
    const boardData: string = JSON.stringify({ boardName });
    localStorage.setItem('boardData', boardData);
    console.log('Saved boardname:', boardName);
    this.dialogRef.close(this.boardFields);
  }
  openBoard() {
    let index = this.dataService.data.boards.length;
    let newBoard: IBoardObject = {
      index: index,
      boardName: {
        label: 'Board Name',
        model: '',
        placeholder: '',
        disabled: false
      },
      drawNumber: {
        label: 'Drawing Number',
        model: '',
        placeholder: '',
        disabled: false
      },
      updateRate: {
        label: 'Update Rate',
        model: '',
        placeholder: '',
        disabled: false
      },
      hardware: {
        label: 'Hardware',
        model: '',
        placeholder: '',
        disabled: false
      },
      comment: {
        label: 'Comment',
        model: '',
        placeholder: '',
        disabled: false
      },
      variables: [],
      disabled: true
    };
  
    this.dataService.data.boards.push({ ...newBoard });
    this.boardFields.push({ ...newBoard });
    this.dialogRef.close();
  }
  
  
  
}
