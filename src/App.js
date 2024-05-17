import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faq from "./components/faq";
import Blog from "./components/blog";



function App() {
  return(
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Faq />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
