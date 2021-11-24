import { FileDetails } from './explorer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FileExplorerApiService {

  explorerApi: string = "/location?searchPath=";

  constructor(private http: HttpClient) { }

  navigateDirectories(dirPath:string): Observable<FileDetails[]> {
    const appendPath = this.explorerApi + dirPath;
    return this.http.get<FileDetails[]>(appendPath)
    .pipe(
      catchError(this.httpErrorHandler<FileDetails[]>('locations',[]))
    )
  }

  private httpErrorHandler<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      //console.error(`api called failed ${error.message}`);
      return of(result as T);
    }
  }
}
