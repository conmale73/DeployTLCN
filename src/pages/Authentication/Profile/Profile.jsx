import styles from "./profile.module.scss";
import { useState } from "react";
import clsx from "clsx";
import AccountDetail from "./AccountDetail";
import Orders from "./Orders";
import Divider from "../../../components/Divider";
import Welcome from "../Welcome";
const Profile = () => {
    const [tab, setTab] = useState(0);

    const activeTabStyle = "bg-blue-300 text-white rounded-full";
    return (
        
            <div className=" min-h-[100vh]">
                <div className="w-full max-w-[1200px] mx-auto py-8">
                    <Welcome/>
                    <Divider/>
                    <div className="mr-8 flex border-b">
                        <div
                            onClick={() => setTab(0)}
                            className={clsx(
                                "flex w-full items-center my-2 p-4 cursor-pointer",
                                0 === tab && activeTabStyle
                            )}
                        >
                            <div className="w-12 h-12">
                                <img
                                    className="object-cover"
                                    src="https://cdn.tgdd.vn/mwgcart/orderhistory/images/icon-list.png"
                                />
                            </div>
                            <p className="text-2xl font-medium ml-4">Orders</p>
                        </div>
                        <div
                            onClick={() => setTab(1)}
                            className={clsx(
                                "flex w-full items-center my-2 p-4 cursor-pointer",
                                1 === tab && activeTabStyle
                            )}
                        >
                            <div className="w-12 h-12 items-center">
                                <img
                                    className="object-cover"
                                    src="https://cdn.tgdd.vn/mwgcart/orderhistory/images/icon-user-large.png"
                                ></img>
                            </div>
                            <p className="text-2xl font-medium ml-4">
                                Account Detail
                            </p>
                        </div>
                    </div>
                    <div className="">
                        {tab === 0 ? <Orders /> : <AccountDetail />}
                    </div>
                </div>
            </div>
        
    );
};
export default Profile;
