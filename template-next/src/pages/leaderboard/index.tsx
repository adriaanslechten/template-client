import Link from "next/link";
import styles from "./leaderboard.module.css";

const users = [
  { id: 1, name: "User One", score: 100 },
  { id: 2, name: "User Two", score: 90 },
  { id: 3, name: "User Three", score: 80 },
  { id: 4, name: "User Four", score: 70 },
  { id: 5, name: "User Five", score: 60 },
  { id: 6, name: "User Six", score: 50 },
  { id: 7, name: "User Seven", score: 40 },
  { id: 8, name: "User Eight", score: 30 },
  { id: 9, name: "User Nine", score: 20 },
  { id: 10, name: "User Ten", score: 10 },
];

const Leaderboard = () => {
  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} className={styles.item}>
            <Link href={`/user/${user.id}`}>
              <div className={styles.link}>{user.name}</div>
            </Link>
            <span className={styles.score}>{user.score} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
