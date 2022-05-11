import { gql } from "@apollo/client";

export const GET_PROGRAMME = gql`
       query Query {
            getProgrammes {
                _id
                name
                createAt
            }
        }
`;

export const GET_LEVEL = gql`
        query Query($programmeId: String!) {
            getLevelByProgramme(programmeId: $programmeId) {
                _id
                name
                createAt
                programme {
                _id
                name
                createAt
                }
            }
        }
`
export const GET_PLACEMENT_TEST = gql`
        query Query($levelId: String!) {
                getPlacementByLevel(levelId: $levelId) {
                    _id
                    name
                    score
                    createAt
                    level {
                    _id
                    name
                    createAt
                    }
                }
        }
`
export const ADD_PROGRAMME = gql`
        mutation Mutation($input: inputProgramme!) {
            programmeCreate(input: $input) {
                _id
                name
                createAt
            }
        }
`
export const GET_SUBJECT_BY_PLACEMENT = gql`
          query Query($placementId: String!) {
                getSubjectByPlacement(placementId: $placementId) {
                    _id
                    name
                    score
                    createAt
                    timer
                    placement {
                    _id
                    name
                    score
                    createAt
                    }
                }
                }
        `
export const GET_SUBJECT = gql`
    query Query($subjectId: String!) {
        getSubject(subjectId: $subjectId) {
          _id
          timer
        }
      }
`
export const GET_CERTIFICATE = gql`
query Query($placementId: String!) {
  getResultCertificate(placementId: $placementId) {
    _id
    createAt
    student {
      niceName
      _id
      createAt
      email
      password
      khmerName
      name
      gender
      dateOfBirth
      transferFrom
      bloodType
      placeOfBirth
      currentAddress
      motherName
      motherEdu
      motherPhone
      motherOccupation
      fatherName
      fatherEdu
      fatherPhone
      fatherOccupation
    }
    programme {
      _id
      name
      createAt
    }
    level {
      createAt
      name
      _id
    }
    placement {
      _id
      name
      score
      createAt
    }
    score
    scoreBySubjects {
      subject
      score
      timer
      timeTaken
      id
    }
  }
}
`
export const GET_EXERCISE = gql`
       query Query($subjectId: String!) {
  getExerciseBySubject(subjectId: $subjectId) {
    _id
    numbering
    title
    score
    paragraph
    video {
      name
      url
    }
    questions
    subject {
      _id
      name
      score
      createAt
      timer
    }
    images {
      url
      name
    }
    createAt
  }
}
`
export const GET_STUDENT = gql`
        query Query {
            getStudent {
                _id
                createAt
                email
                password
                khmerName
                name
                niceName
                gender
                dateOfBirth
                transferFrom
                bloodType
                placeOfBirth
                currentAddress
                motherName
                motherEdu
                motherPhone
                motherOccupation
                fatherName
                fatherEdu
                fatherPhone
                fatherOccupation
                images {
                url
                name
                }
            }
            }
    `
export const CREATE_STUDENT = gql`
       mutation Mutation($input: studentInput!) {
  studentCreate(input: $input) {
    _id
    createAt
    email
    password
    khmerName
    name
    niceName
    gender
    dateOfBirth
    transferFrom
    bloodType
    placeOfBirth
    currentAddress
    motherName
    motherEdu
    motherPhone
    motherOccupation
    fatherName
    fatherEdu
    fatherPhone
    fatherOccupation
    images {
      name
      url
    }
    uid
  }
}

`

export const CREATE_RESULT = gql`
     mutation Mutation($input: resultInput!) {
  resultCreate(input: $input) {
    _id
    createAt
    student {
      _id
      createAt
      email
      password
      khmerName
      name
      niceName
      gender
      dateOfBirth
      transferFrom
      bloodType
      placeOfBirth
      currentAddress
      motherName
      motherEdu
      motherPhone
      motherOccupation
      fatherName
      fatherEdu
      fatherPhone
      fatherOccupation
      images {
        name
        url
      }
    }
    programme {
      name
      _id
      createAt
    }
    level {
      createAt
      name
      _id
    }
    placement {
      _id
      name
      score
      createAt
    }
    score
    scoreBySubjects {
      subject
      score
    }
  }
}
`
export const GET_QUESTION_BY_EXERCISE = gql`
          query Query($exerciseId: String!) {
        getQuestionByExercise(exerciseId: $exerciseId) {
          _id
          question
          score
          createAt
          images {
            name
            url
          }
          video {
            name
            url
          }
          exercise {
            _id
            numbering
            title
            score
            paragraph
            images {
              name
              url
            }
            video {
              url
              name
            }
            createAt
          }
        }
      }
  `

export const GET_RESULT = gql`
           query Query {
  getStudentResult {
    _id
    createAt
    student {
      _id
      createAt
      email
      password
      khmerName
      name
      niceName
      gender
      motherOccupation
      motherPhone
      motherEdu
      motherName
      currentAddress
      placeOfBirth
      bloodType
      transferFrom
      dateOfBirth
      fatherName
      fatherEdu
      fatherPhone
      fatherOccupation
      images {
        name
        url
      }
    }
    programme {
      createAt
      name
      _id
    }
    level {
      _id
      name
      createAt
    }
    placement {
      _id
      name
      score
      createAt
    }
    score
    scoreBySubjects {
      score
      subject
      timer
      id
    }
  }
}
`
export const ADD_SCORE_SUBJECT = gql`
    mutation Mutation($input: addScoreInput!) {
      addScoreSubject(input: $input)
    }
`

export const GET_PLACEMENTID_BY_STUDENT = gql`
      query Query($studentId: String) {
           getPlacementidByStu(studentId: $studentId)
      }
`

export const GET_ALL_QUESTIONS = gql`
            query Query {
                getQuestions {
                    _id
                }
            }
`
export const UPDATE_STUDENT = gql`
    mutation Mutation($input: studentInputUpdate!) {
        studentUpdate(input: $input) {
            _id
            createAt
            email
            password
            khmerName
            name
            niceName
            gender
            dateOfBirth
            transferFrom
            bloodType
            placeOfBirth
            currentAddress
            motherName
            motherEdu
            motherPhone
            motherOccupation
            fatherName
            fatherEdu
            fatherPhone
            fatherOccupation
        }
        }
`

export const GET_OPTION_BY_QUESTION = gql`
query Query($questionId: String!) {
  getOptionsByQuestion(questionId: $questionId) {
    _id
    numbering
    option
    answer
    createAt
    question {
      _id
    }
    images {
      name
      url
    }
  }
}
`

export const GETPROGRAMMEBYSUBJECT = gql`
    query Query($subjectId: String!) {
       getProgrammebySubject(subjectId: $subjectId)
    }
`
export const GET_SCORE_SUBJECT = gql`
query GetSubject($subjectId: String) {
  getSubjectScore(subjectId: $subjectId)
}
`
export const GET_OPTION_SCORE = gql`
 query Query($getOptionScoreId: String!) {
  getOptionScore(id: $getOptionScoreId)
}
`
export const GET_OVERAL = gql`
  query Query($placementId: String!) {
    getOverall(placementId: $placementId)
  }
`
export const GET_SUBJECT_RESULT = gql`
  query GetSubjectResult($placementId: String!) {
    getSubjectResult(placementId: $placementId) {
      subject
      score
      status
    }
  }
`