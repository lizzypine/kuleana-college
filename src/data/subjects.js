import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const subjectsApi = createApi({
  reducerPath: 'subjectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://www.kuleanacollege.com/' }),
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSubjectsQuery } = subjectsApi
export const { useGetLessonsQuery } = subjectsApi
export const { useGetLessonDetailQuery } = subjectsApi
