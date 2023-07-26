import { Injectable } from '@angular/core';

export interface IVariableObject {
  objectName:{ 
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  drawingNumber:{
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  direction:{
    label:string;
    model: any;
    disabled: boolean
  },
  dataType:{ 
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  size:{ 
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
}

export interface IDataObject {
  current_board: number,
  project: IProjectObject,
  boards: IBoardObject[]
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }
  data: IDataObject = {
    current_board: 0, // index?
    project: {
      username:{
        label: '',
        model: '',
        placeholder: '',
        disabled: false
      },
      Job: {
        label: '',
        model: '',
        placeholder: '',
        disabled: false
      },
      Manufacturer: {
        label: '',
        model: '',
        placeholder: '',
        disabled: false
      },
      Aircraft: {
        label: '',
        model: '',
        placeholder: '',
        disabled: false
      }
    },
    boards: [
      {
        index: 0,
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
          label: 'Hardware Version',
          model: '',
          placeholder: '',
          disabled: false
        },
        comment: {
          label: 'Comments',
          model: '',
          placeholder: '',
          disabled: false
        },
        variables: [{
          objectName:{ 
            label: 'Object Name',
            model: '',
            placeholder: '',
            disabled: false,
            },
            drawingNumber:{
            label: 'Drawing Number', 
            model: '', 
            placeholder: '',
            disabled: false
          },
            direction:{
            label: 'Direction',
            model: '',
            disabled: false
          },
            dataType:{ 
            label: 'Data Type', 
            model: '', 
            placeholder: '',
            disabled: false
          },
            size:{ 
            label: 'Size', 
            model: '', 
            placeholder: '',
            disabled: false
          }
        }
        ],
        disabled: false
      }
    ]
  };
  
  current_board: number = 0;
}

export interface IProjectObject{
  username:{
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  Job: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  Manufacturer: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  Aircraft: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  }
}

export interface IBoardObject{
  index: number,
  boardName:{
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  drawNumber: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  updateRate: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  hardware: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  comment: {
    label: string,
    model: string,
    placeholder: string,
    disabled: boolean
  },
  variables: IVariableObject[]
  disabled: boolean
}