import { Component } from '@angular/core';
import { RecordsService } from './records.service';

// tslint:disable-next-line: class-name
interface myRecords {

// tslint:disable-next-line: ban-types
    obj: Object;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  // only one constructor per componant
  records = [];
  constructor(private myPrivateService: RecordsService) {
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {

   this.myPrivateService.getRecords().subscribe(data => {
    this.records =  data.obj
});


  }
}
