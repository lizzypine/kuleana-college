// import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGetSubjectsQuery } from '../data/subjects'

function SubjectsList() {
  const { data, isLoading } = useGetSubjectsQuery()
  // const [subjects, setSubjects] = useState()

  // // useEffect(() => {
  // //   const url = '/subjectsapi.aspx'

  // //   // Rewrite with RTK
  // //   const fetchData = async () => {
  // //     try {
  // //       const response = await fetch(url)
  // //       const json = await response.json()
  // //       setSubjects(json)
  // //     } catch (error) {
  // //       console.log('error', error)
  // //     }
  // //   }

  //   fetchData()
  // }, [])

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
      <div className="row justify-content-center">
        <div>{isLoading ? 'Loading...' : ''}</div>
        {data &&
          data.map((subject) => (
            <div
              className="d-flex flex-column col-5 justify-content-center align-items-center card m-3 overflow-hidden"
              key={subject.SubjectID}>
              <Link className="text-decoration-none" Link to={`/${subject.SubjectID}`}>
                <div className="">
                  <img
                    className="subjectImage"
                    src={`/images/${subject.Subject}` + '.jpg'}
                    alt={subject.Subject + ' Image'}
                  />
                </div>
                <div className="textWrapper text-center">
                  <h2>{subject.Subject}</h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SubjectsList
