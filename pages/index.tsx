import type { NextPage } from 'next';
import AOS from 'aos';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/organism/Navbar';
import MainBanner from '../components/organism/MainBanner';
import TransactionStep from '../components/organism/TransactionStep';
import FeaturedGame from '../components/organism/FeaturedGame';
import Reached from '../components/organism/Reached';
import Story from '../components/organism/Story';
import Footer from '../components/organism/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
