import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export const FromContext = createContext();
const FromProvider = ({ children }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [taxPayerId, setTaxPayerId] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessWebsite, setBusinessWebsite] = useState("");
    const [gstNo, setGstNo] = useState("");
    const [address, setaddress] = useState("");
    const [employerStatus, setEmployerStatus] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTenure, setLoanTenure] = useState("");
    const [loanPurpose, setLoanPurpose] = useState("");


    const fromInfo = {
        firstName, setFirstName,
        lastName, setLastName,
        mobileNumber, setMobileNumber,
        email, setEmail,
        birthDate, setBirthDate,
        taxPayerId, setTaxPayerId,
        businessName, setBusinessName,
        businessWebsite, setBusinessWebsite,
        gstNo, setGstNo,
        address, setaddress,
        employerStatus, setEmployerStatus,
        loanAmount, setLoanAmount,
        monthlyIncome, setMonthlyIncome,
        interestRate, setInterestRate,
        loanTenure, setLoanTenure,
        loanPurpose, setLoanPurpose,
        register, handleSubmit, errors

    };
    return (
        <FromContext.Provider value={fromInfo}>
            {children}
        </FromContext.Provider>
    );
};

export default FromProvider;