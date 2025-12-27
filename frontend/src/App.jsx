import './App.css';
import Navigation from './components/navigation/Navigation.jsx';
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import { Route,Routes } from 'react-router-dom';
import AddBlog from './components/addblog/AddBlog.jsx';
import Post from './components/post/Post.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    < >
     <Navigation />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
