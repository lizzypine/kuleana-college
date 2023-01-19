// import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'

import { useGetLessonsQuery } from '../data/subjects'

function LessonsList() {
  const params = useParams()
  const { data, isLoading } = useGetLessonsQuery(params.subjectId)
  const navigate = useNavigate()

  // useEffect(() => {
  //   // const url = `/lessonsapi.aspx?subjectid=${params.subjectId}`

  //   // Rewrite with RTK:
  //   // pass params.subjectId into the
  //   // eslint-disable-next-line space-before-function-paren
  //   // useGetLessonsQuery(params.subjectId)
  //   // eslint-disable-next-line space-before-function-paren
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url)
  //       const json = await response.json()
  //       console.log(json)
  //       setLessons(json)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
      <div className="row justify-content-center">
        <div>{isLoading ? 'Loading...' : ''}</div>
        {data &&
          data.map((lesson) => (
            <div
              className="d-flex flex-column col-5 justify-content-center align-items-center card m-3 overflow-hidden"
              key={lesson.LessonID}>
              <Link className="text-decoration-none" Link to={`${lesson.LessonID}`}>
                <div className="">
                  <img
                    className="subjectImage"
                    src={`/images/${lesson.LessonTitle}` + '.jpg'}
                    alt={lesson.LessonTitle + ' Image'}
                  />
                </div>
                <div className="textWrapper text-center">
                  <h2>{lesson.LessonTitle}</h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className="m-5">
        <button type="button" className="btn btn-info nav-item" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}

export default LessonsList
