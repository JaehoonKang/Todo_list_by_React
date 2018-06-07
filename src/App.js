import React, { Component } from 'react';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        body: 'React 공부',
        complete: true
      },
      {
        id: 2,
        body: 'Redux 공부',
        complete: false
      }
    ],
    newTodoBody:''
  }

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    })
  }

  render() {
    const {todos, newTodoBody} = this.state;

    return (
      <div>
        <h1>할일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange}/>
          <button>추가</button>
          </label>

        <ul>
          {
            todos.map(todo => (
              <li className={todo.complete ? 'complete': ''} key={todo.id}>{todo.body}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
