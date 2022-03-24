import Head from "next/head";
import Image from "next/image";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
      <Modal />
    </div>
  );
}
