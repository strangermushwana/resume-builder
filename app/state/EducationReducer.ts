export const EDUCATION_INITIAL_STATE = [
  {
    id: crypto.randomUUID(),
    school: '',
    qualification: '',
    startDate: '',
    endDate: '',
    city: '',
    description: '',
  },
]

export const educationReducer = (currentState: any, action: any) => {
  switch(action.type) {
    case 'UPDATE_EDUCATION':
      const selected = currentState[action.payload.index]
      let temp = [...currentState]
      temp[action.payload.index] = { ...selected, ...action.payload.newValue }
      return temp
    case 'ADD_EDUCATION':
      return [...action.payload.education]
    default:
      return currentState
  }
}