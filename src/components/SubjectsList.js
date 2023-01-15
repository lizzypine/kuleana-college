import React, { useState, useEffect } from 'react';

function SubjectsList() {
  const [subjects, setSubjects] = useState();
  useEffect(() => {
    const url = '/subjectsapi.aspx';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setSubjects(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

    // if (!this.state.subjects) {
    //   return <span>Loading...</span>;
    // }  

    const images = require.context('../assets/images/', true)
    // const image = Responsibility ? Finance : Principles

    return (
      <div className="container-fluid subjects-wrapper d-flex flex-column col justify-content-center align-items-center py-4">
        <div className="row">
          {subjects && subjects.map((subject) => (
            <div className="d-flex flex-column col justify-content-center align-items-center" key={subject.SubjectID}>
            <a className="text-decoration-none" href={"" + subject.Subject + ""}>
              <div className="imageWrapper">
                <img className="subjectImage" src={`/images/${subject.Subject}` + ".jpg"} alt={subject.Subject + " Image"}/>
              </div>
              <div className="textWrapper text-center">
                <h2>{subject.Subject}</h2>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default SubjectsList;