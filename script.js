const special = ['!', '@', '#', '$',  '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '\\', '|', '/', '?', ',', '<', '>']

const numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const getOptions = () => {
  const length = parseInt(prompt('Number of characters for password (Must be between 8 and 128):'))

  if (length < 8 || length > 128 || Number.isNaN(length)) {
    alert('Invalid Password Length')
    return null
  }

  const hasSpecial = confirm('Select OK to include special characters in password.')
  const hasNumeric = confirm('Select OK to include numeric characters in password.')
  const hasLower = confirm('Select OK to include lowercase characters in password.')
  const hasUpper = confirm('Select OK to include uppercase characters in password.')

  if (!hasSpecial && !hasNumeric && !hasLower && !hasUpper) {
    alert('You need to choose at least one character type.')
    return null
  }

  return { length, hasSpecial, hasNumeric, hasLower, hasUpper }
}

const getRandom = arr => arr[Math.floor(Math.random() * arr.length)]

const getPassword = () => {
  const options = getOptions()
  let passwordArr = []
  let canHaves = []
  let mustHaves = []

  if (options.hasSpecial) {
    canHaves = canHaves.concat(special)
    mustHaves.push(getRandom(special))
  }

  if (options.hasNumeric) {
    canHaves = canHaves.concat(numeric)
    mustHaves.push(getRandom(numeric))
  }

  if (options.hasLower) {
    canHaves = canHaves.concat(lower)
    mustHaves.push(getRandom(lower))
  }

  if (options.hasUpper) {
    canHaves = canHaves.concat(upper)
    mustHaves.push(getRandom(upper))
  }

  for (let i = 0; i < options.length; i ++) {
    passwordArr.push(getRandom(canHaves))
  }

  for (let i = 0; i < mustHaves.length; i++) {
    passwordArr[i] = mustHaves[i]
  }

  return passwordArr.join('')
}

document.getElementById('generate').addEventListener('click', () => {
  const password = getPassword()
  document.getElementById('password').value = password
})
