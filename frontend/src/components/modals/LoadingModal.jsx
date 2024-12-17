import { CircularProgress } from '@mui/material';
import React from 'react';

export default function LoadingModal({ visible = true, description =" ",  }) {
    return (
        <>
            {visible && (
                <div
                    className="fixed inset-0 z-[2999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm transition-transform duration-300 scale-100"
                    >
                       
                        <div className="relative flex justify-center   py-4 text-slate-600 font-light">
                            <CircularProgress size={"25px"}/>
                        </div>
                        <div className='flex justify-center' >
                            <small>Loading ...</small>
                        </div>
                       
                    </div>
                </div>
            )}
        </>
    );
}
