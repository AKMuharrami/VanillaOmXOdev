"use client"
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import styles from '@/app/page.module.css'
import  Icon  from '@mdi/react';
import {mdiFlower} from '@mdi/js';
// import { Helmet } from "react-helmet-async";
import MenuIntroduction from "../menu1";
import MenuIntroduction1 from "../menu1m";

export default function Teamm() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
    <div   style={{background: 'rgba(205, 195, 177,.7)', width: "100vw", paddingBottom:'70px', zIndex:-1, height:'100vh'}}>
        {isDesktopOrLaptop &&<div className={styles.description} style={{position:'fixed', maxWidth:'1220px', padding:'3%',display:'flex',justifyContent:'space-between', marginLeft:'5%'}}>
        
        
        <MenuIntroduction/>
        {/* <h1 className={styles.card1}>Title</h1> */}
        <div className={styles.card1} style={{marginTop:'0%'}}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            
            <Icon path={mdiFlower} style={{marginRight:'0%'}}size={.9} />
            VanillaOm
          </a>
        </div>
        </div>}

        {isTabletOrMobile &&<div className={styles.description2} style={{position:'fixed',display:'-webkit-inline-box', padding:'3%', marginTop:'10%'}}>
      <MenuIntroduction1/>
        <div className={styles.card3} style={{position:'relative', height:'6vh', alignItems:'center', marginLeft:'57%', marginTop:'-5%'}}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
            
            
          >
            
            <Icon path={mdiFlower } size={.9} />
            VanillaOm
          </a>
        </div>
        </div>}
        {/* <Helmet>
          <title>Asad Al Muharrami</title>
          <meta name="description" content="I live in Muscat Oman. and I'm capable in designing websites in HTML, CSS, Javascript, React."/>
          <link rel="canonical" href="/about"/>
          </Helmet> */}
        <div style={{background: 'rgba(205, 195, 177,.0)', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'8vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'rgba(78, 55, 36, 0.4)', height:'55vh', direction:'ltr', marginTop:'5%'}}>
            {/* <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png" alt=""></img> */}
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'4.5vh', width:'97vw', right:0, textAlign:'center'}}>
                <h2 style={{color:'#F2F0DF', opacity:'1'}}>VanillaOm is a local business <br></br> that is based in Muscat - Oman <br></br><br></br> After we have seen the lack of Vanilla products in Oman we decided to take it<br></br> upon ourselves to provide quality guranteed Vanilla products to satisfy the demand.<br></br><br></br>We select our products from countries that are well known for their Quality Vanilla,<br></br> such as Papua New Guinea, Indonesia and Zanzibar In Sha Allah<br></br><br></br> We offer:</h2>
                <div style={{marginTop:'2vh', display:'flex',width:'60%',marginLeft:'20%', justifyContent:'space-around'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:3}}>Vanilla Beans</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:3}}>Vanilla Powder</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:3}}>Vanilla Extract</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:3}}>Vanilla Paste</h3></button>
                    {/* <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>Next js</h3></button> */}
                     </div>
            </motion.div>
                    <br></br>
            </div>}
            {isTabletOrMobile &&<div style={{display:'flex', justifyContent:'space-between', background:'rgba(78, 55, 36, 0.4)', height:'40vh', marginTop:'15%'}}>
            {/* <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png"  alt="" style={{width:'28vw', objectFit:'cover'}}></img> */}
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'4.5vh'}}>
                <h4 style={{color:'#F2F0DF', opacity:'1', fontSize:'1.7vh', marginRight:'1vw', marginLeft:'1vw', textAlign:'center'}}>VanillaOm is a local business <br></br> that is based in Muscat - Oman <br></br><br></br> After we have seen the lack of Vanilla products in Oman we decided to take it upon ourselves to provide quality guranteed Vanilla products to satisfy the demand.<br></br><br></br>We select our products from countries that are well known for their Quality Vanilla, such as Papua New Guinea, Indonesia and Zanzibar In Sha Allah<br></br><br></br> We offer:</h4>
                <div style={{marginTop:'2vh', display:'flex', justifyContent:'space-around'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"11px", height:'4vh',width:'21vw',textAlign:'center',lineHeight:2.9}}>Vanilla Beans</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"11px", height:'4vh',width:'22vw',textAlign:'center',lineHeight:2.9}}>Vanilla Powder</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"11px", height:'4vh',width:'22vw',textAlign:'center',lineHeight:2.9}}>Vanilla Extract</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"11px", height:'4vh',width:'21vw',textAlign:'center',lineHeight:2.9}}>Vanilla Paste</h3></button>
                    {/* <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"17px", height:'2vh',width:'8vw',textAlign:'center',lineHeight:2.2}}>Next js</h3></button> */}
                     </div>
            </motion.div>
                    <br></br>
            </div>}
    </div>)}