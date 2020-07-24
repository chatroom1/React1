import React, { Component } from 'react'

export class EditUser extends Component {
    render() {
        return (
            <div className="col-12">
            <div className="card text-left bg-primary mt-2">
            <div className="card-body">
              <h4 className="card-title"> Sửa thành viên </h4>
              <form method="post">
              <div className="form-group">
                <label> Họ tên </label>
                <input type="text" name="name" className="form-control" placeholder="Họ tên" aria-describedby="helpId"
                  // defaultValue={this.props.EditUserObject.name} 
                  // onChange={(event) => this.isChangeEdit(event)}   
                   />
              </div>
              <div className="form-group">
                <label> SĐT </label>
                <input type="text" name="tel" 
                // defaultValue={this.props.EditUserObject.tel} onChange={(event) => this.isChangeEdit(event)} 
                className="form-control" placeholder="SĐT" aria-describedby="helpId" />
              </div>
              <div className="form-group">
                <label >Quyền</label>
                <select 
                required 
                // defaultValue={this.props.EditUserObject.permission} onChange={(event) => this.isChangeEdit(event)}
                 className="custom-select" name="permission">
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <button type="reset" className="btn btn-warning btn-lg btn-block" onClick={() => this.changeEditUserStatus}>Sửa</button>
              </form>
            </div>
            
          </div>
          </div> 
        )
    }
}

export default EditUser
