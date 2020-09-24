import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    @Input() customerData = {
  		id:'',
		name:'',
		email:'',
		address:'',
		gender:0
  	};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getCustomerById(this.route.snapshot.params['id'])
      .subscribe((data: {}) => {
      	console.log(data);
      	this.customerData = data;
    });
  }
  
   updateCustomer() {
    this.rest.updateCustomer(this.route.snapshot.params['id'], this.customerData).subscribe((result) => {
      alert("Customer updated successfily");
      console.log(result);
      this.router.navigate(['/detailcustomer/'+this.route.snapshot.params['id']]);
    }, (err) => {
      console.log(err);
    });
  }

}
