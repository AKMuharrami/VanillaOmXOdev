"use client"
import Image from 'next/image'
import { Modal, Box, Typography } from "@mui/material";
import styles from '@/app/page.module.css';
import  Icon  from '@mdi/react';
import {mdiFlower } from '@mdi/js';
import MenuIntroduction from '@/app/menuar';
import { useMediaQuery } from "react-responsive";
// import ResponsiveAppBar from '@/app/menubar';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useState } from 'react';
export default function Home() {
  const handleredirect = () => {
    setTimeout(()=> {
        window.location.href = "/"
        
    })
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [Quantity, SetQuantity] = useState("2.5")
const [state, handleSubmit] = useForm("mvojvawp");
if (state.succeeded) {
    handleredirect();
    return <Modal
    open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{ direction:'rtl', color:'Blue'}} component="h2">
            شكرا لك
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 , color:'black', direction:'rtl'}}>
            لقد نجحت عملية الطلب
          </Typography>
        </Box>
      </Modal>
}
  return (
    <div style={{overflow:'hidden'}}>
      {isDesktopOrLaptop &&<main className={styles.main} style={{background:'rgba(10, 54, 119, 0.2)'}}>
      <div className={styles.description} style={{position:'fixed',direction:'rtl'}}>
        
        <MenuIntroduction/>
        <div className={styles.card1}>
          <a
            href="/ar"
            // target="_blank"
            rel="noopener noreferrer"
          >
            
            <Icon path={mdiFlower } style={{marginRight:2}}size={1} />
            فانيلا عمان
          </a>
        </div>
      </div>
      {isDesktopOrLaptop &&<div>
        <div style={{marginTop:'5vh', display:'flex', justifyContent:'space-around', padding:'5vh',paddingTop:'13vh',paddingBottom:'5vh', borderRadius:'1%', background:'rgba(205, 195, 177,.1)', direction:'rtl'}}>
                    <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png" style={{height:'30vh', marginRight:'2vw', marginTop:'4%', marginLeft:'-5%'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h1 style={{color:'white', textAlign:'center', marginTop:'-8%', marginBottom:'4%', marginLeft:'39%', textShadow: '1px 1px 5px rgb(00 11 69/ 80%)', WebkitTextStroke: '1px 0b0e13'}}>أعواد فانيلا (بوربن) - درجة أ <br></br> بابوا نيو جيني</h1>
                        <h2 style={{color:'white', textAlign:'center'}}>اطلب المنتج</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginLeft:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>الاسم </label>
                                <input id='Name' type="text" required name="Name" style={{marginLeft:'3vw', height:'2.5vh', marginRight:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>الهاتف </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginLeft:'3vw', marginRight:'1vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>الإيميل </label>
                                <input id="Email" required name="Email" type='email' style={{marginLeft:'3vw', marginRight:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>البلد </label>
                            <input id='City' name="City" value='عمان'  disabled type='text' style={{marginLeft:'3vw', height:'2.5vh', marginRight:'1vw', width:'8vw'}}></input>
                            <label For="Gloc" style={{color:'white', fontSize:'125%'}}>موقع جوجل مابس (إن وجد) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ marginLeft:'3vw',height:'2.5vh', marginRight:'1vw'}}></input>
                            
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>الولاية </label>
                            <input id='City' name="City" required type='text' style={{marginLeft:'3vw', height:'2.7vh', marginRight:'1vw', width:'10vw'}}></input>
                            <label For="Town" style={{color:'white', fontSize:'125%'}}>الحلة </label>
                            <input type='text' required  name="Town" id='Town' style={{marginLeft:'3vw', marginRight:'1vw', height:'2.7vh', width:'10vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>رقم البيت (الشقة)</label>
                            <input id='POC' name="House" type='text' style={{marginLeft:'3vw', marginRight:'1vw', height:'2.7vh', width:'10vw'}} ></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Quantity" style={{color:'white', fontSize:'125%'}}>الكمية </label>
                            <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type='select' required  name="quantity" id='Quantity' style={{marginLeft:'3vw', marginRight:'1vw'}}>
                              {/* <option  value="2.5">عودان</option>
                              <option value="5">4 أعواد</option>
                              <option value="6">5 أعواد</option>
                              <option value="12">10 أعواد</option>
                              <option value='23'>20 عود</option> */}
                              <option  value="2.25">عودان</option>
                              <option value="4.5">4 أعواد</option>
                              <option value="5.4">5 أعواد</option>
                              <option value="10.8">10 أعواد</option>
                              <option value='20.7'>20 عود</option>
                            </select>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Price" style={{color:'white', fontSize:'125%', marginTop:'.35%'}}>السعر: </label>
                              <h2 style={{marginLeft:'3vw', marginRight:'1vw'}} id='Price'>{Quantity} ريال</h2>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} value="اطلب" type='submit'></input>
                        </div>
                    </form>
                </div>
              </div>
              <h4 style={{color:'white',marginRight:'12vh', marginTop:'1%', marginBottom:'1%',direction:'rtl'}}>*سيتم التواصل معكم لتأكيد وإكمال عملية الشراء خلال 6 ساعات إن شاء الله تعالى، والدفع سيكون عند الاستلام. </h4>
              </div>}
              <hr style={{maxWidth:"100%", width:"100%"}}></hr>
    </main>}
    {isTabletOrMobile &&<main className={styles.main1} style={{background:'rgba(10, 54, 119, 0.2 )'}}>
      <div className={styles.description1} style={{position:'fixed', padding:'3%', paddingTop:'-13%', direction:'rtl'}}>
        
        <MenuIntroduction/>
        <div className={styles.card3} style={{position:'relative', height:'7vh', alignItems:'center'}}>
          <a
            href="/ar"
            // target="_blank"
            rel="noopener noreferrer"
            
            
          >
            
            <Icon path={mdiFlower } style={{marginTop:'0%'}}size={.9} />
            فانيلا عمان
          </a>
        </div>
      </div>
    </main>}
              {isTabletOrMobile && <div> <div style={{marginTop:'-89vh', backgroundColor:'rgba(205, 195, 177,.1)', padding:'5vh',paddingTop:'5vh',paddingBottom:'1.75vh', borderRadius:'1%'}}>
              <h2 style={{color:'white', textAlign:'center', marginTop:'-2%', marginBottom:'6%', marginRight:'-3%', textShadow: '1px 1px 5px rgb(00 11 69/ 80%)', WebkitTextStroke: '1px 0b0e13'}}>أعواد فانيلا <br></br>  بابوا نيو جيني- (بوربن)  درجة أ</h2>
                    <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png" style={{height:'21vh', marginLeft:'-4vw'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h2 style={{color:'white', textAlign:'center', fontSize:'120%', marginTop:'3%'}}>اطلب المنتج</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} style={{direction:'rtl'}}>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginLeftt:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'100%'}}>الاسم </label>
                                <input id='Name' type="text" required name="Name" style={{marginLeft:'3vw', height:'2vh', width:'25vw', marginRight:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'100%'}}>الهاتف </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginLEft:'3vw', width:'25vw', marginRight:'1vw'}}></input>

                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <label for="Email" style={{color:'white', fontSize:'100%'}}>الإيميل </label>
                            <input id="Email" name="Email" type='email'style={{marginLeft:'3vw', height:'2vh', width:'25vw', marginRight:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>البلد </label>
                            <input id='City' name="City" value='عمان'  disabled type='text' style={{marginLeft:'3vw',  width:'9.5vw', height:'2vh', marginRight:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>  الولاية </label>
                            <input id='City' required name="City" type='text' style={{marginLeft:'3vw', height:'2vh', width:'11vw', marginRight:'1vw'}}></input>
                            
                            </div>
                            <br></br>
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <label For="Town" style={{color:'white', fontSize:'100%'}}>الحلة </label>
                            <input type='text' required name="Town" id='Town' style={{marginLeft:'3vw', height:'2vh', width:'11vw', marginRight:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'100%'}}>رقم البيت (الشقة)</label>
                            <input id='POC' name="House" type='text' style={{ height:'2vh', width:'17vw', marginRight:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'100%'}}>موقع جوجل ماب (إن وجد) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2vh', width:'20vw',marginRight:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Quantity" style={{color:'white', fontSize:'100%'}}>الكمية </label>
                            <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type='select' required  name="quantity" id='Quantity' style={{marginLeft:'3vw', marginRight:'1vw'}}>
                              <option  value="2.25">عودان</option>
                              <option value="4.5">4 أعواد</option>
                              <option value="5.4">5 أعواد</option>
                              <option value="10.8">10 أعواد</option>
                              <option value='20.7'>20 عود</option>
                            </select>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Price" style={{color:'white', fontSize:'100%', marginTop:'.35%'}}>السعر: </label>
                              <h3 style={{marginLeft:'3vw', marginRight:'1vw'}} id='Price'>{Quantity} ريال</h3>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'18vw'}} value="اطلب" type='submit'></input>
                        </div>
                    </form>
                </div>
                </div>
                <div style={{background:'rgba(10, 54, 119, 0.1 )', paddingTop:'2%', paddingBottom:'20%'}}>
                <h6 style={{color:'white',marginRight:'1vw', marginTop:'1%', direction:'rtl'}}>*سيتم التواصل معكم لتأكيد وإكمال عملية الشراء خلال 6 ساعات إن شاء الله تعالى، والدفع سيكون عند الاستلام. </h6>
                </div>
              </div>}
      {/* <div className={styles.grid1} style={{marginTop:''}}>
      <a
          href="/articles/1"
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
     </a>
        </div>
       */}
    </div>
  )
}
