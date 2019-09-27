import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { from } from 'rxjs';
import { PeriodicElement } from '../interface/department';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['id','enable','priority','department','start_working_time',
  'end_working_time', 'nwd_table_id','dialplan_context','queue','query_method','url_id',
  'call_more', 'retry_time','action'];

   selectedDepartment : PeriodicElement;

   onselect(id:number) { console.log(id)};

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 2,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 3,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id:4,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  }
]