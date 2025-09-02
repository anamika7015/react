
import Card from './component/Card';

import { Outlet } from 'react-router-dom';
import Header from './component/Header';


function App() {
  return (
    <>
    <div>
     <Header/>
     <Outlet/>
     <Card/>
    </div>
    </>
  )
}

export default App
