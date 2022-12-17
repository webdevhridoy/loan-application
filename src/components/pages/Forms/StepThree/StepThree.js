import React from 'react';
import { toast } from 'react-hot-toast';

const StepThree = ({ register, handleSubmit, reset: hookReset, page, setPage }) => {
    const handleSubmitForm = (data, e) => {
        if (data) {
            fetch('https://dygnify-ventures-server.vercel.app/loans-info', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Submission completed');
                        hookReset();
                        e.target.reset();
                    }
                });
        }
    };
    return (
        <div>
            <h2 className='text-gray-800 text-3xl font-bold mb-3 pl-3 md:pl-0'>Loan Details</h2>
            <form form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="loanAmount" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Loan Amount
                        </label>
                        <input
                            {...register("loanAmount")}
                            id='loanAmount'
                            type="text"
                            name="loanAmount"
                            placeholder='$'
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="monthlyIncome" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block label-text ">
                            Monthly Income
                        </label>
                        <input
                            {...register("monthlyIncome")}
                            id='monthlyIncome'
                            type="text"
                            name="monthlyIncome"
                            placeholder='$'
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="interestRate" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Interest Rate
                        </label>
                        <input
                            {...register("interestRate")}
                            id='interestRate'
                            type="text"
                            name="interestRate"
                            placeholder='%'
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="loanTenure" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Loan Tenure
                        </label>
                        <input
                            {...register("loanTenure", { required: "Field Address is required" })}
                            id='loanTenure'
                            type="text"
                            name="loanTenure"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="loanPurpose" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Purpose of Loan
                        </label>
                        <select
                            required
                            {...register("loanPurpose", { required: "Field Address is required" })}
                            id='loanPurpose'
                            type="text"
                            name="loanPurpose"
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2">
                            <option value="">Select Purpose of Loan</option>
                            <option value="Business">Business</option><option value="Home Purchase">Home Purchase</option>
                            <option value="Car Purchase">Car Purchase</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Investment">Investment</option>
                            <option value="Payday Loan">Payday Loan</option>
                            <option value="Startup">Startup</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className='pl-3 md:pl-0 pt-5'>
                    <button onClick={() => {
                        const nextPage = page - 1;
                        setPage(nextPage);
                    }}
                        type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Back</button>
                    <button type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default StepThree;