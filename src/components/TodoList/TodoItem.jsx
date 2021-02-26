import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';

import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const TodoItem = ({
  todos,
  todo,
  changeTodo,
  toggleTodo,
  deleteTodo,
}) => {
  const [editTodo, setEditTodo] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);

  const handleEditing = (event) => {
    if (event.key === 'Enter') {
      if (todoTitle) {
        changeTodo(todo.id, todoTitle.trim());
      } else {
        deleteTodo(todo.id);
      }

      setEditTodo(false);
    }

    if (event.key === 'Escape') {
      setTodoTitle(todo.title);
      setEditTodo(false);
    }
  };

  const removefocus = (event) => {
    if (todoTitle) {
      changeTodo(todo.id, todoTitle.trim());
    } else {
      deleteTodo(todo.id);
    }

    setEditTodo(false);
  };

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editTodo,
      })}
      onDoubleClick={() => setEditTodo(!editTodo)}
    >
      {!editTodo
        ? (
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, todos)}
            />
            <label>
              {todo.title}
            </label>
            <button
              type="button"
              className="destroy"
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        )
        : (
          <input
            type="text"
            className="edit"
            value={todoTitle}
            autoFocus
            onChange={event => setTodoTitle(event.target.value)}
            onKeyUp={handleEditing}
            onBlur={removefocus}
          />
        )
      }
    </li>
  );
};

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(shape({
    id: PropTypes.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  todo: PropTypes.shape({
    id: PropTypes.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, actions)(TodoItem);
