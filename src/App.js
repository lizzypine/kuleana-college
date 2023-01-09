import React from "react";
import Header from './components/Header'
import SubjectsList from './components/SubjectsList'
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
      </div>
    );
  }
}

export default App;
