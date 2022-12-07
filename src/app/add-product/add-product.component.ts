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
    let data:any={"pcode":this.pcode,"pname":this.pname,"mandate":this.mandate,"expdate":this.expdate,"brand":this.brand,"price":this.price,"seller":this.seller,"distributor":this.distributor}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
  }
    )

}
}
