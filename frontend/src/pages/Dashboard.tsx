import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

interface DashboardProps {
  user: any;
  token: string | null;
}

interface Group {
  id: string;
  name: string;
  members: string[];
}

function Dashboard({ user, token }: DashboardProps) {
    const navigate = useNavigate();

    const [groups,setGroups] = useState<Group[]>([]);
    const [newGroupName,setNewGroupName] = useState("");
    const [loading, setLoading] = useState(false);
  
       
    useState(() => {
          
         const fetchGroups = async() =>{


               try {
                     const res = await axiosInstance.get("/groups")

                       setGroups(res.data);
               } catch (error) {
                  console.log("Error while fetching groups", error)
               }
         }
    })
  
  
    return (
    <div>
      Dashboard — User: {JSON.stringify(user)}, Token: {token}
    </div>
  );
}

export default Dashboard;
