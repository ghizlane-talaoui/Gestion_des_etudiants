import React, { Component, Fragment } from 'react';
import axios from 'axios';
import DeletAlert from './DeletAlert';
import ErrorAlert from './ErrorAlert';
import { Link } from 'react-router-dom';
import './style.css'
export default class List extends Component {
 
   constructor(){
     super();
     this.state={
       students : [],
       alert_msg:''
     }
   }

   componentDidMount(){
     axios.get('http://127.0.0.1:8000/index')
     .then(response=>{
       this.setState({
         students : response.data
       });
     });
   }

   handleDelete(id){
     axios.delete('http://127.0.0.1:8000/destroy/'+id)
     .then(response=>{
            var students = this.state.students;
            for(var i=0;i<students.length;i++){
              if(students[i].id==id){
                students.splice(i,1);
                this.setState({
                  students : students
                });
              }
            }this.setState({alert_msg:"success"})
          }).catch(error=>{
              this.setState({alert_msg:"error"});
          
     });
   }

    render() {
        return (
            <Fragment>
               <hr/>

              {this.state.alert_msg=="success"?<DeletAlert/>:null}
              {this.state.alert_msg=="error"?<ErrorAlert/>:null}
<table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">@Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  <tbody>
    {
       this.state.students.map(item=>{
         return(

          <tr key={item.id}>
             <th scope="row">{item.id}</th>
             <td>{item.name}</td>
             <td>{item.email}</td>
             <td>{item.gender}</td>
             <td>
               <Link to ={`/update/${item.id}`}  >
                 <span class="text-gradient">
                   <i class="fas fa-pencil-alt md-6"></i>
                   </span></Link>
               <a href="#" onClick={this.handleDelete.bind(this,item.id)}  id='sp' >
                 <span class="text-gradient">
                   <i class="fas fa-times md-6">
                     </i>
                     </span>
                     </a>

             </td>
          </tr>
         )

       })
    }
  </tbody>


</table>
            </Fragment>
        );
    }
}