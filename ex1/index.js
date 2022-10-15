const fs = require('fs')

// create a JSON object
const user = {
  id: 19521507,
  name: 'Hieu',
  age: 21
}


const data = JSON.stringify(user)


fs.writeFile('user.json', data, err => {
  if (err) {
    throw err
  }
  console.log('JSON data is saved.')
})