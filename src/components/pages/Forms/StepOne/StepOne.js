import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FromContext } from '../../../../FormContext/FromProvider';

const StepOne = () => {
    const { firstName, setFirstName,
        lastName, setLastName,
        mobileNumber, setMobileNumber,
        email, setEmail,
        birthDate, setBirthDate,
        taxPayerId, setTaxPayerId, } = useContext(FromContext);
    const { formState: { errors } } = useForm();
    return (
        <div>
            <h2 className='text-gray-800 text-3xl font-bold mb-3 pl-3 md:pl-0'>Personal Details</h2>
            <form>
                <div>
                    <div className='flex justify-start flex-col md:flex-row items-center'>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="firstName" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                First name
                            </label>
                            <input
                                required
                                id='firstName'
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block label-text ">
                                Last name
                            </label>
                            <input
                                required
                                id='last-name'
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-start flex-col md:flex-row items-center'>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Mobile Number
                            </label>
                            <input
                                required
                                id='mobileNumber'
                                type="number"
                                name="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => {
                                    setMobileNumber(e.target.value);
                                }}
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Email
                            </label>
                            <input
                                required
                                id='email'
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-start flex-col md:flex-row items-center'>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Birth Date
                            </label>
                            <input
                                required
                                id='birthDate'
                                type="date"
                                name="birthDate"
                                value={birthDate}
                                onChange={(e) => {
                                    setBirthDate(e.target.value);
                                }}
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className='mr-5 my-2 pl-3 md:pl-0'>
                            <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                                Taxpayer ID
                            </label>
                            <input
                                required
                                id='taxPayerId'
                                type="text"
                                name="taxPayerId"
                                value={taxPayerId}
                                onChange={(e) => {
                                    setTaxPayerId(e.target.value);
                                }}
                                className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StepOne;