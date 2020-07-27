import React, { Component } from 'react'

export class EditUser extends Component {
constructor(props){
  super(props);
  this.state={
    id:this.props.userEditObject.id,
    name: this.props.userEditObject.name,
    tel:this.props.userEditObject.tel,
    permission:this.props.userEditObject.permission

  }
}
isChangeEdit=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  this.setState({
    [name]:value
  });
}
SaveButton=()=>{
  let info={};
  info.id=this.state.id;
  info.name=this.state.name;
  info.tel=this.state.tel;
  info.permission=this.state.permission;
  console.log(info);
  
  this.props.GetUserEditInfo(info);
  this.props.changeEditUserStatus();
}

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
                  defaultValue={this.props.userEditObject.name} 
                   onChange={(event) => this.isChangeEdit(event)}   
                   />
              </div>
              <div className="form-group">
                <label> SĐT </label>
                <input type="text" name="tel" 
                 defaultValue={this.props.userEditObject.tel} onChange={(event) => this.isChangeEdit(event)} 
                className="form-control" placeholder="SĐT" aria-describedby="helpId" />
              </div>
              <div className="form-group">
                <label >Quyền</label>
                <select 
                required 
                 defaultValue={this.props.userEditObject.permission} onChange={(event) => this.isChangeEdit(event)}
                 className="custom-select" name="permission">
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <button type="button" className="btn btn-warning btn-lg btn-block" onClick={() => this.SaveButton()}>Sửa</button>
              </form>
            </div>
            
          </div>
          </div> 
        )
    }
}

export default EditUser
