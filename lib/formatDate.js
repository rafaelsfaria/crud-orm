const formatDate = (dateToFormat) => {
  const year = dateToFormat.getFullYear()
  let month = dateToFormat.getMonth() + 1
  let date = dateToFormat.getDate()
  if (month < 10) {
    month = '-0' + month
  } else {
    month = '-' + month
  }
  if (date < 10) {
    date = '-0' + date
  } else {
    date = '-' + date
  }
  return year + month + date
}

module.exports = formatDate