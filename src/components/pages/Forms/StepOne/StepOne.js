import React from 'react';


const StepOne = ({ register, handleSubmit, page, setPage }) => {
    const handleSubmitForm = (data) => {
        if (data) {
            setPage(page + 1);
            console.log(data);
        }
    };
    return (
        // Personal Details fields started
        <div>
            <h2 className='text-gray-800 text-3xl font-bold mb-3 pl-3 md:pl-0'>Personal Details</h2>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div>
                    <div className='flex justify-start flex-col md:flex-row items-center'>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="firstName" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                First name
                            </label>
                            <input
                                {...register('firstName')}
                                required
                                id='firstName'
                                type="text"
                                name="firstName"
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                        </div>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="lastName" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block label-text ">
                                Last name
                            </label>
                            <input
                                {...register('lastName')}
                                required
                                id='last-name'
                                type="text"
                                name="lastName"
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                        </div>
                    </div>
                    <div className='flex justify-start flex-col md:flex-row items-center'>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="mobileNumber" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Mobile Number
                            </label>
                            <input
                                {...register('mobileNumber')}
                                required
                                id='mobileNumber'
                                type="number"
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                        </div>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Email
                            </label>
                            <input
                                {...register('email')}
                                required
                                id='email'
                                type="email"
                                name="email"
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                        </div>
                    </div>
                    <div className='flex justify-start flex-col md:flex-row items-center'>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="birthDate" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Birth Date
                            </label>
                            <input
                                {...register('birthDate')}
                                required
                                id='birthDate'
                                type="date"
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                        </div>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="taxPayerId" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Taxpayer ID
                            </label>
                            <input
                                {...register('taxPayerId')}
                                required
                                id='taxPayerId'
                                type="text"
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                        </div>
                    </div>
                </div>
                <div className='pl-3 md:pl-0 pt-5'>
                    <button
                        type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default StepOne;