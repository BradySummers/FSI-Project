import { Component, Input } from '@angular/core';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { MatDialog } from '@angular/material/dialog'
import { NewBoardComponent } from '../new-board/new-board.component';
import { UpdateProjectComponent } from '../update-project/update-project.component';
import { UpdateBoardComponent } from '../update-board/update-board.component';
import { IVariableObject, IProjectObject, IBoardObject, DataService, IDataObject } from '../data.service';
import { CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() name = "";
  @Input() Job= "";
  @Input() Manufacturer= "";
  @Input() Aircraft= "";
  i: number = 0;
  isButtonVis: boolean = true;
  isButtonVi: boolean = false;
  isButtonVisible: boolean = true;
  visible: boolean = false;
  isVisible: boolean = false;
  
  isVis: boolean = false;
  data: IDataObject[] = [];
  Variableopen: boolean = false;
  variables: IVariableObject[] = [
    {
      objectName: {
        label: 'Object Name',
        model: '',
        placeholder: '',
        disabled: true
      },
      drawingNumber: {
        label: 'Drawing Number',
        model: '',
        placeholder: '',
        disabled: true
      },
      direction: {
        label: 'Manufacturer',
        model: '',
        disabled: true
      },
      dataType: {
        label: 'Aircraft Name',
        model: '',
        placeholder: '',
        disabled: true
      },
      size: {
        label: 'Size',
        model: '',
        placeholder:'',
        disabled: true
      }
    }
  ];
  projectFields: IProjectObject[] = [
    {
      username: {
        label: 'Username',
        model: '',
        placeholder: '',
        disabled: false
      },
      Job: {
        label: 'Job #',
        model: '',
        placeholder: '',
        disabled: false
      },
      Manufacturer: {
        label: 'Manufacturer',
        model: '',
        placeholder: '',
        disabled: false
      },
      Aircraft: {
        label: 'Aircraft Name',
        model: '',
        placeholder: '',
        disabled: false
      }
    }
  ];
  boardFields: IBoardObject[] = [];

  // the board we're working with.
  board = this.dataService.data.boards[this.dataService.data.current_board];

  constructor(
    public dialog: MatDialog,
    public dataService: DataService
  ) {}

  saveData(): void {
    if (this.projectFields.length > 0) {
      // capture data
      const userName = this.projectFields[0].username.model;
      const jobNumber = this.projectFields[0].Job;
      const manufacturer = this.projectFields[0].Manufacturer;
      const aircraft = this.projectFields[0].Aircraft;

      this.projectFields.forEach((x)=>console.log(x));

      const jsonData: string = JSON.stringify({ userName });
      localStorage.setItem('data', jsonData);
      // display saved data
      console.log('Saved User Name:', userName);
      console.log('Saved Job:', jobNumber);
      console.log('Saved Manufacturer:', manufacturer);
      console.log('Saved Aircraft:', aircraft);
    }
  }
  
  
  shouldRun: boolean  = true;
  isSidenavOpened: boolean = false;

  toggleSidenav(): void {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      
    });
  }

  openAddNewBoard(): void {
    console.log('BJ was here - open add new board.');
    const dialogRef = this.dialog.open(NewBoardComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      
    });
  }

  updateProject(): void {
    console.log('BJ was here - update project');
    const dialogRef = this.dialog.open(UpdateProjectComponent, {
      data: (JSON.parse(JSON.stringify(this.projectFields[0])))
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.username){
      this.projectFields[0] = result
      }

    })
    
  }

  updateBoard(): void {
      // capture data
      const boardName = this.boardFields[0].boardName;
      const drawingNumber = this.boardFields[0].drawNumber;
      const updateRate = this.boardFields[0].updateRate;
      const hardwareVersion = this.boardFields[0].hardware;
      const comment = this.boardFields[0].comment;

      this.boardFields.forEach((x)=>console.log(x));

    const dialogRef = this.dialog.open(UpdateBoardComponent, {
      data: (JSON.parse(JSON.stringify(this.boardFields[0])))
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.boardName){
      this.boardFields[0] = result
      }

      console.log('Saved Board Name"', boardName);
      console.log('Saved Drawing Number:', drawingNumber);
      console.log('Saved Update Rate:', updateRate);
      console.log('Saved Hardware Version:', hardwareVersion);
      console.log('Saved Comment:', comment);
    })
  }

  createBoard(): void {
    console.log('BJ was here - create board.');
    let index = this.dataService.data.boards.length;
    this.boardFields.push({
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
        label: 'Hardware Version',
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
      disabled: false
    });

    this.disableProjectFields();
    this.isButtonVis = false;
    this.isVisible = true;
    this.saveData();
  }

  createVariable(): void {
    this.variables.push({
      objectName: { 
        label: 'Object Name',
        model: '',
        placeholder: '',
        disabled: false 
      },
      drawingNumber: {
        label: 'Drawing Number', 
        model: '', 
        placeholder: '',
        disabled: false
      },
      direction: {
        label: 'Direction',
        model: '',
        disabled: false
      },
      dataType: { 
        label: 'Data Type', 
        model: '', 
        placeholder: '',
        disabled: false
      },
      size: { 
        label: 'Size', 
        model: '', 
        placeholder: '',
        disabled: false
      }
    });

    this.disableboardFields();
    this.isButtonVisible = false;
    this.visible = true;
    this.isVis = true;
    this.Variableopen = true;
  }

  addLines(): void {
    this.dataService.data.boards[this.dataService.data.current_board].variables.push({
      objectName: { 
        label: 'Object Name',
        model: '',
        placeholder: '',
        disabled: false 
      },
      drawingNumber: {
        label: 'Drawing Number', 
        model: '', 
        placeholder: '',
        disabled: false
      },
      direction: {
        label: 'Direction',
        model: '',
        disabled: false
      },
      dataType: { 
        label: 'Data Type', 
        model: '', 
        placeholder: '',
        disabled: false
      },
      size: { 
        label: 'Size', 
        model: '', 
        placeholder: '',
        disabled: false 
      }
    });
  }
  // called when "clear variables" button is pressed
  clearFields(): void {
    console.log('BJ was here - clear fields.');
    this. dataService.data.boards[this.dataService.data.current_board].variables.forEach((variable) => {
      variable.objectName.model = '';
      variable.drawingNumber.model = '';
      variable.direction.model = null;
      variable.dataType.model = '';
      variable.size.model = '';
      this.dataService.data.boards[this.dataService.data.current_board].variables.splice(1);
    });
  }
  
  

  removeVariable(index: number): void {
    this.dataService.data.boards[this.dataService.data.current_board].variables.splice(index, 1);
  }

  disableProjectFields(): void {
    for (let field of this.projectFields) {
      field.username.disabled = true;
      field.Job.disabled = true;
      field.Manufacturer.disabled = true;
      field.Aircraft.disabled = true;
    }
  }

  disableboardFields(): void {
      this.board.boardName.disabled = true;
      this.board.drawNumber.disabled = true;
      this.board.updateRate.disabled = true;
      this.board.hardware.disabled = true;
  }

  switchBoard(boardindex: number) {
    console.log('BJ was here: switch board.');
    console.log('selected board index', boardindex);
    this.dataService.data.current_board = boardindex;

    this.board = this.dataService.data.boards[boardindex];
    console.log('this board is : ', this.board);
    console.log('this board\'s parent is : ', this.boardFields);
    // close the side nav after board selection?
  }
  openNav(){
    console.log("Board Side Panel opened.");// ToDo(BJ): something a bit more meaningful should be here. function name?
    let bar = document.getElementById("bar");
    if (bar){
      bar.style.width = "250px" // ToDo(BJ): should size to fit image and text of the subcomponents
      document.getElementById("main")!.style.marginLeft ="250px";
    }

    // 
 } 
  closeNav(){
    console.log("Board Side Panel closed.");
    document.getElementById("bar")!.style.width = "0"
    document.getElementById("main")!.style.marginLeft = "0";
  }
}