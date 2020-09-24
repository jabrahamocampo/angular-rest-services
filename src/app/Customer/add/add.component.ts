import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() customerData = {
  	id:'',
	name:'',
	email:'',
	address:'',
	gender:0
  };	

  constructor(public rest:RestService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  
  addCustomer(){
  	this.rest.addCustomer(this.customerData).subscribe((result) => {
  		alert("New Customer Added Successfuly");
  		this.router.navigate(['/customers']);
  	},(err) => {
  		console.log(err);
  	});
 }

}
