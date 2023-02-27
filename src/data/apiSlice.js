import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import 'whatwg-fetch'

// Define a service using a base URL and expected endpoints
export const subjectsApi = createApi({
  reducerPath: 'subjectsApi',
  // In production, change base URL to "https://kuleanacollege.com"
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getSubjects: builder.query({
      query: () => 'subjectsapi.aspx'
    }),
    getLessons: builder.query({
      query: (subjectId) => `lessonsapi.aspx?subjectid=${subjectId}`
    }),
    getLessonDetail: builder.query({
      query: (lessonId) => `lessondetailsapi.aspx?lessonid=${lessonId}`
    })
  })
})

export const { useGetSubjectsQuery, useGetLessonsQuery, useGetLessonDetailQuery } = subjectsApi
