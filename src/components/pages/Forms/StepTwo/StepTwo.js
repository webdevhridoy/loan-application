import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FromContext } from '../../../../FormContext/FromProvider';

const StepTwo = () => {
    const { businessName, setBusinessName,
        businessWebsite, setBusinessWebsite,
        gstNo, setGstNo,
        address, setaddress,
        employerStatus, setEmployerStatus } = useContext(FromContext);
    const { register } = useForm();
    return (
        <div>
            <h2 className='text-gray-800 text-3xl font-bold mb-3 pl-3 md:pl-0'>Business Details</h2>
            <div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Business name
                        </label>
                        <input
                            {...register("businessName", { required: "Field Address is required" })}
                            id='businessName'
                            type="text"
                            name="businessName"
                            value={businessName}
                            onChange={(e) => {
                                setBusinessName(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />

                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block label-text ">
                            Business Website
                        </label>
                        <input
                            {...register("businessWebsite", { required: "Field Address is required" })}
                            id='businessWebsite'
                            type="text"
                            name="businessWebsite"
                            value={businessWebsite}
                            onChange={(e) => {
                                setBusinessWebsite(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />

                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            GST No
                        </label>
                        <input
                            {...register("gstNo", { required: "Field Address is required" })}
                            id='gstNo'
                            type="text"
                            name="gstNo"
                            value={gstNo}
                            onChange={(e) => {
                                setGstNo(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />

                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Address
                        </label>
                        <input
                            {...register("address", { required: "Field Address is required" })}
                            id='address'
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => {
                                setaddress(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />

                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Employer Status
                        </label>
                        <input
                            {...register("employerStatus", { required: "Field Address is required" })}
                            id='employerStatus'
                            type="text"
                            name="employerStatus"
                            value={employerStatus}
                            onChange={(e) => {
                                setEmployerStatus(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepTwo;