import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from '../../redux/constants';

const TodosFilter = ({
  todosFilter,
  showAllTodos,
  showCompletedTodos,
  showActiveTodos,
}) => (
  <ul className="filters">
    <li>
      <a
        href="#/"
        className={classNames({
          selected: todosFilter === SHOW_ALL,
        })}
        onClick={showAllTodos}
      >
        All
      </a>
    </li>

    <li>
      <a
        href="#/active"
        className={classNames({
          selected: todosFilter === SHOW_ACTIVE,
        })}
        onClick={showActiveTodos}
      >
        Active
      </a>
    </li>

    <li>
      <a
        href="#/completed"
        className={classNames({
          selected: todosFilter === SHOW_COMPLETED,
        })}
        onClick={showCompletedTodos}
      >
        Completed
      </a>
    </li>
  </ul>
);

TodosFilter.propTypes = {
  todosFilter: PropTypes.string.isRequired,
  showAllTodos: PropTypes.func.isRequired,
  showCompletedTodos: PropTypes.func.isRequired,
  showActiveTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  todosFilter: state.filter,
});

export default connect(mapStateToProps, {
  showAllTodos: actions.showAllTodos,
  showCompletedTodos: actions.showCompletedTodos,
  showActiveTodos: actions.showActiveTodos,
})(TodosFilter);

// export default connect(mapStateToProps, actions)(TodosFilter);
