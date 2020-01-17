export const parseDate = ( date ) => {
  let time = Date.now() - Date.parse(date)
  console.log(time % 60000)
  if (time % 60000 === time) {
  } else if (time % 36000000 === time) {
    return `${Math.round(time / 60000)} minutes ago`
  } else if (time % 86400000 === time) {
    return `${Math.round(time / 36000000)} hours ago`
  } else if (time % 604800000 === time) {
    return `${Math.round(time / 1000)} days ago`
  }
}
