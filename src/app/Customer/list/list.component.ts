import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router:Router) { }
  
  customers: any = [];
  
  ngOnInit(): void {
  	this.getCustomers();
  }
  
  getCustomers(){
  	this.rest.getCustomers()
  	.subscribe((data: {}) => {
  		console.log(data);
  		this.customers = data;
  	})
  }
  
  newCustomer(){
  	this.router.navigate(['/addcustomer']);
  }
  
  deleteCustomer(id){
  	this.rest.deleteCustomer(id)
  		.subscribe(res => {
  			this.getCustomers();
  		}, (err) => {
  			console.log(err);
  		});
  }

}
