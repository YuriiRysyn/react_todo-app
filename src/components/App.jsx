import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes, { shape } from 'prop-types';

import { TodoList } from './TodoList/TodoList';
import AddTodos from './AddTodos/AddTodos';
import TodosFilter from './TodosFilter/TodosFilter';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
} from '../redux/constants';

import * as actions from '../redux/actions';

const App = ({
  todos,
  markAllTodos,
  clearCompletedTodos,
  getTodosFromLS,
  todosFilter,
}) => {
  const [unCompletedTodos, setUnCompletedTodos] = useState('');
  const [completedTodos, setCompletedTodos] = useState('');
  const [isAllToodosCompleted, setIsAllToodosCompleted] = useState(false);

  const filterTodosByCompleteStatus = () => {
    if (todosFilter === SHOW_ALL) {
      return todos;
    }

    return todos.filter(todo => (
      todosFilter === SHOW_COMPLETED
        ? todo.completed
        : !todo.completed
    ));
  };

  const filteredTodos = useMemo(
    () => filterTodosByCompleteStatus(),
    [todosFilter, todos],
  );

  useEffect(() => {
    getTodosFromLS();
  }, []);

  useEffect(() => {
    setUnCompletedTodos(() => todos.filter(todo => !todo.completed));
    setCompletedTodos(() => todos.filter(todo => todo.completed));

    setIsAllToodosCompleted(() => todos.every(item => item.completed === true));

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodos />
      </header>
      {todos.length !== 0
        ? (
          <>
            <section className="main">
              <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                checked={isAllToodosCompleted}
                onChange={() => markAllTodos(isAllToodosCompleted)}
              />
              <label htmlFor="toggle-all">Mark all as complete</label>

              <TodoList
                todos={filteredTodos}
              />
            </section>

            <footer className="footer">
              <span className="todo-count">
                {unCompletedTodos.length}
                {unCompletedTodos.length === 1 ? ' item ' : ' items '}
                left
              </span>

              <TodosFilter />
              {completedTodos.length > 0
                ? (
                  <button
                    type="button"
                    className="clear-completed"
                    onClick={clearCompletedTodos}
                  >
                    Clear completed
                  </button>
                )
                : ''
              }

            </footer>
          </>
        )
        : ''
      }

    </section>
  );
};

App.propTypes = {
  todos: PropTypes.arrayOf(shape({
    id: PropTypes.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  markAllTodos: PropTypes.func.isRequired,
  clearCompletedTodos: PropTypes.func.isRequired,
  getTodosFromLS: PropTypes.func.isRequired,
  todosFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  todosFilter: state.filter,
});

export default connect(mapStateToProps, actions)(App);
