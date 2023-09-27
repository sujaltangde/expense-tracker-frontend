import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FiSearch } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { TransactionCard } from '../components/TransactionCard';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllTransactions, makeTransaction } from '../actions/TransactionActions';
import { BiLoaderAlt } from 'react-icons/bi'



export const Home = () => {

    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.user)
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([])
    const { allTransactions, loading } = useSelector(state => state.transaction)

    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory] = useState("");

    const [searchKey, setSearchKey] = useState("")

    const addTransHandler = (e) => {
        e.preventDefault();

        if (amount == 0) {
            toast.info("Add value greater than 0 !")
        } else {
            const data = {
                amount: parseInt(amount),
                description,
                category,
                createdAt: date
            }

            dispatch(makeTransaction(data))

            setAmount(0);
            setCategory("")
            setDescription("")
            setDate("")
        }
    }


    const search = () => {
        const searchArr = transactions.filter((e) => (
            e.description.toLowerCase().includes(searchKey.toLowerCase().trim())
        ))

        if (searchKey === "") {
            const reversedTransactions = [...allTransactions].reverse();
            setTransactions(reversedTransactions)
        } else {

            setTransactions(searchArr)
        }
    }




    useEffect(() => {
        if (isLogin === false) {
            navigate("/login")
        }
    }, [isLogin])




    useEffect(() => {
        const call = () => {
            dispatch(getAllTransactions())
            const reversedTransactions = [...allTransactions].reverse();
            setTransactions(reversedTransactions)
        }
        call();
        search()

    }, [allTransactions, searchKey])





    return (
        <>
            <div className='min-h-screen  pt-14 '>

                <div className='flex flex-col justify-start items-start '>

                    <div className='w-full flex justify-center  md:flex-row flex-col'>

                        <div className='px-3 pb-4 pt-4   md:w-1/2 w-full '>
                            <div className='pb-3'>
                                <p className='text-2xl'>Add Transactions</p>
                            </div>
                            <form onSubmit={addTransHandler} action="" className='flex flex-col gap-3' >

                                <div>
                                    <input required
                                        onChange={(e) => {
                                            const value = e.target.value
                                            if (value < 0) {
                                                return;
                                            }
                                            setAmount(value);
                                        }}
                                        value={amount} type="number" placeholder='Amount' className='px-2 py-2 border outline-none border-gray-400 focus:border-black w-full  ' />
                                </div>
                                <div>
                                    <input required onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Description' className='px-2 py-2 border outline-none border-gray-400 focus:border-black w-full' />
                                </div>


                                <div className=' flex flex-wrap gap-8 pt-2 px-3 pb-2'>
                                    <div className='flex gap-1 text-lg font-medium  justify-center items-center'>
                                        <input checked={category === "expense"} value="expense" onChange={(e) => setCategory(e.target.value)} name='amount' type="radio" className='cursor-pointer' /> Expense</div>
                                    <div className='flex gap-1  text-lg font-medium justify-center items-center'>
                                        <input checked={category === "income"} value="income" onChange={(e) => setCategory(e.target.value)} name='amount' type="radio" className='cursor-pointer' /> Income</div>

                                    <div>
                                        <input onChange={(e) => setDate(e.target.value)} required value={date} type="date" name="" className='cursor-pointer' id="" />
                                    </div>
                                </div>
                                <div className=''>
                                    <button disabled={loading} className='bg-blue-800 flex justify-center items-center hover:bg-blue-900  px-6 text-white font-semibold py-2 w-full'>{loading ? <BiLoaderAlt className='animate-spin' size={24} /> : "Add Transaction"}</button>
                                </div>
                            </form>
                        </div>




                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='px-3 border-t border-gray-300 md:w-1/2 w-full'>
                            <div className='pt-2 pb-3'>
                                <p className='text-2xl'>Transactions</p>
                            </div>
                            <div className='pt-2 pb-3 '>
                                {/*  Search Functionality  */}
                                {allTransactions.length !== 0 && <div className='border pr-2 border-gray-500 flex items-center pl-2  w-full'>
                                    <FiSearch />
                                    <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search' className='px-3 outline-none  w-full  py-2  ' name="" id="" />
                                    <RxCross2 onClick={() => setSearchKey("")} size={19} className={`cursor-pointer
                    ${searchKey.length !== 0 ? "flex" : "hidden"}
                     `} />
                                </div>}
                            </div>
                            <div className='border-t border-gray-300'>

                            </div>
                            <div className='pt-4 flex flex-col gap-3 pb-12'>

                                {

                            transactions.length !== 0 ? 

                                    transactions.map((ele, i) => (
                                        <TransactionCard transaction={ele} key={i} />
                                    ))

                                    : 
                                    <>

                                        <p className='text-center'>No Transactions...</p>
                                    
                                    </>

                                }



                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
