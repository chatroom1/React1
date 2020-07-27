import React, { Component } from 'react'

export class TableDataRow extends Component {
    PermissionShow=()=>{
        if(this.props.permission===1){
            return "Admin";
        }else if(this.props.permission===2){
            return "Moderator";
        }
        else{
            return "Normal User";
        }
    }
    editClickFun=()=>{
        this.props.editTableDatarow();
        this.props.changeEditUserstatus();
    }
    deleteButtonClick=(idUser)=>{
     this.props.deleteButtonClick(idUser);
    }
    render() {

        return (
            
                 <tr>
                <th scope="row">{this.props.id+1}</th>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.PermissionShow()}</td>
                <td>
                    <div className="btn btn-warning sua" onClick={()=>this.editClickFun()}><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger xoa" onClick={(idUser)=>this.deleteButtonClick(this.props.id)} ><i className="fa fa-edit">Xoá</i></div>
                </td>
            </tr>
                
            
        )
    }
}

export default TableDataRow
