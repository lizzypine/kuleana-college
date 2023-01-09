import React, { Component } from 'react'

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
      <h2>There has been an error.</h2>
    } 

    return (
      <div className="subjectsContainer">
        <div className="subjectWrapper">{this.state.subjects.map(subject => (
          <h3 key={subject.SubjectID}>{subject.Subject}</h3>
        ))}
        </div>
      </div>
    );
  }
}

export default SubjectsList;