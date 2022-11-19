import { Route, Routes, useLocation } from 'react-router-dom';

import PageNotFound from './components/error/PageNotFound';

import Home from './components/home/Home';


const App = () => {

  const location = useLocation()

  return (

    <div className="App">

      <Routes location={location} key={location.pathname}>

        <Route path='/' element={<Home />} />

        <Route path='/verify' element={<span>Verify Page</span>} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>

    </div>

  )

}

export default App;