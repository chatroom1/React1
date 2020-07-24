import React from 'react';

import './App.css';
import { Headers } from './Composenent/Headers';
import Search from './Composenent/Search';
import AddUser from './Composenent/AddUser';
import  DataTable  from './Composenent/DataTable'

import Data from './Composenent/Data.json'
import { v4 as uuidv4 } from 'uuid';







class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      trangthaisuauser: false,
      trangthaichinhsua: false,
      data: Data,
      text:''
    }
    
  }


 thaydoitrangthai=()=>{
        this.setState({
          trangthaichinhsua:!this.state.trangthaichinhsua
        });
      }




 getTextSearch=(dl)=>{
   
   this.setState({
     text:dl
   });
   console.log('du lieu nhan dc'+ this.state.text);
   
 }    
 addUserData=(name,tel,permission)=>{
    var item={};
  item.id=uuidv4();
  item.name=name;
  item.tel=tel;
  item.permission=permission;
  var items=this.state.data;
  this.setState({
    data:items
  });
  items.push(item);
  console.log('ket noi ok');
  console.log(items);

  
  } 
  
  editTable=(user)=>{

    console.log('da ket noi');
    console.log(user);
  }
  
  trangthaiedit=()=>{
    this.setState({
      trangthaisuauser:!this.state.trangthaisuauser
    });

   }


    render(){
      var ketqua=[];
      var dats= this.state.data;
      var texts=this.state.text;
     dats.forEach(function(item){
        if(item.name.indexOf(texts )!== - 1){
      
       ketqua.push(item);
      }
      
      })
    //  console.log(ketqua);
      
   
 
  return (
    
    <div>

     <Headers/>
     <div className="searchForm">
       <div className="container">
         <div className="row">
          <div className="col-12">
          <Search 
          checkConnect={(dl)=>this.getTextSearch(dl)}
           ketnoi={()=>this.thaydoitrangthai() }
            trangthaichinhsua={this.state.trangthaichinhsua}
            EditUserStatus={this.trangthaisuauser}
            trangthaiedit={this.trangthaiedit()}
           
            
           
           
          
            />

          </div>
          <div className="col-12">
          <hr/>
          </div>
          <div className="col-8">
          <DataTable editTableData={(user)=>this.editTable(user)} hienthiuser={ketqua}
           trangthaiedit  ={()=>this.trangthaiedit() }
            />
          

          </div>
          <AddUser add={(name,tel,permission)=>this.addUserData(name,tel,permission)} trangthaichinhsua={this.state.trangthaichinhsua}/>
        
         
        

         </div>
       </div>
     </div>
    


     
     
    </div>
  );
}
}

export default App;
