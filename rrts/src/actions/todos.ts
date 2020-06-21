import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = (): Function => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(todosUrl);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};

export { fetchTodos, deleteTodo };
