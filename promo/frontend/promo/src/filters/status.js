export default (value) => {
  if (value === 0) {
    return 'Pending'
  } else if (value === 1) {
    return 'Rejected'
  } else {
    return 'Accepted'
  }
}
