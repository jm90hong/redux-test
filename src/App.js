
import NormalOnePage from './page/NormalOnePage';
import NormalwoPage from './page/NormalTwoPage';
import ReduxOnePage from './page/ReduxOnePage';
import ReduxTwoPage from './page/ReduxTwoPage';

import './res/css/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/normal_one" element={<NormalOnePage/>} />
            <Route path="/normal_two" element={<NormalwoPage />}/>
            <Route path="/redux_one"   element={<ReduxOnePage />} />
            <Route path="/redux_two"   element={<ReduxTwoPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;