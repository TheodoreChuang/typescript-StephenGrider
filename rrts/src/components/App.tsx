import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';
import { Todo, fetchTodos } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.todos);
    return <div>Hi there</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const App = connect(mapStateToProps, { fetchTodos })(_App);

export { App };
