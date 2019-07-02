import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import gtfs from 'gtfs-stream';

@Component({
  selector: 'app-test-gtfs',
  templateUrl: './test-gtfs.component.html',
  styleUrls: ['./test-gtfs.component.scss']
})
export class TestGTFSComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getGTFS();
  }

  getGTFS(){
    this._http.get('https://developers.google.com/transit/gtfs/examples/sample-feed.zip') // or any other way of getting the data stream
  .pipe(gtfs())
  .subscribe((entity) => {
    console.log(entity);
  })
  }
}
