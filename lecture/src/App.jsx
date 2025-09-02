
import Card from './component/Card';

import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import ColorChanger from './component/ColorChanger';


function App() {
  return (
    <>
    <div>
     <Header/>
     <Outlet/>
     <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 '><Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
     <Card name="Anamika Pandey" tech="FullStack Developer"/>
    </div>
    <Footer/>
    <ColorChanger/>
    </div>
    </>
  )
}

export default App
