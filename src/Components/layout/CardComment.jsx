import styles from "./CardComment.module.css"
import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

function CardComment(){

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyCby7tmWVQQwMRZqpioPNx7X5peKmktMUY",
        authDomain: "letyourcomment.firebaseapp.com",
        projectId: "letyourcomment",
      });

      const [users, setUsers] = useState([]);

      const db = getFirestore(firebaseApp);
      const userColectionRef = collection(db, "users");

      useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userColectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getUsers();
      }, [])

    return(
        <section className={styles.comment_container}>
            {users.map(user => {
                return(
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.comment}</p>
                        
                </div> 
                )
            })}
        </section>
    )
}

export default CardComment;