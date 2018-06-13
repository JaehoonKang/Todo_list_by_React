import React, {Component} from 'react'

export default class LoginPage extends Component {
  
  render() {
    const {onLogin} =this.props;

    return (
      <React.Fragment>
          <h1>로그인페이지</h1>
          <label>로그인
            아이디: <input type="text"/>
            비밀번호: <input type="password"/>
          </label>
            <br/>
          <button onClick={onLogin}>로그인</button>
      </React.Fragment>
    )
  }
} 



