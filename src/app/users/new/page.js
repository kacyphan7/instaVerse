// Imports
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const NewUser = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pronouns, setPronouns] = useState('');

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const handleFullName = (e) => {
        setFullName(e.target.value);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handlePronouns = (e) => {
        setPronouns(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function

        const newUser = { fullName, userName, email, password, pronouns };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/new`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log('===> Error in Signup', error));

    };

    if (redirect) { router.push('/users'); }
    // You can have them redirected to profile (your choice)

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Make New User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="fullName" value={fullName} onChange={handleFullName} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={username} onChange={handleUsername} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pronouns">Pronouns</label>
                            <input type="text" name="pronouns" value={pronouns} onChange={handlePronouns} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number"></label>
                            <input type="text" name="number" value={number} onChange={handleNumber} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewUser;