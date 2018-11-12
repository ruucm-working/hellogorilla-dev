const _t = (current_lang, key) => {
  var data = {
    로그인: 'Login',
    '비밀번호를 입력해주세요.': 'password',
    '아이디 찾기': 'Find ID',
    '비밀번호 찾기': 'Find Password',
  }

  return current_lang == 'en' ? data[key] : key
}

export default _t
