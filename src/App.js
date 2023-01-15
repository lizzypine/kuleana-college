import React from "react";
import NavLink from './components/NavLink'
import Header from './components/Header'
import SubjectsList from './components/SubjectsList'
import LessonsList from './components/LessonsList'
// import Lesson from './components/Lesson'
import Footer from './components/Footer'

import './App.css';

function App() {

  // Display the title, search bar, and post list.
  return (
    <div className="container">
      <NavLink />
      <Header />
      <SubjectsList />
      <LessonsList />
      <Footer />
    </div>
  );
}

export default App;
