import { Component } from '@angular/core';

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

  readValues=()=>
  {
    let data:any={"productCode":this.pcode,"ProductName":this.pname,"man_date":this.mandate,"exp_date":this.expdate,"brand":this.brand,"price":this.price,"sellerName":this.seller,"distributorName":this.distributor}
    console.log(data)
  }

}
