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
      
      trangthaichinhsua: false,
      data: Data,
      text:'',
      trangthaisuauser: false,
      userEditObject:{}
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
    this.setState({
      userEditObject:user
    });
    console.log(user);
  }

  EditUserStatuss=()=>{
    this.setState({
      trangthaisuauser: !this.state.trangthaisuauser
      
    });
 
  }
  getUserEditForm=(info)=>{
   console.log('thong tin da sua la xong la:'+info.name);
   this.state.data.forEach((value,key)=>{
    if(value.id===info.id){
      value.name=info.name;
      value.tel=info.tel;
      value.permission=info.permission;
    }
   })
  }

  deleteUser=(idUser)=>{
    var temData=this.state.data.filter(item=>item.id!==idUser);
    this.setState({
      data:temData
    });

    // temData.forEach((value,key)=>{
    //   if(value.id===idUser){
    //     console.log(key);
    //   }
    // }) 
   
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
     console.log(ketqua);
      
   
 
  return (
    
    <div>

     <Headers/>
     <div className="searchForm">
       <div className="container">
         <div className="row">
          <div className="col-12">
          <Search 
          getUserEditForm={(info)=>this.getUserEditForm(info)}
          checkConnect={(dl)=>this.getTextSearch(dl)}
           ketnoi={()=>this.thaydoitrangthai() }
            trangthaichinhsua={this.state.trangthaichinhsua}
            EditUserStatus={this.state.trangthaisuauser}
            trangthaiedit={()=>this.EditUserStatuss()}
            userEditObject={this.state.userEditObject}
                
            />

          </div>
          <div className="col-12">
          <hr/>
          </div>
          <div className="col-8">
          <DataTable 
          deleteUser={(idUser)=>this.deleteUser(idUser)}
          editTableData={(user)=>this.editTable(user)} hienthiuser={ketqua}
           trangthaiedit={()=>this.EditUserStatuss()}
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
