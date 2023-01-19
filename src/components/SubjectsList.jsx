import { Link } from 'react-router-dom'
import { useGetSubjectsQuery } from '../data/subjects'

function SubjectsList() {
  const { data, isLoading, error } = useGetSubjectsQuery()

  return (
    <div className="container-fluid subjects-wrapper d-flex flex-column col flex-wrap justify-content-center align-items-center p-1">
      <div className="row justify-content-center">
        <div>{isLoading ? 'Loading...' : ''}</div>
        <div>{error ? 'There has been an error...' : ''}</div>
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
