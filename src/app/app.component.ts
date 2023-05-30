import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title="hamza" 

  actions : Array<any> = [
    
    {title:"Home",route:"/home",icon:"house"},
    {title:"Product","route":"/product",icon:"search"},
    {title:"NewProduct","route":"/newProduct",icon:"safe"},
    

  ]


  currentAction:any ; 
  

  setCurrentAction(action : any ){
    this.currentAction=action
  }






}
