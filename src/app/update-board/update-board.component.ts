import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService, IBoardObject } from '../data.service';
@Component({
  selector: 'app-update-board',
  templateUrl: './update-board.component.html',
  styleUrls: ['./update-board.component.css']
})
export class UpdateBoardComponent {
  isButtonVisible: boolean = false;
  constructor(
  public dialogRef: MatDialogRef<UpdateBoardComponent>,
  @Inject(MAT_DIALOG_DATA) public boardFields: IBoardObject,
  ) {
    console.log(this.boardFields);
   }

  saveData(): void {
    const boardName = this.boardFields.boardName.model;
    const boardData: string = JSON.stringify({ boardName });
    localStorage.setItem('boardData', boardData);
    console.log('Saved boardname:', boardName);
    this.dialogRef.close(this.boardFields);
  }
}
