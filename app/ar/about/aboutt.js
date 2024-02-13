"use client"
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import styles from '@/app/page.module.css'
import  Icon  from '@mdi/react';
import {mdiFlower} from '@mdi/js';
// import { Helmet } from "react-helmet-async";
import MenuIntroduction from "@/app/menu1ar";
import MenuIntroduction1 from "@/app/menu1arm";

export default function Teamm() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
    <div  style={{background: 'rgba(205, 195, 177,.7)', width: "100vw", paddingBottom:'70px', zIndex:-1, height:'100vh', direction:'rtl'}}>
        {isDesktopOrLaptop &&<div className={styles.description} style={{position:'fixed', maxWidth:'1220px', padding:'3%',display:'flex',justifyContent:'space-between', marginRight:'5%', direction:'rtl'}}>
        
        
        <MenuIntroduction/>
        {/* <h1 className={styles.card1}>Title</h1> */}
        <div className={styles.card1} style={{marginTop:'0%'}}>
          <a
            href="/ar"
            // target="_blank"
            rel="noopener noreferrer"
          >
            
            <Icon path={mdiFlower} style={{marginRight:'0%'}}size={.9} />
            فانيلا عمان
          </a>
        </div>
        </div>}
        {isTabletOrMobile &&<div className={styles.description2} style={{position:'fixed',display:'-webkit-inline-box', padding:'3%', marginTop:'10%'}}>
      <MenuIntroduction1/>
        <div className={styles.card3} style={{position:'relative', height:'6vh', alignItems:'center', marginRight:'57%', marginTop:'-5%'}}>
          <a
            href="/ar"
            // target="_blank"
            rel="noopener noreferrer"
            
            
          >
            
            <Icon path={mdiFlower } size={.9} />
            فانيلا عمان
          </a>
        </div>
        </div>}
        {/* <Helmet>
          <title>Asad Al Muharrami</title>
          <meta name="description" content="I live in Muscat Oman. and I'm capable in designing websites in HTML, CSS, Javascript, React."/>
          <link rel="canonical" href="/about"/>
          </Helmet> */}
        <div style={{background: 'rgba(205, 195, 177,.0)', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'8vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'space-between', background:'rgba(78, 55, 36, 0.4)', height:'55vh', direction:'rtl', marginTop:'5%'}}>
            {/* <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png" alt=""></img> */}
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'4.5vh', width:'97vw', right:0, textAlign:'center', marginRight:'1%'}}>
                <h2 style={{color:'#F2F0DF', opacity:'1'}}>فانيلا عمان هي مؤسسة محلية <br></br> أسست في عمان - مسقط <br></br><br></br> بعد أن رأينا شح منتجات الفانيلا المتوفرة رأينا<br></br> أن نعمل على نوفير منتجات الفانيلا الطبيعية المختلفة بأنواعها<br></br><br></br>نقوم باختيار منتجاتنا بعناية حيث تختار البلدان المعروفة بتصدير الفانيلا ذا الجودة العالية<br></br> من أمثال بابوا نيو جيني، أندونيسيا وزنجبار إن شاء الله تعالى.<br></br><br></br> نوفر:</h2>
                <div style={{marginTop:'2vh', display:'flex',width:'60%',marginRight:'20%', justifyContent:'space-around'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"21px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:2.5}}>أعواد الفانيلا</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"21px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:2.5}}>بودر الفانيلا</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"21px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:2.5}}>خلاصة الفانيلا</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"21px", height:'7vh',width:'12vw',textAlign:'center',lineHeight:2.5}}>معجون الفانيلا</h3></button>
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
                <h4 style={{color:'#F2F0DF', opacity:'1', fontSize:'1.9vh',textShadow: '1px 1px 10px rgb(10 11 29/ 90%)', marginRight:'1vw', marginLeft:'1vw', textAlign:'center'}}>فانيلا عمان هي مؤسسة محلية <br></br>  أسست في عمان - مسقط  <br></br><br></br> بعد أن رأينا شح منتجات الفانيلا المتوفرة رأينا أن نعمل على نوفير منتجات الفانيلا الطبيعية المختلفة بأنواعها <br></br><br></br>نقوم باختيار منتجاتنا بعناية حيث تختار البلدان المعروفة بتصدير الفانيلا ذا الجودة العالية من أمثال بابوا نيو جيني، أندونيسيا وزنجبار إن شاء الله تعالى.<br></br><br></br> نوفر:</h4>
                <div style={{marginTop:'2vh', display:'flex', justifyContent:'space-around'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"14px", height:'4vh',width:'21vw',textAlign:'center',lineHeight:2.5}}>أعواد الفانيلا</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"14px", height:'4vh',width:'22vw',textAlign:'center',lineHeight:2.5}}>بودر الفانيلا</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"14px", height:'4vh',width:'22vw',textAlign:'center',lineHeight:2.5}}>خلاصة الفانيلا</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3', color:'#5C4033',borderRadius:'50px', fontSize:"14px", height:'4vh',width:'21vw',textAlign:'center',lineHeight:2.5}}>معجون الفانيلا</h3></button>
                    {/* <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"17px", height:'2vh',width:'8vw',textAlign:'center',lineHeight:2.2}}>Next js</h3></button> */}
                     </div>
            </motion.div>
                    <br></br>
            </div>}
    </div>)}