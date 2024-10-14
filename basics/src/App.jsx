// // // // import { useState } from 'react'
// // // // import reactLogo from './assets/react.svg'
// // // // import viteLogo from '/vite.svg'
// // // // import './App.css'

// // // // function App() {
// // // //   const [count, setCount] = useState(0)

// // // //   return (
// // // //     <>
// // // //       <div>
// // // //         <a href="https://vitejs.dev" target="_blank">
// // // //           <img src={viteLogo} className="logo" alt="Vite logo" />
// // // //         </a>
// // // //         <a href="https://react.dev" target="_blank">
// // // //           <img src={reactLogo} className="logo react" alt="React logo" />
// // // //         </a>
// // // //       </div>
// // // //       <h1>Vite + React</h1>
// // // //       <div className="card">
// // // //         <button onClick={() => setCount((count) => count + 1)}>
// // // //           count is {count}
// // // //         </button>
// // // //         <p>
// // // //           Edit <code>src/App.jsx</code> and save to test HMR
// // // //         </p>
// // // //       </div>
// // // //       <p className="read-the-docs">
// // // //         Click on the Vite and React logos to learn more
// // // //       </p>
// // // //     </>
// // // //   )
// // // // }

// // // // export default App
// // // // import Product from './Product.jsx'
// // // // import Counter from  './Counter.jsx'
// // // // import Ludo from './Ludo.jsx'
// // // // import Form from './Form.jsx'
// // // import {Routes,Route} from 'react-router-dom'
// // // import Home from './Home'
// // // import Contact from './Contact'
// // // import About from './About'

// // // function App() {
// // //   return (
// // //     <> 
// // //       <Routes>
// // //           <Route path='/' element={<Home/>}></Route>
// // //           <Route path='/About' element={<About/>}></Route>
// // //           <Route path='/Contact' element={<Contact/>}></Route>
// // //       </Routes>
// // //     </>
    
// // //   )
// // // }

// // // export default App
// // // src/App.jsx
// // // src/App.jsx
// // // App.jsx
// // import React, { useState } from 'react';
// // import Home from './Home';
// // import Menu from './/Menu';
// // import OrderSummary from './Order';

// // function App() {
// //   const [tableNumber, setTableNumber] = useState(null);
// //   const [order, setOrder] = useState([]);

// //   const clearOrder = () => {
// //     setOrder([]);
// //     setTableNumber(null);
// //   };

// //   return (
// //     <div>
// //       {!tableNumber ? (
// //         <Home setTableNumber={setTableNumber} />
// //       ) : order.length === 0 ? (
// //         <Menu tableNumber={tableNumber} setOrder={setOrder} />
// //       ) : (
// //         <OrderSummary order={order} clearOrder={clearOrder} />
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
// // import Apple from './Apple.jsx'
// // import Sample from './example/Sample.jsx'
// // import Props1 from './Propscontainer/props1.jsx'
// // import Props2 from './Propscontainer/props2.jsx'
// // import Props3 from './Propscontainer/props3.jsx'
// // import Props4 from './Propscontainer/props4.jsx'
// // import UseState from './UseState.jsx'
// // import Screenresize from './Screenresize.jsx'
// // import Form1 from './form1.jsx'
// import Sampl from './sampl.jsx'
// function App()
// {
//   // let car={Name:"Ford",Year:"2022",Purchased:"Gopi"}
//   return(
//     <>
//      {/* <Apple/>
//      <Sample/>
//      <Props1 name="Gopi"/>
//      <Props2 name="Lakshman"/>
//      <Props3 name="Jagannadh"/>
//      <Props4 name="Teja"/>
//      <Sample /> */}
//      {/* <UseState/>
//      <Screenresize/>
//      <Form1/> */}
//      <Sampl/>
//     </>
   
//   )
// }
// export default App
import React, { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/Home/Home1';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [tableNo, setTableNo] = useState(''); // State for table number

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route path='/cart' element={<Cart setTableNo={setTableNo} />} />
          <Route path='/order' element={<Placeorder tableNo={tableNo} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

