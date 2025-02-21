import { useEffect, useState, useTransition } from "react"
import { useParams } from "react-router-dom"
import { AXIOS_INSTANCE } from "../constants/axios"
import { format } from "date-fns";

function UserDetails() {
    const { id } = useParams()
    const [user, setUser] = useState<any>(null);
    const [isPending, startTransition] = useTransition();

    async function fetchUserData() {
        try {
            const { data } = await AXIOS_INSTANCE.get(`/user/${id}`);
            console.log(data.data)
            startTransition(() => {
                setUser(data.data);
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="flex w-full items-center justify-center poppins-regular">
            <div className=" flex flex-col min-w-[352px] mt-5 border border-gray-200 rounded-md">
                <div className="flex-1 bg-white rounded-lg shadow-xl p-6">
                    <h4 className="text-xl text-gray-900">Account Info</h4>
                    {isPending || !user ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : (
                        <ul className="mt-2 text-gray-700">
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="w-24">Email:</span>
                                <span className="text-gray-700">{user?.email}</span>
                            </li>
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="w-24">DOB:</span>
                                <span className="text-gray-700">{
                                    user?.userInfo?.personalInfo?.dob && format(new Date(user?.userInfo?.personalInfo?.dob ), "yyyy-MM-dd")
                                }</span>
                            </li>
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="w-24">Mobile:</span>
                                <span className="text-gray-700">{user?.mobileNumber}</span>
                            </li>
                        </ul>
                    )}

                    <h4 className="mt-2 text-xl text-gray-900">Personal Info</h4>
                    {isPending || !user ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : (
                        <ul className="mt-1 text-gray-700">
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="w-24">Address:</span>
                                <span className="text-gray-700">{user?.userInfo?.personalInfo?.address}</span>
                            </li>
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="w-24">About:</span>
                                <span className="text-gray-700">{user?.userInfo?.personalInfo?.about}</span>
                            </li>
                        </ul>
                    )}

                    <h4 className="mt-2 text-xl text-gray-900">Financial Info</h4>
                    {isPending || !user ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : (
                        <ul className="mt-1 text-gray-700">
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="">Employment status:</span>
                                <span className="text-gray-700 ml-1">{user?.userInfo?.financialInfo?.employmentStatus}</span>
                            </li>
                            <li className="flex border-b py-2 text-[14px]">
                                <span className="">Savings/Investments:</span>
                                <span className="text-gray-700 ml-1">{user?.userInfo?.financialInfo?.savingsOrInvestments}</span>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserDetails