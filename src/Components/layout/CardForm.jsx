import image from '../../img/image.svg';
import styles from "./CardForm.module.css";

import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useState } from "react";

function CardForm() {

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyCby7tmWVQQwMRZqpioPNx7X5peKmktMUY",
        authDomain: "letyourcomment.firebaseapp.com",
        projectId: "letyourcomment",
      });

      const [name, setName] = useState("");
      const [comment, setComment] = useState("");

      const db = getFirestore(firebaseApp);
      const userColectionRef = collection(db, "users");

      async function CreateUser(){
        const user = await addDoc(userColectionRef, {
            name, comment,
        });
        console.log(user);
      }


    return (
        <section className={styles.card_container}>

            <table>
                <tr>
                    <th>
                        <h3>Let your comment<br/> here, about my profile,<br/> codes...</h3>
                        <img src={image} alt="LetYourComment" />
                    </th>

                    <th>
                        <input type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)}/>
                        <textarea type="text" placeholder="Let your comment, please." value={comment} onChange={e => setComment(e.target.value)}></textarea>
                        <button onClick={CreateUser}>Publish</button>
                    </th>
                </tr>
            </table>

        </section>
    )
}

export default CardForm;