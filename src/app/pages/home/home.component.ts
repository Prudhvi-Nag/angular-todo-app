import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TodoServService } from 'src/app/services/todo-serv.service';
import { ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { InteractionService } from 'src/app/shared/interaction.service';
import * as XLSX from 'xlsx';
import {   ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  @ViewChild('TABLE') htmlData!: ElementRef;
  @ViewChild('TABLE')
  table!: ElementRef;
  constructor(private srv: TodoServService, private router: Router, private ar: ActivatedRoute, private is: InteractionService) {
  }


ExportTOExcel(){
  const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  /* save to file */
  XLSX.writeFile(wb, 'SheetJS.xlsx');
  
}

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  todoss: any = [];
  todoLength: any = 0;

  displayedColumns: String[] = ["id", "title", "completed", "target", "createdAt", "updatedAt", "actions"]

  // dataSource= new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  @ViewChild(MatSort) mySort: any = MatSort;
  // @ViewChild('TABLE',{ read: ElementRef }) todoss: ElementRef;

  ngAfterViewInit() {
    this.todoss.paginator = this.paginator;


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.todoss.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {
    console.log("I am executed by angular when ever the component is initialized")
    this.getAlltodoss();
    this.todoss.table = this.todoss;
  }

  getAlltodoss() {
    this.srv.all().subscribe(
      {
        next: (res: any) => {
          console.log("i am executed on success")
          
          console.log(res)
          this.todoss = res;

          this.todoLength = this.todoss.length;
          console.log(this.todoLength)
          this.is.announceMission(this.todoLength);
          this.todoss = new MatTableDataSource(res);
          
          this.todoss.paginator = this.paginator;
          this.todoss.sort = this.mySort;
         
        },
        error: () => {
          console.log("i am executed on err")
        },
        complete: () => {
          console.log("i am executed on success or err")
        }
      }
    )
  }

  onEditClick($event: any, todoss: any) {
    this.router.navigateByUrl("/todo/" + todoss.id)
  }
  

  onDeleteClick(id: any) {
    console.log(id)
    if (id) {
      this.srv.delete(id).subscribe({
        next: () => {
          this.router.navigateByUrl("/")
          this.getAlltodoss()
        },
        error: () => {
          console.log("i am executed on error")
        },
        complete: () => {
          console.log("i am executed on success or error")
        }
      })
    }
  }


  
}
