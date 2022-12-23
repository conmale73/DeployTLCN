import { useState, useEffect } from "react";
import { LocationForm } from "../../../components/LocationForm";
import Input from "./Input";
import { updateUsers } from "../../../redux/user/userApi";
import moment from "moment";
import { useDispatch } from "react-redux";

const AccountDetail = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { address } = user;
    const phoneNumber = user.phone.toString();
    const [edit, setEdit] = useState(false);
    const stringAddress = `${address.homeAdd}, ${address.ward}, ${address.district}, ${address.city}`;
    const [addressOption, setAddresOption] = useState();

    const [name, setName] = useState(user.name);

    const dispact = useDispatch();

    const handleClickGender = (id) => {
        setCheckGender(id);
    };
    const handleSubmitInfo = (e) => {
        e.preventDefault();
        const name = document.getElementById("fullname").value;
        const phone = document.getElementById("phone").value;
        const homeAdd = document.getElementById("homeAddress").value;

        const dataPost = {
            id: user.id,
            name: name,
            phone: phone,
            address: { homeAdd, ...addressOption },
        };

        console.log("datapost: ", dataPost);
        localStorage.setItem("user", JSON.stringify(dataPost));
        updateUsers(dispact, dataPost);

        alert("Update Profile Success")
        window.location.reload();
    };

    
    useEffect(() => {
        const setUserInfo = () => {
            let userInfo = localStorage.getItem("user");
            if (userInfo) {
                userInfo = JSON.parse(userInfo);

                console.log(userInfo);
                document.getElementById("fullname").value = userInfo.name;
                document.getElementById("phone").value = userInfo.phone;
                // document.getElementById("homeAddress").value = userInfo.address.homeAdd;
            }
        };
        setUserInfo();
    }, []);
    return (
        <div className="text-gray-800">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-4xl">Account Detail</h3>
                <button
                    className="text-yellow-300"
                    onClick={(e) => setEdit((old) => !old)}
                >
                    {edit ? "Cancel" : "Edit"}
                </button>
            </div>

            <form onSubmit={(e) => handleSubmitInfo(e)}>
                <div className="my-4">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="text-2xl py-4 rounded-xl mr-8 border-gray-200"
                        disabled={!edit}
                        id="fullname"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        required
                    />
                    <input
                        type="tel"
                        name="id"
                        className="text-2xl py-4 rounded-xl border-gray-200"
                        value={phoneNumber}
                        disabled
                        id="phone"
                        required
                    />
                </div>
                <h3 className="font-semibold text-4xl">Address</h3>
                {!edit && (
                    <input
                        type="text"
                        className="text-2xl py-4 rounded-xl mr-8 border-gray-200"
                        value={stringAddress}
                        style={{ width: "34%" }}
                        disabled={!edit}
                        required
                    ></input>
                )}

                {edit && (
                    <>
                        <Input
                            placeholder="Apartment number, Street"
                            id="homeAddress"
                            required={true}
                        />

                        <LocationForm
                            onChange={(e) => {
                                setAddresOption(e);
                            }}
                        />
                        <button
                            type="submit"
                            disabled={!edit}
                            className="bg-indigo-500 cursor-pointer text-white px-7 py-3  rounded-md "
                        >
                            UPDATE
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};
export default AccountDetail;
