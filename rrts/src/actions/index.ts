import axios from 'axios'
import { Dispatch } from 'redux'

const todosUrl = 'https://jsonplaceholder.typicode.com/todos'

const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(todosUrl)

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    })
  }
}
