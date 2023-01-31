import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <video src={"https://www.w3schools.com/html/movie.mp4"} loop autoPlay />
      <div>
        <Link href="/firstpage">firstpage</Link>
      </div>

      <Link href="/practicePage">practicePage</Link>
      <br />
      <Link href="/SegmentedPractice">SegmentedPractice</Link>
      <br />
      <br />
      <Link href="/TableData">Table</Link>
      <br />
      <br />
      <Link href="/PersonInFo">PersonInFo</Link>
    </div>
  );
}
