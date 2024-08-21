import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import HomeHero from "@/components/HomeHero";
import HomeListAll from "@/components/HomeListAll";
import AdSense from "@/components/AdSense";
import { AdblockDetector } from 'adblock-detector';
import { Ads } from "@/components/Ads"
// discord Invitation
import { useEffect } from "react";
import { toast } from "sonner";
import { FaDiscord, FaDonate } from "react-icons/fa";
import useDeviceSize from "@/Utils/useDeviceSize";
// discord Invitation

export default function Template({ children }: { children: React.ReactNode }) {
const adbDetector = new AdblockDetector() // call 
const userHasAdblock = adbDetector.detect() // detect adblock it return ture or false
  return (
    <div className={styles.Home}>
      <HomeHero />
      <HomeListAll />
      <AdSense pId="ca-pub-9098691343505810"/>
      {userHasAdblock ? <Ads /> : null}

    </div>
  );
}
