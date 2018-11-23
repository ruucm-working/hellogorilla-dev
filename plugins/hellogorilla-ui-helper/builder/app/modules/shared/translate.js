import { log } from 'ruucm-util'
const _t = (current_lang, key) => {
  var data = {
    // Login
    로그인: 'Login',
    '이메일을 입력해주세요': 'email',
    '비밀번호를 입력해주세요.': 'password',
    '아이디 찾기': 'Find ID',
    '비밀번호 찾기': 'Find Password',
    가입하기: 'Join',

    // SignUp
    '인증번호 전송': 'Send',
    '인증번호 확인': 'Confirm',
    '회원가입을 축하 합니다.\n홈으로 이동합니다.': 'Thanks for Joining Us!',
    이메일: 'Email',
    이름: 'Name',
    비밀번호: 'Password',
    '8-20자 이내로 입력해주세요.': '8 to 20 letters',
    '비밀번호 확인을 위해 재입력해주세요.': 'Type same passwords',
    휴대폰: 'Phone',
    '인증번호를 입력해주세요.': 'Type confirm codes',
    '가입 버튼을 누름과 동시에 이용약관에 동의한 것으로 간주합니다.':
      'If you hit button below, it means you agree of our policy terms',
    가입하기: 'Join',
    '이미 계정이 있으신가요?': 'Already Have an account?',
    '전화번호는 필수 필드 입니다': 'Phone Information is Missed',
    '닉네임은 필수 필드 입니다': 'Email Information is Missed',
    '이메일은 필수 필드입니다': 'Email Information is Missed',
    '이메일을 입력하세요': 'Email Information is Missed',
    '이메일 형식이 잘못 되었습니다': 'Email Information is Not Valid',
    '비밀번호는 필수 필드 입니다': 'Password Information is Missed',
    '비밀번호가 같지 않습니다': 'Email Information is NOT match',

    // PhoneVerfication
    '휴대폰은 번호를 입력 해주세요': 'Phone Number is Missed',
    '입력하신 휴대폰으로 인증 번호가 전송되었습니다.':
      'Please Check the Verication Code in Your Phone',
    '휴대폰 인증이 정상적으로 되지 않았습니다': 'Your Phone is Not Verified',

    // Find Id
    '이메일 찾기': 'Find Email',
    '비밀번호 찾기': 'Find Password',
    '가입 시 입력한 휴대폰 번호를 다시 확인해주세요.':
      'Check Your Phone Number',

    // Find Password
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    // Menus
    헬로고릴라: 'HelloGorilla',
    소개: 'About Us',
    프로그램: 'Program',
    고릴라상점: 'Shop',
    아티스트: 'Artist',
    소식: 'News',

    마이페이지: 'MyPage',
    회원가입: 'Join',
  }

  return current_lang == 'en' ? data[key] : key
}

const _u = (current_lang, url) => {
  var lastChar = url[url.length - 1]
  var trimmedUrl = url
  if (lastChar == '/') trimmedUrl = trimmedUrl.slice(0, -1)

  if (url == '/cart') return current_lang == 'en' ? '#' : url
  else return current_lang == 'en' ? trimmedUrl + '-en/' : trimmedUrl
}

export { _t, _u }
