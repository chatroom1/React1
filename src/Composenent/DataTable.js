import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export class DataTable extends Component {


  mappingdata=()=>this.props.hienthiuser.map((value,key)=>
  (<TableDataRow  changeEditUserstatus={()=>this.props.changeEditUserStatus} editTableDatarow={(user)=>this.props.editTableData(value)} data={value.name} key={key} id={key} name={value.name}  tel={value.tel} permission={value.permission}/>))
    render() {
        return (
            <div>
            <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th> STT </th>
              <th> Họ tên </th>
              <th> Điện thoại </th>
              <th> Quyền </th>
              <th> Tác vụ </th>
            </tr>
          </thead>
          <tbody>
          {
          this.mappingdata()
          }
     
          </tbody>
  </table>
            </div>
        )
    }
}

export default DataTable
