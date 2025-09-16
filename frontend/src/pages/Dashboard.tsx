import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Users, ArrowRight } from "lucide-react";
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

    const [groups, setGroups] = useState<Group[]>([]);
    const [newGroupName, setNewGroupName] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const fetchGroups = async() => {
            try {
                const res = await axiosInstance.get("/groups")
                setGroups(res.data);
                // console.log(res)
            } catch (error) {
                console.log("Error while fetching groups", error)
            }
        }

        fetchGroups();
    }, [token])
  
    const handleCreateGroup = async() => {
        if(!newGroupName.trim()) return;

        setLoading(true);

        try {
            const res = await axiosInstance.post(
                "/groups",
                {name: newGroupName}
            );
            
            setGroups([...groups, res.data])
            setNewGroupName("")
        } catch (err) {
            console.log("Error creating group", err);
        } finally {
            setLoading(false);
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCreateGroup();
        }
    }
  
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Welcome back, {user.name}!
                            </h1>
                            <p className="text-gray-600">
                                Manage your groups and track expenses effortlessly
                            </p>
                        </div>
                        <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            <span>{groups.length} group{groups.length !== 1 ? 's' : ''}</span>
                        </div>
                    </div>
                </div>

                {/* Create Group Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Plus className="w-5 h-5 text-emerald-600" />
                        Create New Group
                    </h2>
                    
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Enter group name (e.g., Weekend Trip, House Expenses)"
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors placeholder-gray-400 text-gray-900"
                                disabled={loading}
                            />
                        </div>
                        <button
                            onClick={handleCreateGroup}
                            disabled={loading || !newGroupName.trim()}
                            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <Plus className="w-4 h-4" />
                                    Create Group
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Groups Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900">Your Groups</h2>
                        {groups.length > 0 && (
                            <p className="text-sm text-gray-500">Click on any group to view details</p>
                        )}
                    </div>
                    
                    {groups.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No groups yet</h3>
                            <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                Create your first group to start splitting expenses with friends, family, or colleagues.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {groups.map((group) => (
                                <div
                                    key={group.id}
                                    onClick={() => navigate(`/groups/${group.id}`)}
                                    className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md hover:border-emerald-200 transition-all duration-200 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                            {group.name.charAt(0).toUpperCase()}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    
                                    <h3 className="font-semibold text-gray-900 mb-2 text-lg line-clamp-2">
                                        {group.name}
                                    </h3>
                                    
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Users className="w-4 h-4 mr-1" />
                                        <span>{group.members?.length || 0} member{(group.members?.length || 0) !== 1 ? 's' : ''}</span>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <span>View details</span>
                                            <span>→</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../utils/axiosInstance";

// interface DashboardProps {
//   user: any;
//   token: string | null;
// }

// interface Group {
//   id: string;
//   name: string;
//   members: string[];
// }

// function Dashboard({ user, token }: DashboardProps) {
//     const navigate = useNavigate();

//     const [groups,setGroups] = useState<Group[]>([]);
//     const [newGroupName,setNewGroupName] = useState("");
//     const [loading, setLoading] = useState(false);
  
       
//     useEffect(() => {
          
//          const fetchGroups = async() =>{


//                try {
//                      const res = await axiosInstance.get("/groups")

//                        setGroups(res.data);
//                        console.log(res)
//                } catch (error) {
//                   console.log("Error while fetching groups", error)
//                }
//          }

//          fetchGroups();
//     }, [token])
  

//     const handleCreateGroup = async()=>{
          
//        if(!newGroupName) return;

//        setLoading(true);

//        try {
              
//            const res = await axiosInstance.post(
//                "/groups",
//                {name: newGroupName}
//            );

           
           
//            setGroups([...groups,res.data])
//            setNewGroupName("")
//        } catch (err) {
//       console.log("Error creating group", err);
//     } finally {
//       setLoading(false);
//     }
//     }
  
//     return (
//     <div className="p-8">
//       {/* Dashboard — User: {JSON.stringify(user)}, Token: {token} */}
//          <h1 className="text-2xl font-bold mb-4">Hello, {user.name}!</h1>
    
//        <div className="mb-6 flex gap-2">
//               <input
//                 type="text"
//                 placeholder="New group name"
//                 value={newGroupName}
//                 onChange={(e) => setNewGroupName(e.target.value)}
//                 className="px-4 py-2 border rounded-lg flex-1"
//               />

//               <button
//                onClick={handleCreateGroup}
//                disabled={loading}
//                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
//               >
//                   {loading? "Creating..." : "Create group"}
//               </button>
//        </div>

//         <h2 className="text-xl font-semibold mb-2">Your Groups:</h2>
    
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {groups.map((group)=>(
//                 <div
//                   key={group.id}
//                   onClick={() => navigate(`/group/${group.id}`)}
//                   className="p-4 bg-green-600 rounded-lg shadow cursor-pointer hover:bg-gray-100"
          
//                  >
//                    <h3 className="font-bold">{group.name}</h3>
//                    {/* <h3 className="text-sm text-gray-500">{group.members?.length || 0} members</h3> */}
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// }

// export default Dashboard;
