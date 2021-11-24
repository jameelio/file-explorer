import { Component,OnInit } from '@angular/core';
import { FileExplorerApiService } from './file-explorer-api.service';
import { Observable,Subject } from 'rxjs';
import { FileDetails } from './explorer';

import {
  switchMap,
} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'file-explorer';
  dirPaths!: any;
  findLocation: string = "/";
  p: number = 1;

  private pathLookUp = new Subject<string>();

  constructor(private fileExplorerApi: FileExplorerApiService){
    // this.dirPaths = [];
  }

  ngOnInit():void {
   
    this.dirPaths = this.pathLookUp.pipe(
      switchMap((path:string)=> this.fileExplorerApi.navigateDirectories(path))
    )
  }
  
  getlocation(path:string){
    this.findLocation = path;
    this.nextPath();
  }
  updatePath(path:string){
    console.log(path,"SSSS")
    if(path == '')return;
    this.findLocation = path;
    this.nextPath();
   
  }

  nextPath(){
    this.pathLookUp.next(this.findLocation);
  }
}
