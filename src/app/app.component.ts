import {Component, OnInit} from '@angular/core';
import {Summit} from './modules/Summit';
import {SummitService} from './Summit.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontStud';
  summits: Summit[];
  editSummit: Summit;
  deleteSummit: Summit;

  constructor(private sumSer: SummitService) {  }

  ngOnInit(): void {
   this.getSummits();
  }

  // public getSummits(): void{
  //   this.sumSer.getSummits().subscribe(
  //     (response: Summit[]) => {
  //       this.summits = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public getSummits(): void{
      this.summits = this.sumSer.getSummits();
      console.log(this.summits);
    }

  public onAddSummit(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.sumSer.addSummit(addForm.value).subscribe(
      (response: Summit) => {
        console.log(response);
        this.getSummits();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSummit(employee: Summit): void {
    this.sumSer.updateSummit(employee).subscribe(
      (response: Summit) => {
        console.log(response);
        this.getSummits();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSummit(summitId: number): void {
    this.sumSer.deleteSummit(summitId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSummits();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchSummit(key: string): void {
    console.log(key);
    const results: Summit[] = [];
    for (const employee of this.summits) {
      // if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      //   || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      //   || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      //   || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      //   results.push(employee);
      // }
    }
    this.summits = results;
    if (results.length === 0 || !key) {
      this.getSummits();
    }
  }

  public onOpenModal(summit: Summit, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSummitModal');
    }
    if (mode === 'edit') {
      this.editSummit = summit;
      button.setAttribute('data-target', '#updateSummitModal');
    }
    if (mode === 'delete') {
      this.deleteSummit = summit;
      button.setAttribute('data-target', '#deleteSummitModal');
    }
    container.appendChild(button);
    button.click();
  }
}
