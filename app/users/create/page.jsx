'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';


export default function AddNewUser() {


    const router = useRouter();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));

    }



    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3000/api/adduser', inputs).then(function (response) {
            console.log(response.data);
            toast.success('Successfully created!');
            router.push('/');
        });


    }


    return (
        <div className="card bg-base-100 table m-auto w-96 shadow-xl mt-16">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" onChange={handleChange} name='name' id='name' className="grow" placeholder="Name" />
                    </label>
                    <br />
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="email" onChange={handleChange} name='email' id='email' className="grow" placeholder="Email" />
                    </label>
                    <br />
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" onChange={handleChange} name='username' id='username' className="grow" placeholder="Username" />
                    </label>
                    <br />
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="password" onChange={handleChange} name='password' id='password' className="grow" placeholder='Enter Password' />
                    </label>
                    <button className='btn btn-info btn-wide table m-auto mt-5 text-center text-white'>Add New User</button>
                </form>
            </div>
            <Toaster position='top-right' />
        </div>
    )
}
