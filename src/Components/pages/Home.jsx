import CardComment from "../layout/CardComment";
import CardForm from "../layout/CardForm";
import Divisor from "../layout/Divisor";
import styles from "./Home.module.css";

function Home() {
    return(
        <body>
            <CardForm/>
            <Divisor/>
            <h2 className={styles.h2}>Veja alguns comentários</h2>
            <CardComment/>
            {/* <CardComment/> */}
        </body>
    )
}

export default Home;