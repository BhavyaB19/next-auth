"use client"
import React from "react"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";

export default function ProfilePage({params}: any) {
    const router = useRouter();
    const [data, setData] = React.useState("nothing");

    const logout = async() => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout successful");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }   
    }

    const getUserDetails = async() => {
        const response = await axios.get('/api/users/me');
        console.log(response.data);
        setData(response.data.data._id);
    }

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr/>
        <p>Profile page</p>
        <h2 className="text-2xl p-3 rounded bg-green-700 mt-3">
            {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
        </h2>
        <hr />
        <button 
        className="p-2 rounded bg-orange-500 text-black mt-4 font-bold"
        onClick={logout}
        >
            Logout
        </button>
        <button 
        className="p-2 rounded bg-yellow-500 text-black mt-4 font-bold"
        onClick={getUserDetails}
        >
            Get User Details
        </button>
    </div>
    )
}