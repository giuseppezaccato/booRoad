import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import TravelPage from "./pages/TravelPage"
import TravelersBook from "./pages/TravelersBook"
import travelData from "./data/arrayTravels"
import { TravelProvider } from "./contexts/TravelContext"



function App() {

  return (
    <>
      <TravelProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage travelData={travelData} />} />
              <Route path="/travels/:id" element={<TravelPage travelData={travelData} />} />
              <Route path="/contacts" element={<TravelersBook travelData={travelData} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TravelProvider>
    </>
  )
}

export default App
