import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private service: SampleService) { }

  public response: any;
  public singEmp: any;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(res=>{
      this.response = res;
      console.log(res);
    },
    err=>{
      console.log(err);
    })
  }

  edit(employee: any){
    console.log(employee);
    this.singEmp = employee;
  }

  pupUp(content: any){

  }

}
