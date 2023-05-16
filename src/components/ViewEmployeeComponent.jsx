import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <hr />
                    <div className = "card-body ">
                        <div className = "row">
                            <label className='h5'> Employee First Name: </label>
                            <div className='px-1 h5 text-primary'> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label className='h5'> Employee Last Name: </label>
                            <div className='px-1 h5 text-primary'> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label className='h5'> Employee Email ID: </label>
                            <div className='px-1 h5 text-primary'> { this.state.employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
