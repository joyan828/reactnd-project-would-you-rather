import { 
  generateQuestion, 
  generateUser,
  formatComment
 } from './formatter'

export let users = {
  sarahedo: {
    id: 'sarahedo',
    password: 'sarahedo123',
    name: 'Sarah Edo',
    avatarURL: "https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=Heather&clotheType=GraphicShirt&eyeType=Cry&eyebrowType=RaisedExcitedNatural&facialHairColor=Brown&facialHairType=BeardMagestic&hairColor=Platinum&hatColor=PastelOrange&mouthType=Sad&skinColor=Light&topType=ShortHairShortFlat",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password: 'tyler123',
    name: 'Tyler McGinnis',
    avatarURL: "https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheColor=Pink&clotheType=CollarSweater&eyeType=Side&eyebrowType=DefaultNatural&facialHairColor=BrownDark&facialHairType=BeardLight&hairColor=BrownDark&hatColor=Black&mouthType=Concerned&skinColor=Pale&topType=LongHairBob",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    password: 'johndoe123',
    name: 'John Doe',
    avatarURL: "https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=Black&clotheType=BlazerShirt&eyeType=Dizzy&eyebrowType=DefaultNatural&facialHairColor=Brown&facialHairType=BeardLight&hairColor=BrownDark&hatColor=Red&mouthType=Disbelief&skinColor=Black&topType=LongHairStraight2",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionTwo',
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

export let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo', 'tylermcginnis'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have horrible long term memory'
    },
    comments: ['8xf0y6ziyjabvozdd234nd', 'xj192vofupe1dqz9emx13r', 'vthrdm231a262al8qx3do']
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    },
    comments: []
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    },
    comments: ['eochs1aqm35b708cmbf3g']
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    },
    comments: []
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    },
    comments: []
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    },
    comments: []
  },
}
 
export let comments = {
  "8xf0y6ziyjabvozdd234nd": {
    id: '8xf0y6ziyjabvozdd234nd',
    text: 'It would be better not to keep some bad memories, how do you think guys?',
    vote: 'optionOne', 
    commentingTo: '8xf0y6ziyjabvozdd253nd', 
    author: 'sarahedo',
    timestamp: 1518122597860,
    likes: ['tylermcginnis'],
    replies: ['xj192vofupe1dqz9emx13r', 'vthrdm231a262al8qx3do',],
    replyingTo: null, 
  },
  "xj192vofupe1dqz9emx13r": {
    id: 'xj192vofupe1dqz9emx13r',
    text: 'I really wanna forget about the night I throw up on Johns face at your party...😭',
    vote: 'optionOne', 
    commentingTo: '8xf0y6ziyjabvozdd253nd', 
    author: 'tylermcginnis',
    timestamp: 1518122597890,
    likes: ['sarahedo', 'johndoe'],
    replies: [],
    replyingTo: '8xf0y6ziyjabvozdd234nd', 
  },
  "vthrdm231a262al8qx3do" : {
    id: 'vthrdm231a262al8qx3do',
    text: 'Lol hell no, I will remember that till the end of my life.',
    vote: 'optionTwo', 
    commentingTo: '8xf0y6ziyjabvozdd253nd', 
    author: 'johndoe',
    timestamp: 1518122598903,
    likes: [],
    replies: [],
    replyingTo: '8xf0y6ziyjabvozdd234nd', 
  },
  "eochs1aqm35b708cmbf3g" : {
    id: 'eochs1aqm35b708cmbf3g',
    text: 'Like professor X from x-men!',
    vote: 'optionTwo', 
    commentingTo: 'am8ehyc8byjqgar0jgpub9', 
    author: 'sarahedo',
    timestamp: 1518122989030,
    likes: [],
    replies: [],
    replyingTo: null, 
  }
}

export function _getUsers () {
  return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
  })
}
export function _getQuestions () {
  return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
  })
}
export function _getComments (questionId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let commentsObj = {}
      for (let key in comments) {
        const comment = comments[key]

        // commentingTo: question Id
        if(comment.commentingTo === questionId){
          commentsObj = { 
            ...commentsObj,
            [comment.id] : {
              ...comment
            }
          }
        }
      }

      res({comments: commentsObj})
    }, 500)
  })
}
export function _saveQuestion ({author, optionOneText, optionTwoText}) {
  return new Promise((res, rej) => {
      const authedUser = author;
      const generatedQuestion = generateQuestion({author, optionOneText, optionTwoText});

      setTimeout(() => {
        questions = {
            ...questions,
            [generatedQuestion.id]: generatedQuestion
        }
        
        users = {
            ...users,
            [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([generatedQuestion.id])
            }
        }

      res(generatedQuestion)
      }, 1000)
  })
}
export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          users = {
              ...users,
              [authedUser]: {
                  ...users[authedUser],
                  answers: {
                      ...users[authedUser].answers,
                      [qid]: answer
                  }
              }
          }

          questions = {
              ...questions,
              [qid]: {
                  ...questions[qid],
                  [answer]: {
                      ...questions[qid][answer],
                      votes: questions[qid][answer].votes.concat([authedUser])
                  }
              }
          }

      res({users, questions})
      }, 500)
  })
}
export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      comments = {
        ...comments,
        [id]: {
          ...comments[id],
          likes: hasLiked === true
            ? comments[id].likes.filter((uid) => uid !== authedUser)
            : comments[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}

export function _saveUser ({id, password, name}) {
  return new Promise((res, rej) => {
    const user = generateUser({id, password, name})
    setTimeout(() => {
      users = {
        ...users,
        [id]: {
          ...user
        }
      }
      res({user})
    }, 500)
  })
}

export function _logInUser ({id, password}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let authedUser = null
      for (let key in users) {
        const user = users[key]
        if(user.id === id && user.password === password) {
          authedUser = id
        }
      }

      res(authedUser)
    }, 500)
  })
}

export function _logOutUser (id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(id)
    }, 500)
  })
}
