import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FromContext } from '../../../../FormContext/FromProvider';

const StepThree = () => {
    const { loanAmount, setLoanAmount,
        monthlyIncome, setMonthlyIncome,
        interestRate, setInterestRate,
        loanTenure, setLoanTenure,
        loanPurpose, setLoanPurpose } = useContext(FromContext);
    const { register } = useForm();
    return (
        <div>
            <h2 className='text-gray-800 text-3xl font-bold mb-3 pl-3 md:pl-0'>Loan Details</h2>
            <div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Loan Amount
                        </label>
                        <input
                            {...register("loanAmount", { required: "Field Address is required" })}
                            id='loanAmount'
                            type="text"
                            name="loanAmount"
                            value={loanAmount}
                            onChange={(e) => {
                                setLoanAmount(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block label-text ">
                            Monthly Income
                        </label>
                        <input
                            {...register("monthlyIncome", { required: "Field Address is required" })}
                            id='monthlyIncome'
                            type="text"
                            name="monthlyIncome"
                            value={monthlyIncome}
                            onChange={(e) => {
                                setMonthlyIncome(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Interest Rate
                        </label>
                        <input
                            {...register("interestRate", { required: "Field Address is required" })}
                            id='interestRate'
                            type="text"
                            name="interestRate"
                            value={interestRate}
                            onChange={(e) => {
                                setInterestRate(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Loan Tenure
                        </label>
                        <input
                            {...register("loanTenure", { required: "Field Address is required" })}
                            id='loanTenure'
                            type="text"
                            name="loanTenure"
                            value={loanTenure}
                            onChange={(e) => {
                                setLoanTenure(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
                <div className='flex justify-start flex-col md:flex-row items-center'>
                    <div className='mr-5 my-2 pl-3 md:pl-0'>
                        <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block  label-text ">
                            Purpose of Loan
                        </label>
                        <input
                            {...register("loanPurpose", { required: "Field Address is required" })}
                            id='loanPurpose'
                            type="text"
                            name="loanPurpose"
                            value={loanPurpose}
                            onChange={(e) => {
                                setLoanPurpose(e.target.value);
                            }}
                            className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-96 pl-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepThree;