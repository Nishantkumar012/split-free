import React from 'react'

import { useEffect, useState } from 'react'
import { useParams, useNavigate} from "react-router-dom"
import axiosInstance from '../utils/axiosInstance'



interface Member{
    id: string;
    name: string
}
interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy? :{
    id: string;
    name: string;
  } | null;
  createdAt: string;
}

function GroupDetail() {

    // take out groupId from url
   const {groupId} = useParams<{ groupId: string}>()
   const navigate = useNavigate();

   const [groupName, setGroupName] = useState("")
   const [members,setMembers] = useState<Member[]>([])
   const [expenses,setExpense] = useState<Expense[]>([])
   const [loading, setLoading] = useState(true);

   useEffect(() =>{
       
    const fetchGroupDetail = async () =>{
        try {

            if(groupId){

                const res = await axiosInstance.get(`/groups/${groupId}`);
                setMembers(res.data.members);
                setGroupName(res.data.name);
                setExpense(res.data.expenses);
                
                console.log("specific group ki detail",res.data)
            }

            else{
                console.log("error occured")
            }
        } catch (error) {
             console.log("Error fetching group detail", error);
     
        } finally{
            setLoading(false);
        }
    }

      fetchGroupDetail();
   }, [groupId])

      if (loading) return <p className='p-6'>Loading group details</p>
    return (
    <div className='p-6'>

        
          <h1 className='text-xl font-semibold mb-2'>Members</h1>
          {members  ?(    <ul className='mb-6'>
           {members.map((m) => ( 
               <li key={m.id} className='text-gray-700'>
                {m.name}
               </li>
           ))}
        </ul>    ):(<p>No members yet</p>)}
   



      <h2 className='text-xl font-semibold mb-2'>Expenses</h2>
      <div>
        {expenses ? (
            expenses.map((exp) =>(

                <div
                key={exp.id}
                className='p-4 bg-white shadow rounded-lg border'>

                  <p className='font-bold'>{exp.description}</p>
                    <p>
                        {exp.amount} paid by{" "}
                        {/* <span className='font-medium'>{exp.paidBy}</span> */}
                          
                           {exp.paidBy?.name ? (
                                    <span className="font-medium">{exp.paidBy.name}</span>
                                ) : (
                                    <span className="text-gray-500 italic">Unknown</span>
                                )}
                        
                    </p>
                    <p>
                        {new Date(exp.createdAt).toLocaleDateString()}
                    </p>
                </div>
            ))
        ): (
            <p className="text-gray-500">No expenses yet.</p>
        )}
      </div>

        {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate(`/group/${groupId}/add-expense`)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Add Expense
        </button>
        <button
          onClick={() => navigate(`/group/${groupId}/settlements`)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Settle Up
        </button>
      </div>


    </div>
  )
}

export default GroupDetail