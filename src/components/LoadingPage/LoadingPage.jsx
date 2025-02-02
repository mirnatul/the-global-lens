import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';


const LoadingPage = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    if (user) {
        console.log(user);
        // useEffect(() => {
        //     window.location.reload();
        // }, []);
        return <Navigate to='/'></Navigate>
    }
    return children
};

export default LoadingPage;