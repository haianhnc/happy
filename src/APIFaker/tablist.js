// api.js
const tablist = [
  'newtab1', 'newtab2', 'newtab3', 'newtab4', 'newtab5'
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(tablist)
    }, 3000)
  })
}