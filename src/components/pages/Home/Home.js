import React, { useContext, useState } from 'react';
import './Home.css';
import bgImage from '../../../assest/background.jpg';
import StepOne from '../Forms/StepOne/StepOne';
import StepTwo from '../Forms/StepTwo/StepTwo';
import StepThree from '../Forms/StepThree/StepThree';
import { FromContext } from '../../../FormContext/FromProvider';
const Home = () => {
    const { firstName, lastName, mobileNumber, email, birthDate, taxPayerId, businessName, businessWebsite, gstNo, address, employerStatus, loanAmount, monthlyIncome, interestRate, loanTenure, loanPurpose } = useContext(FromContext);
    const [page, setPage] = useState(1);
    const handleSubmitForm = () => {
        const userInfo = {
            firstName,
            lastName,
            mobileNumber,
            email,
            birthDate,
            taxPayerId,
            businessName,
            businessWebsite,
            gstNo,
            address,
            employerStatus,
            loanAmount,
            monthlyIncome,
            interestRate,
            loanTenure,
            loanPurpose
        };
        console.log(userInfo);
    };
    return (
        <>
            <div className="bg-no-repeat bg-cover bg-center h-80 flex flex-col justify-center md:items-start items-center md:pl-20"
                style={{ backgroundImage: `url(${bgImage})` }}>
                <div>
                    <h2 className='text-white text-6xl font-bold'>Appy Now</h2>
                    <p className='text-white text-lg font-thin mt-2 text-center'>We provide best services for your loans</p>
                </div>
            </div>
            <div className='bg-[#F2EDE9] md:pl-20 py-20'>
                <div className="App">
                    <div>
                        {
                            page === 1 ? <StepOne></StepOne> : page === 2 ? <StepTwo></StepTwo> : <StepThree ></StepThree>
                        }
                    </div>
                    <div className='mt-5'>
                        {
                            page > 1 && <button onClick={() => {
                                const nextPage = page - 1;
                                setPage(nextPage);
                            }}
                                type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Back</button>
                        }
                        {
                            page < 3 && <>
                                <button onClick={() => {
                                    const nextPage = page + 1;
                                    setPage(nextPage);
                                }}
                                    type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Next</button>
                            </>
                        }
                        {
                            page === 3 && <>
                                <button onClick={handleSubmitForm}
                                    type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-3 px-6 rounded mr-2 bg-gray-800'>Submit</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;