import styles from "./login.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Divider from "../../../components/Divider";
import { userServices } from "../../../service/user.service";
import { auth } from "../../../../firebase";
import clsx from "clsx";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import moment from 'moment'

const Login = () => {
    const [txtPhoneNumber, setTxtPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [flag, setFlag] = useState(false);

    const configureCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    handleSubmit();
                },
            },
            auth
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "+84" + txtPhoneNumber;

        if (
            phoneNumber.length < 9 ||
            phoneNumber === "" ||
            phoneNumber === undefined
        ) {
            alert("Số điện thoại không hợp lệ");
        } else {
            setFlag(true);
            configureCaptcha();
            const appVerifier = window.recaptchaVerifier;
            console.log(phoneNumber);

            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    // ...
                    console.log("OTP has been sent");
                })
                .catch((error) => {
                    console.log("SMS not sent");
                    alert("Something went wrong, please try again")
                    console.log(error);
                    appVerifier.clear();
                });
        }
    };
    const generateString = (length) => {
        const characters = "0123456789";
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }

        return parseInt(result);
    };
    const submitOTP = (e) => {
        e.preventDefault();

        const code = otp;

        
        window.confirmationResult
            .confirm(code)
            .then((result) => {
                // User signed in successfully.

                userServices.getUserByPhone(txtPhoneNumber).then((res) => {
                    if (res.length > 0) {
                        localStorage.setItem("user", JSON.stringify(res[0]));
                        window.location.reload();
                    } else {
                        const dataPost = {
                            id: generateString(5),
                            name: "Khách hàng",
                            address: {
                                "homeAdd": "",
                                "ward": "",
                                "district": "",
                                "city": ""
                            },
                            phone: txtPhoneNumber,
                            create_date: moment().format('HH:MM MM/DD, YYYY'),
                        }
                        userServices.createUser(dataPost).then((res) => {
                            localStorage.setItem("user", JSON.stringify(dataPost));
                            window.location.reload();
                        });
                    }
                });
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                alert("OTP is not correct");
            });
    };

    const changeNum = (e) => {
        e.preventDefault();
        setFlag(false);
        window.grecaptcha.reset();
    };
    return (
        // <div className={styles.login}>
        //     <div className={styles.container}>
        //         {alert && (
        //                 <p className={styles.alert}>Đăng nhập thất bại</p>
        //             )}
        //         <form onSubmit={(e) => handleSubmit(e)}>
        //             <h1>Sign In</h1>
        //             <input
        //                 type="text"
        //                 placeholder="Username"
        //                 value={username}
        //                 name="username"
        //                 onChange={onChangeLoginForm}
        //             />
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 value={password}
        //                 name="password"
        //                 onChange={onChangeLoginForm}
        //             />

        //             <button className={styles.btn}>Login</button>
        //             <Divider />
        //         </form>
        //         <p>Don't have an account?</p>
        //         <Link to="/register">
        //             <button className={styles.btnRegister}>
        //                 Create Account
        //             </button>
        //         </Link>
        //     </div>
        // </div>

        <div className={styles.login}>
            <div
                className={clsx("d1", "step1")}
                style={{ display: !flag ? "block" : "none" }}
            >
                <img src="https://www.thegioididong.com/lich-su-mua-hang/images/i1.png"></img>
                <span>ORDER INFORMATION</span>
                <form id="frmGetVerifyCode" onSubmit={(e) => handleSubmit(e)}>
                    <div id="sign-in-button" style={{ display: "none" }}></div>
                    <input
                        type="number"
                        value={txtPhoneNumber}
                        placeholder="Please enter your phone number"
                        autoComplete="off"
                        onChange={(e) => setTxtPhoneNumber(e.target.value)}
                        onInput={(e) => {
                            e.target.value = Math.max(
                                0,
                                parseInt(e.target.value)
                            )
                                .toString()
                                .slice(0, 9);
                        }}
                        className={styles.input}
                    ></input>
                    <button
                        type="submit"
                        className={styles.btn}
                        id="submitPhone"
                    >
                        Continue
                    </button>
                </form>
            </div>

            <div
                className={clsx("d2", "step2")}
                style={{ display: flag ? "block" : "none" }}
            >
                <span className="s1">
                    OTP has been sent to <b>{txtPhoneNumber}</b>
                </span>
                <form id="frmSubmitVerifyCode" onSubmit={(e) => submitOTP(e)}>
                    <input
                        type="number"                        
                        value={otp}
                        placeholder="Enter OTP"
                        onChange={(e) => setOtp(e.target.value)}
                        className={styles.input}
                        onInput={(e) => {
                            e.target.value = Math.max(
                                0,
                                parseInt(e.target.value)
                            )
                                .toString()
                                .slice(0, 6);
                        }}
                    ></input>
                    <button className={styles.btn} id="submitOTP">
                        CONTINUE
                    </button>
                </form>
                {/* <a className="resend-sms" href="javascript:GetVerifyCode(1)">
                    Tôi không nhận được mã, vui lòng gửi lại
                </a> */}

                <a
                    className={styles.btnChangeNum}
                    onClick={(e) => changeNum(e)}
                >
                    Change phone number
                </a>
            </div>
        </div>
    );
};
export default Login;
