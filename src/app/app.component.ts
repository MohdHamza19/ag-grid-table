// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { AgGridModule } from 'ag-grid-angular';
// import { FormsModule } from '@angular/forms';
// import { ClientSideRowModelModule, ColDef, Module } from 'ag-grid-community';

// @Component({
//   selector: 'app-root',
//   imports: [AgGridModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
//   standalone: true
// })
// export class AppComponent {
//   modules: Module[] = [ClientSideRowModelModule];

//   rowData = [
//     {
//       id: 1,
//       ruleName: '2DS - Trace Changes',
//       active: 'Y',
//       type: 'Match',
//       subType: '2DS - Trace Changes',
//       domain: '',
//       impacted: 0,
//       favourite: 'N',
//       scheduled: 'Y',
//       lastScheduledDate: '01-May-2024 01:15 PM',
//       alert: 'Y',
//     },
//     {
//       id: 2,
//       ruleName: 'Trace Changes',
//       active: 'Y',
//       type: 'Match',
//       subType: '2DS - Trace Changes',
//       domain: '',
//       impacted: 0,
//       favourite: 'N',
//       scheduled: 'N',
//       lastScheduledDate: '01-May-2024 01:15 PM',
//       alert: 'N',
//     },
//     {
//       id: 3,
//       ruleName: 'File Monitor',
//       active: 'Y',
//       type: 'Match',
//       subType: '1DS - File Monitor',
//       domain: '',
//       impacted: 57994,
//       favourite: 'N',
//       scheduled: 'Y',
//       lastScheduledDate: '01-May-2024 01:15 PM',
//       alert: 'Y',
//     },
//     {
//       id: 4,
//       ruleName: 'testreve1',
//       active: 'Y',
//       type: 'Match',
//       subType: '1DS - File Monitor',
//       domain: '',
//       impacted: 13773,
//       favourite: 'N',
//       scheduled: 'N',
//       lastScheduledDate: '01-May-2024 01:15 PM',
//       alert: 'N',
//     },
//   ];

//   columnDefs: ColDef[] = [
//     { field: 'id', headerName: 'ID', sortable: true, filter: true },
//     { field: 'ruleName', headerName: 'Rule Name', sortable: true, filter: true },
//     { field: 'active', headerName: 'Active', sortable: true, filter: true },
//     { field: 'type', headerName: 'Type', sortable: true, filter: true },
//     { field: 'subType', headerName: 'Sub-Type', sortable: true, filter: true },
//     { field: 'domain', headerName: 'Domain', sortable: true, filter: true },
//     { field: 'impacted', headerName: 'Impacted', sortable: true, filter: true },
//     { field: 'favourite', headerName: 'Favourite', sortable: true, filter: true },
//     { field: 'scheduled', headerName: 'Scheduled', sortable: true, filter: true },
//     { field: 'lastScheduledDate', headerName: 'Last Scheduled Date', sortable: true, filter: true },
//     { field: 'alert', headerName: 'Alert', sortable: true, filter: true },
//   ];

//   defaultColDef = {
//     filter: true,
//     sortable: true,
//   };

//   selectedRowData: any = null;

//   onSelectionChanged(event: any) {
//     const selectedRows = event.api.getSelectedRows();
//     this.selectedRowData = selectedRows.length > 0 ? selectedRows[0] : null;
//     console.log('Selected Row Data:', this.selectedRowData);
//   }

//   formData: any = {};

//   saveOrUpdateData() {
//     console.log('Saved/Updated Data:', this.formData);
//   }
// }

import { Component } from '@angular/core';
import {
  AllCommunityModule,
  ColDef,
  GridApi,
  GridOptions,
  ModuleRegistry,
  RowSelectionOptions,
  SideBarDef,
} from 'ag-grid-community';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { ColumnsToolPanelModule, SideBarModule } from 'ag-grid-enterprise';
import moment from 'moment';

