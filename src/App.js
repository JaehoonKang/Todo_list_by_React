import React, { Component } from 'react'; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

class App extends Component {
  state={
    page: 'login'
  }

  goToTodoPage = () => (
    this.setState({
      page: 'todo'
    })
  )
  
  render() {
    const {page} = this.state
    return (
      <div>
        {page === 'login'? (
          <LoginPage onLogin={this.goToTodoPage} />
        ): (
          <TodoPage />
        )}
      </div>
    )
  }
}

export default App;