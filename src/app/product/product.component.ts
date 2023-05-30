import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  
    constructor( private  http : HttpClient , private  productService:ProductService){
    }

    public products$ : Array<Product> = []   
    public keyword : String = ""
  


    ngOnInit(): void {

        this.getProduct()
  
    }



    
  
  
  handleProduct(product : any){


    this.http.patch(`http://localhost:3000/product/${product.id}`,{checked:!product.checked}).subscribe({
      next : updatedProduct => {

        product.checked = !product.checked

      }
    })
  }


     getProduct(){

       this.productService.getProduct().subscribe({
        
         next : data =>{
           this.products$ = data
         },
         error : err=>{
           console.log(err)
         }
      
       })
    }


    handleDelete(product:any){

      if(confirm("Etes vous sure ?"))
        this.products$=this.products$.filter(item => item.id!=product.id)
    
    
      }
   

      search(keyword:String){
         this.productService.searchProduct(keyword).subscribe({
          next:value=>{
              this.products$=value
          },error:err=>{
            console.log(err)
          }
         })
      }
  




}


