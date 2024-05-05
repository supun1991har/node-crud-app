import React from "react";



function createUser () {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-centent align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <from>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <lable htmlFor="">Name</lable>
                        <input type="text" placeholder="Enter Name" className='from-control'/>
                    </div>
                    <div className="mb-2">
                        <lable htmlFor="">Email</lable>
                        <input type="email" placeholder="Enter Email" className='from-control'/>
                    </div>
                    <div className="mb-2">
                        <lable htmlFor="">Age</lable>
                        <input type="text" placeholder="Enter Age" className='from-control'/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    
                </from>
            </div>
        </div>
    )
}

export default createUser;