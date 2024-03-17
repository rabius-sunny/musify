import Navbar from 'components/Navbar'
import withTransition from 'components/Transition'
import Home from 'pages/Home'
import Recommended from 'pages/Recommended'
import Trending from 'pages/Trending'
import { Routes, Route, useLocation } from 'react-router-dom'
export default function App() {
  const location = useLocation()
  return (
    <div>
      <Navbar />
      <main>
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            index
            element={withTransition(<Home />)}
          />
          <Route
            path='/recommended'
            element={withTransition(<Recommended />)}
          />
          <Route
            path='/trending'
            element={withTransition(<Trending />)}
          />
        </Routes>
      </main>
    </div>
  )
}
