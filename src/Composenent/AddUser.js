import React, { Component } from 'react'



export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:"",
      tel:"",
      permission:""
    }
    
  }
  
  
  
isChangeForm=(event)=>{
  const name=event.target.name;
  const value= event.target.value;
  //console.log(name);
  //console.log(value);
  this.setState({
    [name]:value
  });
  // var item={};
  // item.id=this.state.id;
  // item.name=this.state.name;
  // item.tel=this.state.tel;
  // item.permission=this.state.permission;
  // console.log(item);

}

  
  hienthiform=()=>{
    if(this.props.trangthaichinhsua===true){
      return (
        <div className="card text-left mt-2">
            
        <div className="card-body">
          <h4 className="card-title"> Thêm thành viên </h4>
          <form>
          <div className="form-group">
            <label> Họ tên </label>
            <input type="text" name="name" className="form-control" placeholder="Họ tên" aria-describedby="helpId" onChange={(event) => this.isChangeForm(event)}/>
          </div>
          <div className="form-group">
            <label> SĐT </label>
            <input type="text" name="tel" className="form-control" placeholder="SĐT" aria-describedby="helpId" onChange={(event) => this.isChangeForm(event)} />
          </div>
          <div className="form-group">
            <label htmlFor="my-input">Quyền</label>
            <select id="my-input" className="form-control" name="permission" onChange={(event) => this.isChangeForm(event)}>
              <option value>Chọn quyền mặc định</option>
              <option value={1}>Admin</option>
              <option value={2}>Modrator</option>
              <option value={3}>Normal</option>
            </select>
          </div>
          <button type="reset"  value ="them moi"className="btn btn-primary btn-lg btn-block" onClick={(name,tel,permission) => this.props.add(this.state.name,this.state.tel,this.state.permission )}>Thêm mới</button>
          </form>
        </div>
        
      </div>
      )

    }
  }
    render() {
   //   console.log(this.state);
        return (
     
            <div className="col-4">
              {
                this.hienthiform()
              }
               
             
        
        
      </div>
        )
    }
}

export default AddUser
