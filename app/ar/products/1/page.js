"use client"
import Image from 'next/image'
import styles from '@/app/page.module.css'
import  Icon  from '@mdi/react';
import {mdiSwordCross} from '@mdi/js';
import MenuIntroduction from '@/app/menu';
import Link from 'next/link';
import AA1 from './a1';
import { motion, useScroll, useSpring } from "framer-motion";
export default function A1() {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
         <motion.div className="progress-bar" style={{ scaleX }} />
        <main className={styles.main1} style={{background:'rgba(205, 195, 177,.7)'}}>
      <div className={styles.description} style={{position:'fixed', maxWidth:'1220px', justifyContent:'space-between'}}>
        
        <MenuIntroduction/>
        {/* <h1 className={styles.card1}>Title</h1> */}
        <div className={styles.card1}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            
            <Icon path={mdiSwordCross} style={{marginRight:2}}size={1} />
            Istiqamah
          </a>
        </div>
        </div>
            <div className={styles.center2} style={{marginTop:'0vh'}}>
            <div className={styles.center3}>
            <AA1/>
            </div>
            </div>
        
        </main>
        </div>
  )}