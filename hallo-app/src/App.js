import './App.css';
import Gotti from "./components/Gotti";

    function App() {
     
        const test= 34;
        const isAuth = true; 
      
    return (
    <div className="App">
       <h1>Hallo mallo</h1>
       <h3>Gotti.js component</h3>
       <Gotti/>
       <Gotti/>
       <Gotti/>
       <Gotti/>
       <Gotti/>
       <h2 className='Die Welt'>Die Sonne geht im Osten auf.</h2> 
       {/* className seklinde yazmamiz gerekli bu da jsx. formati reacta ait oldugu icin. */}
       <label htmlFor='name'></label>  
         <h2>{"murat".toUpperCase()}</h2> 
       {/* burada da uppercase özelligi ile koseli parantez icinde yazarak hepsini sayfamizda büyük yazdiriyoruz.  */}
       {
        isAuth ? <p> Benutzer anmelden</p>: null
        // bu isAuth kayitli ise dogru degilse yanlis yazmasini istiyoruz.sonuc true yazdigimiz icin benutzer anmelden yaziyor. 
       }
        <h3>{test}</h3>  
       {/* burada da test karsiligi olan 34 u yazdirdik.  */}
      <h3>{ 1 + 1} </h3> 
      {/* /* burada basit bir matematik isleminin sonucunu hemen sayfada toplamin sonucunu 2 seklinde bize yazdiriyor. */ } 
    </div>
    //div disina bir baslik daha atamiyoruz. div icinde olabilir. sadece bir tane parent element dönebiliyoruz. render ile birlikte return yapilan App.js icindeki bu yapi sadece bir tane parent element döndürüyor. bir tane input, h1, vs. bir div döndrmemiz yeterli. 
    );
    }

    export default App;
