import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import Divider from '../../components/Divider';

const Welcome = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogOut = () => {
        if (confirm('Do you really want to quit?')) {
            try {
                signOut(auth).then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  });
                localStorage.removeItem('user');
                location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="flex justify-between my-4">
            <div>
                Welcome &nbsp;
                <b id="profileName" className="">
                    {user?.sex} {user?.name} &nbsp;
                </b>
                <b id="profilePhoneNumber" className="">
                    - &nbsp; {user?.phone} &nbsp;
                </b>
            </div>

            <div className="">
                <span className="cursor-pointer text-yellow-700" onClick={(e) => handleLogOut(e)}>
                    Log Out
                </span>
            </div>
        </div>
    );
};
export default Welcome;
