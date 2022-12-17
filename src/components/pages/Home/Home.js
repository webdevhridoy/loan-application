import React, { useState } from 'react';
import './Home.css';
import bgImage from '../../../assest/background.jpg';
import StepOne from '../Forms/StepOne/StepOne';
import StepTwo from '../Forms/StepTwo/StepTwo';
import StepThree from '../Forms/StepThree/StepThree';
import { useForm } from 'react-hook-form';
const Home = () => {
    const { register, handleSubmit, } = useForm();
    const [page, setPage] = useState(1);

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
                <div>
                    <div>
                        {
                            page === 1 ? <StepOne page={page} setPage={setPage} register={register} handleSubmit={handleSubmit}></StepOne> : page === 2 ? <StepTwo page={page} setPage={setPage} register={register} handleSubmit={handleSubmit}></StepTwo> : <StepThree page={page} setPage={setPage} register={register} handleSubmit={handleSubmit}></StepThree>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;