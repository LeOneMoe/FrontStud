import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Summit} from './modules/Summit';
import {environment} from '../environments/environment';
import {SummitMockService} from './SummitMock.service';


@Injectable({providedIn: 'root'})

export class SummitService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private mocks: SummitMockService) {  }

  // public getSummits(): Observable<Summit[]>{
  //   // return this.http.get<Summit[]>(`${this.apiServerUrl}/api/summit/all`);
  //   return null;
  // }

  public getSummits(): Summit[]{
    // return this.http.get<Summit[]>(`${this.apiServerUrl}/api/summit/all`);
    return this.mocks.data;
  }

  public addSummit(summit: Summit): Observable<Summit>{
    return this.http.post<Summit>(`${this.apiServerUrl}/api/summit/add`, summit);
  }

  public updateSummit(summit: Summit): Observable<Summit>{
    return this.http.put<Summit>(`${this.apiServerUrl}/api/summit/update`, summit);
  }

  public deleteSummit(summitId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/summit/delete${summitId}`);
  }
}
