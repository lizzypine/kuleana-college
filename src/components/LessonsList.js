import React, { useState, useEffect } from 'react';

function LessonsList() {
  const [lessons, setLessons] = useState();
  useEffect(() => {
    const url = '/lessonsapi.aspx?subjectid=1';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setLessons(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
        <div className="row justify-content-center">
          {lessons && lessons.map((lesson) => (
            <div className="d-flex flex-column col-5 justify-content-center align-items-center card m-3 overflow-hidden" key={lesson.LessonID}>
            <a className="text-decoration-none" href={"" + lesson.LessonTitle + ""}>
              <div className="">
                <img className="subjectImage" src={`/images/${lesson.LessonTitle}` + ".jpg"} alt={lesson.LessonTitle + " Image"}/>
              </div>
              <div className="textWrapper text-center">
                <h2>{lesson.LessonTitle}</h2>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
  )
}

// API to fetch
// https://www.kuleanacollege.com/lessonsapi.aspx?subjectid=1

export default LessonsList;