ModuleRegistry.registerModules([
  AllCommunityModule,
  SideBarModule,
  ColumnsToolPanelModule,
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, AgGridModule, CommonModule, ReactiveFormsModule],
})
export class AppComponent {
  private gridApi!: GridApi;
  rowData: any[];
  columnData: ColDef[];
  selectedRows: any[] = [];
  showRetrievedData: boolean = false;
  gridOptions: GridOptions = {};
  selectedRowData: any = null;
  showSaveMessage: boolean = false;
  rowSelection: RowSelectionOptions = {
    mode: 'multiRow',
  };
  sideBar: SideBarDef | string | string[] | boolean | null = 'columns';
  formData!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      id: ['', Validators.required],
      ruleName: ['', Validators.required],
      active: ['', Validators.required],
      type: ['', Validators.required],
      subType: ['', Validators.required],
      domain: [''],
      impacted: ['', [Validators.required]],
      favourite: ['', Validators.required],
      scheduled: ['', Validators.required],
      lastScheduledDate: ['', Validators.required],
      alert: ['', Validators.required],
    });

    this.rowData = [
      {
        id: 997,
        ruleName: '2DS - Trace Changes',
        active: 'Y',
        type: 'Match',
        subType: '2DS - Trace Changes',
        domain: '',
        impacted: 0,
        favourite: 'N',
        scheduled: 'Y',
        lastScheduledDate: '01-May-2024 01:15 PM',
        alert: 'Y',
      },
      {
        id: 996,
        ruleName: 'Trace Changes',
        active: 'Y',
        type: 'Match',
        subType: '2DS - Trace Changes',
        domain: '',
        impacted: 0,
        favourite: 'N',
        scheduled: 'N',
        lastScheduledDate: '01-May-2024 01:15 PM',
        alert: 'N',
      },
      {
        id: 986,
        ruleName: 'File Monitor',
        active: 'Y',
        type: 'Match',
        subType: '1DS - File Monitor',
        domain: '',
        impacted: 57994,
        favourite: 'N',
        scheduled: 'Y',
        lastScheduledDate: '01-May-2024 01:15 PM',
        alert: 'Y',
      },
      {
        id: 985,
        ruleName: 'testreve1',
        active: 'Y',
        type: 'Match',
        subType: '1DS - File Monitor',
        domain: '',
        impacted: 13773,
        favourite: 'N',
        scheduled: 'N',
        lastScheduledDate: '01-May-2024 01:15 PM',
        alert: 'N',
      },
    ];

    this.columnData = [
      { field: 'id', headerName: 'ID', sortable: true, filter: true },
      {
        field: 'ruleName',
        headerName: 'Rule Name',
        sortable: true,
        filter: true,
      },
      { field: 'active', headerName: 'Active', sortable: true, filter: true },
      { field: 'type', headerName: 'Type', sortable: true, filter: true },
      {
        field: 'subType',
        headerName: 'Sub-Type',
        sortable: true,
        filter: true,
      },
      { field: 'domain', headerName: 'Domain', sortable: true, filter: true },
      {
        field: 'impacted',
        headerName: 'Impacted',
        sortable: true,
        filter: true,
      },
      {
        field: 'favourite',
        headerName: 'Favourite',
        sortable: true,
        filter: true,
      },
      {
        field: 'scheduled',
        headerName: 'Scheduled',
        sortable: true,
        filter: true,
      },
      {
        field: 'lastScheduledDate',
        headerName: 'Last Scheduled Date',
        sortable: true,
        filter: true,
      },
      { field: 'alert', headerName: 'Alert', sortable: true, filter: true },
    ];
  }

  ngOnInit() {
    this.selectedRows = [];
    this.showRetrievedData = false;

    this.formData.valueChanges.subscribe((data) => {
      console.log('Form Data:', data);
    });
      
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }
  
  onSelectionChanged(event: any) {
    this.selectedRows = event.api.getSelectedRows();
    if (this.selectedRows.length == 0) {
      this.showRetrievedData = false;
    }
  }

  showSelectedRows() {
    this.showRetrievedData = !this.showRetrievedData;
    console.log('Selected Rows:', this.selectedRows);
  }

  saveOrUpdateData() {
    this.formData.markAllAsTouched();
    
    if (this.formData.valid) {
      console.log('Saved/Updated Data:', this.formData.value);
      this.showSaveMessage = true;
      const dateControl = this.formData.get('lastScheduledDate');
      if (dateControl) {
        const dateValue = dateControl.value;
        const formattedDate = moment(dateValue).format('DD-MMM-YYYY hh:mm A');
        dateControl.setValue(formattedDate);
      }
  
      const formValue = this.formData.value;
      const index = this.rowData.findIndex(row => row.id === formValue.id);
  
      if (index !== -1) {
        this.rowData[index] = { ...formValue };
      } else {
        this.rowData.push({ ...formValue });
      }
  
      this.gridApi.setGridOption('rowData', this.rowData);
  
      this.formData.reset();
      setTimeout(() => {
        this.showSaveMessage = false;
      }, 5000);
    }
  }

  formatDate() {
    const dateControl = this.formData.get('lastScheduledDate');
    if (dateControl) {
      const dateValue = dateControl.value;
      const formattedDate = moment(dateValue).format('DD-MMM-YYYY hh:mm A');
      dateControl.setValue(formattedDate);
    }
  }
}
