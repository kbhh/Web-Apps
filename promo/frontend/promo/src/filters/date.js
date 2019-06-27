export default (value) => {
  let date = new Date(value)
  return date.toLocaleString('ethiopic')
}
