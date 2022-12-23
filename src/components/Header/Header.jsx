import { useState } from "react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import styles from "./header.module.scss";
import "./header.module.scss";
import { Logo } from "../Icons";
import { Search, Cart, User } from "../Icons";
import CartButton from "./CartButton";
import { SearchInput } from "./SearchInput";
function Header() {
    const [user, setUser] = useState(localStorage.getItem("user"));

    const handleOrderClick = () => {
        // const phoneNumber = JSON.parse(localStorage.getItem('user')).phoneNumber.toString();
        // const userPhoneNumber = phoneNumber.replace('+84', '0');
        // getHistoryOrders(dispatch, userPhoneNumber);
    };
    return (
        <header className={styles.heading}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <i>
                                <Logo />
                            </i>
                        </div>
                    </Link>
                </div>
                <span className={styles.tools}>
                    <SearchInput />

                    <Link to="/shopping-bag" className={styles.cart}>
                        <CartButton />
                    </Link>
                    <Link to="/account" className={styles.profile}>
                            <i>
                                <User />
                            </i>
                        </Link>
                </span>
            </div>
            <div className={styles.bottom}>
                <HeaderNav />
            </div>
        </header>
    );
}

export default Header;
