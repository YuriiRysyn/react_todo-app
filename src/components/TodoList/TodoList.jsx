import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { shape } from 'prop-types';

import TodoItem from './TodoItem';
import * as actions from '../../redux/actions';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(shape({
    id: PropTypes.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, actions)(TodoList);
