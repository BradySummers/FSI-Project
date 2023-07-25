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
    const jsonData: string = JSON.stringify({ boardName });
    localStorage.setItem('data', jsonData);
    console.log('BJ was here - update board');
    console.log('Saved username:', boardName);
    this.dialogRef.close(this.boardFields);
  }
}
