import image from '../../img/image.svg';
import styles from "./CardForm.module.css";

import { collection, addDoc } from "firebase/firestore"
import { useState } from "react";
import { db } from "../../firebaseConfig"

function CardForm() {

      const [name, setName] = useState("");
      const [comment, setComment] = useState("");

      const userColectionRef = collection(db, "users");

      async function CreateUser(){
        const user = await addDoc(userColectionRef, {
            name, comment,
        });
        console.log(user);
      }


    return (
        <section className={styles.card_container}>

            <div>
                <div>
                    <h3>Let your comment<br/> here, about my profile,<br/> codes...</h3>
                    <img src={image} alt="LetYourComment" />
                </div>

                <div>
                    <input type="text" placeholder="Name..." value={name} onChange={e => setName(e.target.value)}/>
                    <textarea type="text" placeholder="Let your comment, please." value={comment} onChange={e => setComment(e.target.value)}></textarea>
                    <button onClick={CreateUser}>Publish</button>
                </div>
            </div>

        </section>
    )
}

export default CardForm;