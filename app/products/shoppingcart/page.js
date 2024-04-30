"use client"
import Image from 'next/image'
import { Modal, Box, Typography } from "@mui/material";
import styles from '@/app/page.module.css';
import  Icon  from '@mdi/react';
import {  useRef} from 'react'
import {mdiFlower } from '@mdi/js';
import MenuIntroduction from '@/app/menu';
import { useMediaQuery } from "react-responsive";
// import ResponsiveAppBar from '@/app/menubar';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    const ref = useRef(null);
    async function a() {
        await ref.current?.scrollIntoView({behavior:'smooth', block:'center'})    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [Quantity, SetQuantity] = useState("1")
    
  const [state, handleSubmit] = useForm("mvojvawp");
  const t = JSON.parse(localStorage.getItem("Cart") || ['']);
  const [tt, Settt] = useState(t)
  const d = () => {
    let p = t
    p.pop()
    console.log(t)
    console.log(p)
    localStorage.removeItem("Cart");
    localStorage.setItem("Cart",JSON.stringify(p))
    Settt(t)
    

}
useEffect(() => {   
    localStorage.getItem("Cart", JSON.stringify(t))
  }, [t])
  const n = t.length
  console.log(t[1])
  console.log(n)
  let totall = 0
    for (let index = 0; index < n ; index++) {
        const element = t[index];
        totall += parseFloat(element.Q)
      console.log(totall)
    }
  console.log(totall)
  let dchecklist =  t.map((check) => {
    if (check.id == 1 && check.Q == 2.5) {
    return(
        <div>
            <a
            // href="/articles/1"
            className={styles.card2}
            style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
            
            >
         <div style={{display:"flex"}} >
            <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
            <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
            
             <h2 style={{textAlign:'center'}}>
               2 {check.Bname}
              </h2>
              <div style={{textAlign:'center'}}>
              <p >{check.Q} Omr </p>
              </div>
           </div>
            
         </div>
       </a>
        </div>
    ) }
    else if (check.id == 1 && check.Q == 5) {
        return(
            <div>
                <a
                href="/articles/1"
                className={styles.card2}
                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                
                >
             <div style={{display:"flex"}} >
                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                
                 <h2 style={{textAlign:'center'}}>
                   4 {check.Bname}
                  </h2>
                  <div style={{textAlign:'center'}}>
                  <p >{check.Q} Omr </p>
                  </div>
               </div>
                
             </div>
           </a>
            </div>
        )}
    else if (check.id == 1 && check.Q == 6) {
        return(
            <div>
                <a
                href="/articles/1"
                className={styles.card2}
                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                
                >
             <div style={{display:"flex"}} >
                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                
                 <h2 style={{textAlign:'center'}}>
                   5 {check.Bname}
                  </h2>
                  <div style={{textAlign:'center'}}>
                  <p >{check.Q} Omr </p>
                  </div>
               </div>
                
             </div>
           </a>
            </div>
        )}
        else if (check.id == 1 && check.Q == 12) {
            return(
                <div>
                    <a
                    href="/articles/1"
                    className={styles.card2}
                    style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                    
                    >
                 <div style={{display:"flex"}} >
                    <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                    <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                    
                     <h2 style={{textAlign:'center'}}>
                       10 {check.Bname}
                      </h2>
                      <div style={{textAlign:'center'}}>
                      <p >{check.Q} Omr </p>
                      </div>
                   </div>
                    
                 </div>
               </a>
                </div>
            )}
            else if (check.id == 1 && check.Q == 23) {
                return(
                    <div>
                        <a
                        href="/articles/1"
                        className={styles.card2}
                        style={{display:'ruby-text', marginLeft:'', maxWidth:'50vw'}}
                        
                        >
                     <div style={{display:"flex"}} >
                        <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                        <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                        
                         <h2 style={{textAlign:'center'}}>
                           20 {check.Bname}
                          </h2>
                          <div style={{textAlign:'center'}}>
                          <p >{check.Q} Omr </p>
                          </div>
                       </div>
                        
                     </div>
                   </a>
                    </div>
                )}
                else if (check.id == 2 && check.Q == 6) {
                    return(
                        <div>
                            <a
                            href="/articles/1"
                            className={styles.card2}
                            style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                            
                            >
                         <div style={{display:"flex"}} >
                            <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh",overflow:'visible'}} ></img>
                            <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                            
                             <h2 style={{textAlign:'center'}}>
                               50ml {check.Bname}
                              </h2>
                              <div style={{textAlign:'center'}}>
                              <p >{check.Q} Omr </p>
                              </div>
                           </div>
                            
                         </div>
                       </a>
                        </div>
                    )}
                    else if (check.id == 2 && check.Q == 11.800) {
                        return(
                            <div>
                                <a
                                href="/articles/1"
                                className={styles.card2}
                                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                                
                                >
                             <div style={{display:"flex"}} >
                                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                
                                 <h2 style={{textAlign:'center'}}>
                                   100ml {check.Bname}
                                  </h2>
                                  <div style={{textAlign:'center'}}>
                                  <p >{check.Q} Omr </p>
                                  </div>
                               </div>
                                
                             </div>
                           </a>
                            </div>
                        )}
                        else if (check.id == 2 && check.Q == 23.400) {
                            return(
                                <div>
                                    <a
                                    href="/articles/1"
                                    className={styles.card2}
                                    style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                                    
                                    >
                                 <div style={{display:"flex"}} >
                                    <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                    <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                    
                                     <h2 style={{textAlign:'center'}}>
                                       200ml {check.Bname}
                                      </h2>
                                      <div style={{textAlign:'center'}}>
                                      <p >{check.Q} Omr </p>
                                      </div>
                                   </div>
                                    
                                 </div>
                               </a>
                                </div>
                            )}
                            else if (check.id == 3 && check.Q == 5) {
                                return(
                                    <div>
                                        <a
                                        href="/articles/1"
                                        className={styles.card2}
                                       style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                                        
                                        >
                                     <div style={{display:"flex"}} >
                                        <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh",overflow:'visible'}} ></img>
                                        <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                        
                                         <h2 style={{textAlign:'center'}}>
                                           50ml {check.Bname}
                                          </h2>
                                          <div style={{textAlign:'center'}}>
                                          <p >{check.Q} Omr </p>
                                          </div>
                                       </div>
                                        
                                     </div>
                                   </a>
                                    </div>
                                )}
                                else if (check.id == 3 && check.Q == 10) {
                                    return(
                                        <div>
                                            <a
                                            href="/articles/1"
                                            className={styles.card2}
                                            style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                                            
                                            >
                                         <div style={{display:"flex"}} >
                                            <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                            <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                            
                                             <h2 style={{textAlign:'center'}}>
                                               100ml {check.Bname}
                                              </h2>
                                              <div style={{textAlign:'center'}}>
                                              <p >{check.Q} Omr </p>
                                              </div>
                                           </div>
                                            
                                         </div>
                                       </a>
                                        </div>
                                    )}
                                    else if (check.id == 3 && check.Q == 19.700) {
                                        return(
                                            <div>
                                                <a
                                                href="/articles/1"
                                                className={styles.card2}
                                                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'50vw'}}
                                                
                                                >
                                             <div style={{display:"flex"}} >
                                                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                                
                                                 <h2 style={{textAlign:'center'}}>
                                                   200ml {check.Bname}
                                                  </h2>
                                                  <div style={{textAlign:'center'}}>
                                                  <p >{check.Q} Omr </p>
                                                  </div>
                                               </div>
                                                
                                             </div>
                                           </a>
                                            </div>
                                        )}
  } )
  let mchecklist =  t.map((check) => {
    if (check.id == 1 && check.Q == 2.5) {
    return(
        <div>
            <a
            // href="/articles/1"
            className={styles.card2}
            style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
            
            >
         <div style={{display:"flex"}} >
            <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
            <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
            
             <h4 style={{textAlign:'center'}}>
               2 {check.Bname}
              </h4>
              <div style={{textAlign:'center'}}>
              <p >{check.Q} Omr </p>
              </div>
           </div>
            
         </div>
       </a>
        </div>
    ) }
    else if (check.id == 1 && check.Q == 5) {
        return(
            <div>
                <a
                
                className={styles.card2}
                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                
                >
             <div style={{display:"flex"}} >
                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                
                 <h4 style={{textAlign:'center'}}>
                   4 {check.Bname}
                  </h4>
                  <div style={{textAlign:'center'}}>
                  <p >{check.Q} Omr </p>
                  </div>
               </div>
                
             </div>
           </a>
            </div>
        )}
    else if (check.id == 1 && check.Q == 6) {
        return(
            <div>
                <a
            
                className={styles.card2}
                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                
                >
             <div style={{display:"flex"}} >
                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                
                 <h4 style={{textAlign:'center'}}>
                   5 {check.Bname}
                  </h4>
                  <div style={{textAlign:'center'}}>
                  <p >{check.Q} Omr </p>
                  </div>
               </div>
                
             </div>
           </a>
            </div>
        )}
        else if (check.id == 1 && check.Q == 12) {
            return(
                <div>
                    <a
                
                    className={styles.card2}
                    style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                    
                    >
                 <div style={{display:"flex"}} >
                    <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                    <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                    
                     <h4 style={{textAlign:'center'}}>
                       10 {check.Bname}
                      </h4>
                      <div style={{textAlign:'center'}}>
                      <p >{check.Q} Omr </p>
                      </div>
                   </div>
                    
                 </div>
               </a>
                </div>
            )}
            else if (check.id == 1 && check.Q == 23) {
                return(
                    <div>
                        <a
                        
                        className={styles.card2}
                        style={{display:'ruby-text', marginLeft:'', maxWidth:'100vw'}}
                        
                        >
                     <div style={{display:"flex"}} >
                        <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
                        <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                        
                         <h4 style={{textAlign:'center'}}>
                           20 {check.Bname}
                          </h4>
                          <div style={{textAlign:'center'}}>
                          <p >{check.Q} Omr </p>
                          </div>
                       </div>
                        
                     </div>
                   </a>
                    </div>
                )}
                else if (check.id == 2 && check.Q == 6) {
                    return(
                        <div>
                            <a
                            
                            className={styles.card2}
                            style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                            
                            >
                         <div style={{display:"flex"}} >
                            <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh",overflow:'visible'}} ></img>
                            <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                            
                             <h4 style={{textAlign:'center'}}>
                               50ml {check.Bname}
                              </h4>
                              <div style={{textAlign:'center'}}>
                              <p >{check.Q} Omr </p>
                              </div>
                           </div>
                            
                         </div>
                       </a>
                        </div>
                    )}
                    else if (check.id == 2 && check.Q == 11.800) {
                        return(
                            <div>
                                <a
                                
                                className={styles.card2}
                                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                                
                                >
                             <div style={{display:"flex"}} >
                                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                
                                 <h4 style={{textAlign:'center'}}>
                                   100ml {check.Bname}
                                  </h4>
                                  <div style={{textAlign:'center'}}>
                                  <p >{check.Q} Omr </p>
                                  </div>
                               </div>
                                
                             </div>
                           </a>
                            </div>
                        )}
                        else if (check.id == 2 && check.Q == 23.400) {
                            return(
                                <div>
                                    <a
                                    
                                    className={styles.card2}
                                    style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                                    
                                    >
                                 <div style={{display:"flex"}} >
                                    <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                    <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                    
                                     <h4 style={{textAlign:'center'}}>
                                       200ml {check.Bname}
                                      </h4>
                                      <div style={{textAlign:'center'}}>
                                      <p >{check.Q} Omr </p>
                                      </div>
                                   </div>
                                    
                                 </div>
                               </a>
                                </div>
                            )}
                            else if (check.id == 3 && check.Q == 5) {
                                return(
                                    <div>
                                        <a
                                        
                                        className={styles.card2}
                                       style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                                        
                                        >
                                     <div style={{display:"flex"}} >
                                        <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh",overflow:'visible'}} ></img>
                                        <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                        
                                         <h4 style={{textAlign:'center'}}>
                                           50ml {check.Bname}
                                          </h4>
                                          <div style={{textAlign:'center'}}>
                                          <p >{check.Q} Omr </p>
                                          </div>
                                       </div>
                                        
                                     </div>
                                   </a>
                                    </div>
                                )}
                                else if (check.id == 3 && check.Q == 10) {
                                    return(
                                        <div>
                                            <a
                                            
                                            className={styles.card2}
                                            style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                                            
                                            >
                                         <div style={{display:"flex"}} >
                                            <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                            <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                            
                                             <h4 style={{textAlign:'center'}}>
                                               100ml {check.Bname}
                                              </h4>
                                              <div style={{textAlign:'center'}}>
                                              <p >{check.Q} Omr </p>
                                              </div>
                                           </div>
                                            
                                         </div>
                                       </a>
                                        </div>
                                    )}
                                    else if (check.id == 3 && check.Q == 19.700) {
                                        return(
                                            <div>
                                                <a
                                            
                                                className={styles.card2}
                                                style={{display:'ruby-text', marginLeft:'0%', maxWidth:'100vw'}}
                                                
                                                >
                                             <div style={{display:"flex"}} >
                                                <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
                                                <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
                                                
                                                 <h4 style={{textAlign:'center'}}>
                                                   200ml {check.Bname}
                                                  </h4>
                                                  <div style={{textAlign:'center'}}>
                                                  <p >{check.Q} Omr </p>
                                                  </div>
                                               </div>
                                                
                                             </div>
                                           </a>
                                            </div>
                                        )}
  } )
    // useEffect(() => {
    //     const t = localStorage.getItem(localStorage.key(index));
    // }, [])
   ;
  if (state.succeeded) {
      handleredirect();
      return <Modal
      open
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" sx={{color:'blue'}}  component="h2">
              Thank you
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color:'black' }}>
              Your order has been successful
            </Typography>
          </Box>
        </Modal>
  }
    return (
      <div style={{overflow:'hidden'}}>
        {isDesktopOrLaptop &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)'}}>
        <div className={styles.description} style={{position:'fixed'}}>
          
          <MenuIntroduction/>
          <div className={styles.card1}>
            <a
              href="/"
              // target="_blank"
              rel="noopener noreferrer"
            >
              
              <Icon path={mdiFlower } style={{marginRight:2}}size={1} />
              VanillaOm
            </a>
          </div>
          
        </div>
        <div style={{display:'grid'}}>
        {dchecklist}
        <div className={styles.card2} style={{textAlign:'center'}}>
            <form>
                <label For="Del"></label>
                <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type="select" id='Del'>
                <option value="1">Deliever in Muscat</option>
                <option value="1.5">Deliever out of Muscat to Delievery Branch</option>
                <option value="2">Deliever out of Muscat directly to House</option>
                </select>
                </form>
        </div>
       <h2 className={styles.card2} style={{textAlign:'center'}}> Total is = {totall + parseFloat(Quantity)} Omr </h2>
       <br></br>
       <button className={styles.card1} onClick={a}>Continue</button>
       <br></br>
       <button className={styles.card1} style={{background:'rgba(250, 250, 250, .5)', color:'black'}} onClick={d}>Delete</button>
        </div>
      </main>}
      {isTabletOrMobile &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)'}}>
        <div className={styles.description1} style={{position:'fixed', padding:'3%', paddingTop:'-13%'}}>
      
          
          <MenuIntroduction/>
          <div className={styles.card3} style={{position:'relative', height:'6vh', alignItems:'center'}}>
            <a
              href="/"
              // target="_blank"
              rel="noopener noreferrer"
              
              
            >
              
              <Icon path={mdiFlower } style={{marginTop:'0%'}}size={.9} />
              VanillaOm
            </a>
          </div>
        </div>
  
        <div style={{display:'grid', marginTop:'35%'}}>
        {mchecklist}
        <div className={styles.card2} style={{textAlign:'center'}}>
            <form>
                <label For="Del"></label>
                <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type="select" id='Del'>
                <option value="1">Deliever in Muscat</option>
                <option value="1.5">Deliever out of Muscat to Delievery Branch</option>
                <option value="2">Deliever out of Muscat directly to House</option>
                </select>
                </form>
        </div>
       <h3 className={styles.card2} style={{textAlign:'center'}}> Total is = {totall + parseFloat(Quantity)} Omr </h3>
       <br></br>
       <button className={styles.card1} onClick={a}>Continue</button>
       <br></br>
       <button className={styles.card1} style={{background:'rgba(250, 250, 250, .5)', color:'black'}} onClick={d}>Delete</button>
        </div>
        
      </main>}
      {isDesktopOrLaptop &&<main className={styles.main} ref={ref} style={{background:'rgba(10, 54, 119, 0.2)'}}>
      <div className={styles.center1} style={{display:'block'}}>
      <div style={{marginTop:'-2vh', display:'flex', justifyContent:'space-around', padding:'5vh',paddingTop:'7vh',paddingBottom:'7vh',borderRadius:'1%', background:'rgba(205, 195, 177,.1)'}}>
                    <div style={{marginLeft:'0vw'}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value={JSON.stringify(t)} style={{ height:'2.5vh'}}></input>
                                <input id='pri' type="hidden" name="pri" value={totall + parseFloat(Quantity)} style={{ height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>Email </label>
                                <input id="Email" required name="Email" type='email' style={{ marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'125%'}}>Google Maps Location (if available) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ marginRight:'3vw',height:'2.5vh', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>Country </label>
                            <input id='City' name="City" value='Oman'  disabled type='text' style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>City </label>
                            <input id='City' name="City" required type='text' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw',marginLeft:'1vw'}}></input>
                            <label For="Town" style={{color:'white', fontSize:'125%'}}>Town </label>
                            <input type='text' required  name="Town" id='Town' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw', marginLeft:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>House No</label>
                            <input id='POC' name="POC" type='text' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw',marginLeft:'1vw'}} ></input>
                            </div>
                          
                            <br></br>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} type='submit'></input>
                        </div>
                    </form>
                    </div>
                    </div>

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
        <hr style={{maxWidth:"100%", width:"100%"}}></hr>
      </main>}
      {isTabletOrMobile && <main className={styles.main} ref={ref} style={{background:'rgba(10, 54, 119, 0.2)'}}>
      <div className={styles.center1} style={{display:'block'}}>
         <div style={{marginTop:'10vh', backgroundColor:'rgba(205, 195, 177,.1)', padding:'5vh',paddingTop:'5vh',paddingBottom:'3vh', borderRadius:'1%'}}>
                    <div style={{marginLeft:'5vw'}}>
                        <h3 style={{color:'white', textAlign:'center', marginTop:'-3%'}}>Issue Order</h3>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <input id='Prod' type="hidden" name="Prod" value={JSON.stringify(t)} style={{ height:'2.5vh'}}></input>
                                <input id='pri' type="hidden" name="pri" value={totall + parseFloat(Quantity)} style={{ height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'100%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2vh', width:'25vw', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'100%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', width:'25vw', marginLeft:'1vw'}}></input>

                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <label for="Email" style={{color:'white', fontSize:'100%'}}>Email </label>
                            <input id="Email" name="Email" type='email'style={{marginRight:'3vw', height:'2vh', width:'25vw', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>Country </label>
                            <input id='City' name="City" value='Oman'  disabled type='text' style={{marginRight:'3vw',  width:'9.5vw', height:'2vh', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>  City </label>
                            <input id='City' required name="City" type='text' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input>
                            
                            </div>
                            <br></br>
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <label For="Town" style={{color:'white', fontSize:'100%'}}>Town </label>
                            <input type='text' required name="Town" id='Town' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'100%'}}>House No</label>
                            <input id='POC' name="POC" type='text' style={{ height:'2vh', marginLeft:'1vw',width:'26vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'100%'}}>Google Maps Location (opt) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2vh', width:'16vw',marginLeft:'1vw', overflow:'scroll'}}></input>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'18vw'}} type='submit'></input>
                        </div>
                    </form>
                   
                </div>
                </div>
              </div>
              </main>}
      </div>
    )
  }
  