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
  ){
    console.log('incoming boardfields', this.boardFields)
  }
   
  saveData(): void {
 
    this.dialogRef.close(this.boardFields);
    console.log('Saved boardname:', this.boardFields);

  }
}