import styles from "./home.module.scss";
import BigBanner from "./BigBanner";
import Divider from "../../components/Divider";
import Promo from "./Promo";
import Sale from "./Sale";
import New from "./NewProduct";

const Home = (props) => {
    document.title = props.title;

    return (
        <div className={styles.home}>
            <BigBanner />
            <Divider />
            <Promo />
            <Divider />
            <img src="//cache.mrporter.com/content/images/cms/ycm/resource/blob/23579154/87300c93e472f1057389b4a34e4e609d/desktop-jpg-1--data.jpg/w1920_q80.jpg"></img>
            <Divider />
            <New />
            <Divider />
            <Sale />
            <Divider />
        </div>
    );
};
export default Home;
