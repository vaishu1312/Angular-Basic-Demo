import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myName="Vaish";
  myNo=0;
  listOfnames=['radha','mera','sita'];
  filteredNames:string[]=[];
  newName="";
  changeName(){
    this.myName="sri";
  }
  incrementNo(){
    this.myNo+=1;
  }
  addName(){
    console.log("New name is: " +this.newName);
    this.listOfnames.push(this.newName);
    console.log("list is ",this.listOfnames)
  }
  deleteName(){
    console.log("Hi from delete name")
    if(this.listOfnames.length>0){
      this.listOfnames.pop();
    }else{
      alert("Nothing to delete");
    }    
  }
  search(){
    console.log("Hi from search, Searching for: ",this.newName);
    this.filteredNames=this.listOfnames.filter((name)=>
      name.includes(this.newName)    
    );
  }
  deleteThis(){
    console.log("Hi from delte this");
    const index= this.listOfnames.indexOf(this.newName);
    if(index===-1){
      alert("No record found to delte");
    }else{
    this.listOfnames.splice(index,1);
    }
  }
}
