"use client"
import Image from 'next/image'
import styles from '@/app/page.module.css'
import  Icon  from '@mdi/react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ShoppingCart } from '@mui/icons-material';
import {mdiFlower} from '@mdi/js';
import MenuIntroduction from '@/app/menu1ar';
import MenuIntroduction1 from '@/app/menu1arm';

import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useSpring } from "framer-motion";
let mproducts= [
  {
    id:0,
    image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png",
    name:" أعواد فانيلا بوربن - بابا نو جيني -- درجة أ",
    price:"5-7 Omr",
    animationn:'/products/model/Acar1',
    staticc:'/products/model/car1',
    no:0
}
    ]
    let mproducts1= [
      {
        id:1,
        image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1714371401228-000A4169-D107-4A0C-829C-275AF24C1CFA.png",
        name:"معجون الفانيلا - الخالي من الكحول",
        price:"5-7 Omr",
        animationn:'/products/model/Acar1',
        staticc:'/products/model/car1',
        no:1
    }
        ]
        let mproducts2= [
          {
            id:2,
            image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1708955534665-259934CB-712D-446F-AA1E-7F212D7429E8.png",
            name:"خلاصة الفانيلا - الخالية من الكحول",
            price:"5-7 Omr",
            animationn:'/products/model/Acar1',
            staticc:'/products/model/car1',
            no:2
        }
            ]
            let mproducts3= [
              {
                id:3,
                image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1714469528288-C28BFFC0-6FA5-4B00-AF84-B696EA2711AF.png",
                name:" أعواد فانيلا تاهيتين - بابوا نيو جيني - درجة أ",
                price:"5-7 Omr",
                animationn:'/products/model/Acar1',
                staticc:'/products/model/car1',
                no:""
            }
                ]
    let products= [
      {
        id:0,
        image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png",
        name:" أعواد فانيلا بوربن - بابا نو جيني - درجة أ",
        price:"5-7 Omr",
        animationn:'/products/model/Acar1',
        staticc:'/products/model/car1',
        no:0
    },
    {
      id:1,
      image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1714371401228-000A4169-D107-4A0C-829C-275AF24C1CFA.png",
      name:"معجون الفانيلا - الخالي من الكحول",
      price:"5-7 Omr",
      animationn:'/products/model/Acar1',
      staticc:'/products/model/car1',
      no:1
  },
  {
    id:2,
    image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1708955534665-259934CB-712D-446F-AA1E-7F212D7429E8.png",
    name:"خلاصة الفانيلا - الخالية من الكحول",
    price:"5-7 Omr",
    animationn:'/products/model/Acar1',
    staticc:'/products/model/car1',
    no:2
},
{
  id:3,
  image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1714469528288-C28BFFC0-6FA5-4B00-AF84-B696EA2711AF.png",
  name:" أعواد فانيلا تاهيتين - بابوا نيو جيني - درجة أ",
  price:"5-7 Omr",
  animationn:'/products/model/Acar1',
  staticc:'/products/model/car1',
  no:""
},
  
  
          ];
