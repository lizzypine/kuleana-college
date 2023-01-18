import { useState, useEffect } from 'react'
import { useNavigate, useParams, Outlet } from 'react-router-dom'

function LessonDetail() {
  const [details, setDetails] = useState()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // Pass lessonId from LessonsList to LessonDetail and fetch from the correct API endpoint.
    // Url is based on the on the lesson id (e.g., lessonid=2 is compromise, lessonid=3 is steadfastness)

    // const url = "/lessondetailsapi.aspx?lessonid=12";
    const url = `/lessondetailsapi.aspx?lessonid=${params.lessonId}`
    // const url = `/lessondetailsapi.aspx?lessonid=${params.lessonId}`

    // eslint-disable-next-line space-before-function-paren
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        console.log(url)
        const json = await response.json()
        console.log(json)
        setDetails(json)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
        <div className="row justify-content-center">
          {details &&
            details.map((detail) => (
              <div
                className="d-flex flex-column justify-content-center align-items-center "
                key={detail.LessonID}>
                <div className="">
                  <img
                    className="subjectImage"
                    src={`/images/${detail.LessonText}` + '.jpg'}
                    alt={detail.LessonTitle + ' Image'}
                  />
                </div>
                <div className="textWrapper text-center">
                  <h2>{detail.LessonTitle}</h2>
                  <p>{detail.LessonText}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="m-5">
          <button type="button" className="btn btn-info nav-item" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default LessonDetail
