import {Component, OnInit} from '@angular/core';
import {Summit} from './modules/Summit';
import {SummitService} from './Summit.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontStud';
  summits: Summit[];

  constructor(private sumSer: SummitService) {  }

  ngOnInit(): void {
   this.getSummits();
  }

  public getSummits(): void{
    this.sumSer.getSummits().subscribe(
      (response: Summit[]) => {
        this.summits = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
