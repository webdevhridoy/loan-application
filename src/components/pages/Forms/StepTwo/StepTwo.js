import React from 'react';

const StepTwo = ({ register, handleSubmit, page, setPage }) => {
    const handleSubmitForm = (data) => {
        if (data) {
            setPage(page + 1);
            console.log(data);
        }
    };
    return (
        // Business Details fields started
        <div>
            <h2 className='text-gray-800 text-3xl font-bold mb-3 pl-3 md:pl-0'>Business Details</h2>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="businessName" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Business name
                        </label>
                        <input
                            required
                            {...register("businessName")}
                            id='businessName'
                            type="text"
                            name="businessName"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="businessWebsite" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block label-text ">
                            Business Website
                        </label>
                        <input
                            required
                            {...register("businessWebsite")}
                            id='businessWebsite'
                            type="text"
                            name="businessWebsite"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="gstNo" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            GST No
                        </label>
                        <input
                            required
                            {...register("gstNo")}
                            id='gstNo'
                            type="number"
                            name="gstNo"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="address" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Address
                        </label>
                        <input
                            required
                            {...register("address")}
                            id='address'
                            type="text"
                            name="address"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="employerStatus" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Employer Status
                        </label>
                        <select {...register("employerStatus")}
                            required
                            id='employerStatus'
                            type="text"
                            name="employerStatus"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2">
                            <option >Select Employer Status</option>
                            <option value="Business">Business</option>
                            <option value="Self Employed">Self Employed</option>
                            <option value="Government Job">Government Job</option>
                            <option value="Private Job">Private Job</option>
                            <option value="Student">Student</option>
                            <option value="Pension">Other</option>
                        </select>
                    </div>
                </div>
                <div className='pl-3 md:pl-0 pt-5'>
                    <button onClick={() => {
                        const nextPage = page - 1;
                        setPage(nextPage);
                    }}
                        type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Back</button>
                    <button type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default StepTwo;