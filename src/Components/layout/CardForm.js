import image from '../../img/image.svg';
import styles from "./CardForm.module.css";

function CardForm() {
    return (
        <section className={styles.home_container}>

            <table>
                <tr>
                    <th>
                        <h3>Let your comment<br/> here, about my profile,<br/> codes...</h3>
                        <img src={image} alt="LetYourComment" />
                    </th>

                    <th>
                        <input type="text" placeholder="Name..."/>
                        <textarea type="text" placeholder="Let your comment, please."></textarea>
                        <button>Publish</button>
                    </th>
                </tr>
            </table>



        </section>
    )
}

export default CardForm;