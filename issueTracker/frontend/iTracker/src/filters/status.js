export default (value) => {
  if (value === 0) {
    return 'UnAssigned'
  } else if (value === 1) {
    return 'Assigned'
  } else if (value === 2) {
    return 'Completed'
  } else {
    return 'Uknown'
  }
}
