import { log } from 'ruucm-util'
const _t = (current_lang, key) => {
  var data = {
    // Login
    로그인: 'Login',
    '비밀번호를 입력해주세요.': 'password',
    '아이디 찾기': 'Find ID',
    '비밀번호 찾기': 'Find Password',
    가입하기: 'Join',

    // Menus
    헬로고릴라: 'HelloGorilla',
    소개: 'About Us',
    프로그램: 'Program',
    고릴라상점: 'Shop',
    아티스트: 'Artist',
    소식: 'News',

    마이페이지: 'MyPage',
    회원가입: 'Join',
    'Language switcher': 'Ko',
  }

  return current_lang == 'en' ? data[key] : key
}

const _u = (current_lang, url) => {
  var lastChar = url[url.length - 1]
  var trimmedUrl = url
  if (lastChar == '/') trimmedUrl = trimmedUrl.slice(0, -1)

  return current_lang == 'en' ? trimmedUrl + '-en/' : trimmedUrl
}

export { _t, _u }
