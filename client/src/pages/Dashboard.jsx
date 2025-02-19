import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get("http://localhost:3000/dashboard", { withCredentials: true });
                setUser(response.data.userId);
                
            } catch (error) {
                console.error("Authentication failed:", error);
                navigate("/login"); 
            }
        };

        verifyUser();
    }, []);

    const handleLogout = async () => {
        await axios.post("http://localhost:3000/logout", {}, { withCredentials: true });
        navigate("/login");
    };


    return (
        <div>
            <h1>Dashboard</h1>
            <button
                onClick={handleLogout}
            >logout</button>
        </div>
    )
}

export default Dashboard;