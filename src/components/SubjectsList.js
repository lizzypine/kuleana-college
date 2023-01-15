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

    return (
      <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
        <div className="row justify-content-center">
          {subjects && subjects.map((subject) => (
            <div className="d-flex flex-column col-5 justify-content-center align-items-center card m-3 overflow-hidden" key={subject.SubjectID}>
            <a className="text-decoration-none" href={"" + subject.Subject + ""}>
              <div className="">
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