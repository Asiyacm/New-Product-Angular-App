import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  pcode=""
  pname=""
  mandate=""
  expdate=""
  brand=""
  price=""
  seller=""
  distributor=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"productCode":this.pcode,"ProductName":this.pname,"man_date":this.mandate,"exp_date":this.expdate,"brand":this.brand,"price":this.price,"sellerName":this.seller,"distributorName":this.distributor}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
  }
    )

}
}
