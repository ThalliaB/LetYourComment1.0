import CardComment from "../layout/CardComment";
import CardForm from "../layout/CardForm";
import Divisor from "../layout/Divisor";
import styles from "./Home.module.css";

function Home() {
    return(
        <body>
            <CardForm/>
            <Divisor/>
            <h2 className={styles.h2}>See some comments</h2>
            <CardComment/>
        </body>
    )
}

export default Home;