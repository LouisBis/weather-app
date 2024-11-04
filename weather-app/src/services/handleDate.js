export const convertDateFormat = dateStr => {
  let date

  if (dateStr == '' || dateStr == null || dateStr == undefined) {
    date = new Date()
  } else {
    date = new Date(dateStr)
  }

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)
  const hours = String(date.getHours()).padStart(2, '0')

  const formattedDate = `${day}/${month}/${year} ${hours}h`

  return formattedDate
}
