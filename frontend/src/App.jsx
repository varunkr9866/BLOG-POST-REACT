import './App.css';
import Navigation from './components/navigation/Navigation.jsx';
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Route,Routes } from 'react-router-dom';
import About from './components/about/About.jsx';
import Post from './components/post/Post.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    < >
     <Navigation />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
