import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line: class-name
interface myRecords {

// tslint:disable-next-line: ban-types
    obj: Array<Object>;
}

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) { }

   getRecords() {

    // proxy: replace http://localhost:1234/api/file.php by api/file.php
  return this.http.get<myRecords>('http://localhost:1234/api/file.php');

   }

}
