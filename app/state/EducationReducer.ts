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
      const changed = currentState.splice(action.payload.index, 1)
      return [...currentState, {...changed[0], ...action.payload.newValue}]
    default:
      return currentState
  }
}