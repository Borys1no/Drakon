import React, { useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Users } from "lucide-react";

const DashboardStats = () => {
  const [TotalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      setTotalUsers(snapshot.size);
    });

    return () => unsubscribe();
  }, []);


const stats = [
  {
    title: "Total de usuarios",
    icon: Users,
    iconBg: "var(--blue-100)",
    iconColor: "var(--blue-600)",
    value : TotalUsers,
  },
];

return (
    <div>
        {stats.map((stat, index) => (
            
            <div key={index} style={{backgroundColor: stat.iconBg, color: stat.iconColor}}>
            <stat.icon />
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
            </div>
        ))};

    </div>

);
};

export default DashboardStats;