export default function A1() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  let mproductslist = mproducts.map((product) => { 
    return(
    <Link key={product.id} href={`/ar/products/${product.no}`} style={{zIndex:2}}>
      <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:55, marginBottom:'-10%', marginRight:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"18px", height:'38vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'10vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={300} height={250} quality={55} src={product.image} alt='' style={{objectFit:'contain', marginBottom:'-7%',zIndex:0}}></Image><br></br>{product.name} <br></br></h3>
      </button></Link>
          )})
        let mproductslist1 = mproducts1.map((product) => { 
            return(
            <Link key={product.id} style={{zIndex:2}} href={`/ar/products/${product.no}`}>
              <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:-55, marginBottom:'-10%', marginRight:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"18px", height:'37vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={225} height={200} quality={55} src={product.image} alt='' style={{height:'40vh',objectFit:'contain', marginBottom:'-22%',zIndex:0, marginTop:'-20%'}}></Image><br></br>{product.name} <br></br></h3>
              </button></Link>
                  )})
                  let mproductslist2 = mproducts2.map((product) => { 
                    return(
                    <Link key={product.id} style={{zIndex:2}} href={`/ar/products/${product.no}`}>
                      <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:-55, marginBottom:'-10%', marginRight:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"18px", height:'37vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={225} height={200} quality={45} src={product.image} alt='' 
                      style={{height:'40vh',objectFit:'contain', marginBottom:'-22%',zIndex:0, marginTop:'-20%'}}
                      ></Image><br></br>{product.name} <br></br></h3>
                      </button></Link>
                          )})
                          let mproductslist3 = mproducts3.map((product) => { 
                            return(
                            <Link key={product.id} style={{zIndex:2}} href={`/ar/products/${product.no}`}>
                              <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:-50, marginBottom:'-10%', marginRight:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"18px", height:'40vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={310} height={200} quality={55} src={product.image} alt='' style={{height:'33vh',objectFit:'contain', marginBottom:'-12%',zIndex:0, marginTop:'3%'}}></Image><br></br>{product.name} <br></br></h3>
                              </button></Link>
                                  )})
  let productslist = products.map((product) => { 
              return(
              <Link key={product.id} href={`/ar/products/${product.no}`} style={{marginLeft:'30%', zIndex:3}}>
                  <button key={product.id} style={{background:'rgb(255, 255, 255, 0)', border:'0px',borderColor:'black', width:'10vw', height:'12vh', marginTop:35, marginBottom:"10%", marginRight:'0%', cursor:'pointer'}}>
                    
                      <h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.35)',WebkitTextStroke: '.3  px black' , color:'#FFE4C4',textShadow: '5px 5px 100px rgb(144 14 14/ 100%)',borderRadius:'25px',fontSize:"18px", height:'55vh',width:'20vw',textAlign:'center',lineHeight:2, paddingBottom:'7vh', paddingTop:'.0vh', marginTop:'4vh'}}><Image width={247} height={360} quality={55} src={product.image} alt=''  style={{height:'36vh',objectFit:'contain', marginBottom:'0vh'}}></Image>{product.name} <br></br></h3>
                      </button></Link>
          )})
  return (
    <div style={{}}>
         <motion.div className="progress-bar" style={{ scaleX }} />
        {isDesktopOrLaptop &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)', overflow:'hidden', direction:'rtl'}}>
      <div className={styles.description} style={{position:'fixed', maxWidth:'1220px', justifyContent:'space-between'}}>
        
        
        <MenuIntroduction style={{}} />
        {/* <h1 className={styles.card1}>Title</h1> */}
        <div className={styles.card1} style={{marginTop:'0%', direction:'rtl'}}>
          <a
            href="/ar"
            // target="_blank"
            rel="noopener noreferrer"
          >
                        <Tooltip title="تصفح سلة المشتريات">
      <IconButton href='/products/shoppingcart'>
        <ShoppingCart sx={{color: 'bisque'}}  />
      </IconButton>
    </Tooltip>
            <Icon path={mdiFlower} style={{marginRight:'0%'}}size={.9} />
            فانيلا عمان
          </a>
        </div>
        </div>
            <div className={styles.center1} style={{marginTop:'0vh'}}>
            <div className={styles.center5}>
            <div  style={{marginTop:'-7%'}}>
            {isDesktopOrLaptop &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    style={{direction:'rtl'}}
                    >
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'45vw', direction:''}}>
        {productslist}
    </div>
    </motion.div>}
      {/* <a
          href="/articles/1"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex", justifyContent:'space-around'}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"52vw", marginLeft:"1%", paddingTop:"1%", paddingLeft:'-1%'}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
         <h2 style={{paddingTop:'3.5%'}}>5/10/2023</h2>
          
       </div>
     </a> */}
     {/* <a
          href="/articles/2"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex"}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
          
       </div>
     </a>
     <a
          href="/articles/3"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex"}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
          
       </div>
     </a> */}
        </div>
            </div>
            </div>
        
        </main>}
        {isTabletOrMobile &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)', overflow:'hidden'}}>
      <div className={styles.description2} style={{position:'fixed', padding:'3%', direction:'rtl', marginTop:'-10%', height:'10%', zIndex:2}}>
      <MenuIntroduction1/>
      <Tooltip className={styles.center3} sx={{background:'black', marginLeft:'43%', maxHeight:'5vh', maxWidth:'10vw'}}  title="تصفح سلة المشتريات">
      <IconButton  href='/products/shoppingcart'>
        <ShoppingCart  sx={{color: 'bisque'}}  />
      </IconButton>
    </Tooltip>
        <div className={styles.card3} style={{position:'relative', height:'6vh', alignItems:'center'}}>
          
          <a
            href="/ar"
            // target="_blank"
            rel="noopener noreferrer"
            
            
          >
            
            <Icon path={mdiFlower } style={{marginRight:-16, marginLeft:'-10%'}} size={.9} />
            فانيلا عمان
          </a>
        </div>
        </div>
            <div  style={{zIndex:0}}>
            {isTabletOrMobile &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    style={{direction:'rtl', marginLeft:'7%'}}
                    
                    >
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'0vw', direction:'', marginTop:'5%'}}>
        {mproductslist}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'0vw', direction:'', marginTop:'25%', marginBottom:'15%'}}>
        {mproductslist1}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'0vw', direction:'', marginTop:'25%', marginBottom:'15%'}}>
        {mproductslist2}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'0vw', direction:'', marginTop:'25%', marginBottom:'35%'}}>
        {mproductslist3}
    </div>
    </motion.div>}

        
        </div>
      
        </main>}
       </div>

  )}