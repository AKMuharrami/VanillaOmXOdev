import dynamic from 'next/dynamic'
 
const Home = dynamic(() => import('./Bean'), {
  loading: () => <p style={{background:'#E9A2A0', height:'100vh', textAlign:'center'}}><img style={{maxHeight:'50vh', marginLeft:'0%', marginTop:'10%', mixBlendMode:'luminosity', opacity:'80%', transition:"opacity 0.3s"}} src='https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1714455591865-44F54E92-91A6-46E4-B52E-A0FCDE0941FD.jpeg'></img><br></br>Loading...</p>,
  ssr: false
})
export const metadata = {
    title: "أعواد فانيلا تاهيتين - عمان",
    description: "احصل على أعواد فانيلا تاهيتين ذات الدرجة أ من بابوا نيو جيني اليوم - عمان",
    alternates: {
      canonical: '/ar/products/3'
    }
  };

  export default function Eproducts() {
    return(<Home></Home>)
  }