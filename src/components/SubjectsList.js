import React, { Component } from 'react';
// import Finance from '../assets/images/Finance.jpg';
import Responsibility from '../assets/images/Responsibility.jpg';
import Principles from '../assets/images/Principles.jpg';
import Finance from '../assets/images/Finance.jpg';


class SubjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectsList: [],
      error: null
    }

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  // When the application first loads, Fetch from the Kuleana College API and attach instructions
  componentDidMount() {
    fetch("/subjectsapi.aspx")
    .then((response) => {
      return response.json();
    })
    .then(this.handleSuccess, this.handleError);
  }

  // If successful, save response data to state
  handleSuccess(responseData) {
    this.setState({
      subjects: responseData, 
      error: null
    });
    console.log(responseData);
  }

   // If there was an error, save that to state
  handleError(error) {
    console.log(error);
    this.setState({
      subjects: [], 
      error: error
    });
  }

  render() {
    if (!this.state.subjects) {
      return <span>Loading...</span>;
    }  

    if (this.state.error !== null) {
      return <h2>There has been an error.</h2>
    } 

    const subjectElements = [];
    for (let i = 0; i < this.state.subjects.length; i++) {

      // If thumnail image is unavailable, display a placeholder instead
      let imagePath = "https://via.placeholder.com/150"

      if (this.state.subjects[i].Subject.startsWith('Finance')) {
        imagePath = Finance;
      } 
      
      if (this.state.subjects[i].Subject.startsWith('Responsibility')) {
        imagePath = Responsibility;
      } 
      
      if (this.state.subjects[i].Subject.startsWith('Principles')) {
        imagePath = Principles;
      }

      subjectElements.push(
        <div className="col-sm" key={this.state.subjects[i].SubjectID}>
          <div className="imageWrapper">
            <img className="subjectImage" src={imagePath} alt=""/>
          </div>
          <div className="textWrapper">
            <h2><a href={"" + this.state.subjects[i].Subject + ""}>{this.state.subjects[i].Subject}</a></h2>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">{subjectElements}</div>
        <p><a href="https://www.vecteezy.com/free-vector/money">Money Vectors by Vecteezy</a>Attribution</p>
      </div>
    );
  }
}

export default SubjectsList;