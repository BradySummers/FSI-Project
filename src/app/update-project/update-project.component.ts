import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewBoardComponent } from '../new-board/new-board.component';
import { DataService, IProjectObject } from '../data.service';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
})
export class UpdateProjectComponent {
 

  
  isButtonVis: boolean = false;
  constructor(
  public dialogRef: MatDialogRef<UpdateProjectComponent>,
  @Inject(MAT_DIALOG_DATA) public projectFields: IProjectObject,
  ) {
    console.log(this.projectFields);
   }

  saveData(): void {
    const username = this.projectFields.username.model;
    const jsonData: string = JSON.stringify({ username });
    localStorage.setItem('data', jsonData);
    console.log('BJ was here - update project');
    console.log('Saved username:', username);
    this.dialogRef.close(this.projectFields);
  }
  
}
