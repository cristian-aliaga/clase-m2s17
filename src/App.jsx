import { Route, Routes } from 'react-router-dom'
import { NavBarComponents } from './components/NavBarComponents'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'

export const App = () => {
  return (
    <>
      <NavBarComponents />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
      </Routes>
    </>
  )
}

