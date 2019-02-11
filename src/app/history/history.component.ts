import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public listDataHeader:any;

  constructor(
      private data:ApiIntegrationService,
  ) { }
  getdata(){
  this.data.getData({}).subscribe(
    data => {
      console.log("data",data);
     if(data['status'] ==200){
       alert("your history fetch successfully");
       this.listDataHeader = data['data'];
       console.log(this.listDataHeader);
    }else{

    }

  })
}
  ngOnInit() {
      this.getdata();
  }

}
