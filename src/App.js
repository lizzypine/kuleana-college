import React from "react";
import Header from './components/Header'
import SubjectsList from './components/SubjectsList'
import Footer from './components/Footer'
// import LessonsList from './components/LessonsList'
// import Lesson from './components/Lesson'

import './App.css';

class App extends React.Component {

  render() {
    // Display the title, search bar, and post list.
    return (
      <div className="container">
        <Header />
        <SubjectsList />
        <Footer />
      </div>
    );
  }
}

export default App;
