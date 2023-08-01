import axios from 'axios'

export const postData = async () => {
  return await axios.post('https://jsonplaceholder.typicode.com/project', {
    id: 1,
    project: 'first',
    details: 'test',
    isCompleted: false
  })
}
