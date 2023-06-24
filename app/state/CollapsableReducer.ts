export const INITIAL_STATE = {
  collapsed: false,
  currentIndex: 0,
}

export const collapsableReducer = (currentState: any, action: any) => {
  switch(action.type) {
    case 'COLLAPSE':
      return {
        collapsed: action.payload.collapsed,
        currentIndex: action.payload.currentIndex
      }
    default:
      return currentState
  }
}