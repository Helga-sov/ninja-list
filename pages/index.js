import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas"></meta>
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
					laoreet arcu. Vestibulum a euismod diam, eget cursus justo. Morbi vel
					vehicula sem. Morbi id scelerisque orci. Suspendisse et venenatis
					ante.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
					laoreet arcu. Vestibulum a euismod diam, eget cursus justo. Morbi vel
					vehicula sem. Morbi id scelerisque orci. Suspendisse et venenatis
					ante.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
