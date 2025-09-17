import React from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'




function AddExpense() {

    const {groupId} = useParams<{groupId: string}>();
    
    const navigate = useNavigate();
    // console.log("inside add expense",token,user)

    const [description,setDescription] = useState("");
    const [amount, setAmount] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("");


  const handleAddExpense = async (e: React.FormEvent) =>{
       
           e.preventDefault();
           setError("");
           if(!groupId) return setError("Group not found");

           if(!description.trim() || !amount || Number(amount) <=0 ){
                return setError("Please enter a valid description and amount")
           }

           setLoading(true);

           try {
              
            //Post request to backend
             const res = await axiosInstance.post(`groups/${groupId}/add-expense`,{
                description,
                amount: Number(amount),
             });
              
             console.log("Create expense response:", res?.data);
               setAmount(res.data.amount);
               setDescription(res.data.description);

             navigate(`/groups/${groupId}`)
           } catch (error:any) {
               console.error("Error adding expense:", error);
               setError(error?.response?.data?.error || error?.message || "Error adding expense")
           } finally{
               setLoading(false);
           }

  }

  return (
    <div className='p-6 max-w-md mx-auto'> 
            <h1>Add expense</h1>

            {error && <p className='text-red-500'> {error}</p>}

             <form onSubmit={handleAddExpense}>
                 <div>
                    <label className='block mb-1'>Description</label>
                    <input
                     value={description}
                     onChange={(e)=> setDescription(e.target.value)}
                     className="w-full border p-2 rounded"
                     placeholder="e.g. Dinner at restaurant"
                    />
                 </div>

                 <div>
          <label className="block mb-1">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            step="0.01"
            className="w-full border p-2 rounded"
            placeholder="e.g. 500"
            required
          />
        </div>

        <button
         type='submit'
         disabled={loading}
         className='w-full bg-blue-600 text-white rounded disabled:opacity-50'>
            {loading? "Adding...": "Add Expense"}
        </button>
             </form>
    </div>
  )
}

export default AddExpense