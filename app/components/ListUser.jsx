'use client'

import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default function ListUser() {



    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:3000/api/users').then(function (response) {
            //console.log(response.data);
            setUsers(response.data);
        });
    }


    const deleteUser = (id) => {
        axios.delete(`http://localhost:3000/api/delete/${id}`).then(function (response) {
            console.log(response.data);
            if (response.status == 200) {
                toast.success('Deleted Successfully!');
            }
            getUsers();
        });
    }



    return (
        <div className="p-5 mt-5 bg-slate-200 rounded-md">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td className='flex gap-2'>
                                    <Link className='btn btn-sm btn-success text-white' href={`users/read/${user.id}`}>Read</Link>
                                    <Link className='btn btn-sm btn-warning text-white' href={`users/edit/${user.id}`}>Edit</Link>
                                    <button onClick={() => deleteUser(user.id)} className="btn btn-error btn-sm">Delete</button>
                                </td>
                            </tr>


                        )}

                    </tbody>
                </table>
            </div>
            <Toaster position='top-right' />
        </div>
    )
}
