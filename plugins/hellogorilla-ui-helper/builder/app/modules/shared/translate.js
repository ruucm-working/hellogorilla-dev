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
    '로그인에 성공 하였습니다': 'Success',

    // SignUp
    '인증번호 전송': 'Send',
    '휴대폰 가입확인': 'Check Phone',
    '인증번호 확인': 'Confirm',
    '회원가입을 축하 합니다.\n홈으로 이동합니다.': 'Thanks for Joining Us!',
    이메일: 'Email',
    름: 'Name',
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
    '소형식이 잘못 되었습니다': 'Email Information is Not Valid',
    '비밀번호는 필수 필드 입니다': 'Password Information is Missed',
    '비밀번호가 같지 않습니다': 'Email Information is NOT match',
    '입력하신 휴대폰 번호로 가입하실 수 있습니다.\n아래 버튼을 클릭하여 인증을 진행해주세요.':
      'This is an available phone number.\nPress below button to Verification',
    '입력하신 휴대폰으로 이미 가입된 사용자가 있습니다.':
      'User already signed up with the phone number',

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

    // PhoneVerfication
    '휴대폰 번호를 입력 해주세요': 'Phone Number is Missed',
    '입력하신 휴대폰으로 인증 번호가 전송되었습니다.':
      'Please Check the Verification Code in Your Phone',
    '휴대폰 번호가 조회 되었습니다.\n아래 버튼을 클릭하여 인증을 진행해주세요.':
      'Press below button to start Verification',
    '휴대폰 인증이 정상적으로 되지 않았습니다': 'Your Phone is Not Verified',
    '도착한 인증번호를 입력해 주세요': 'Verification Code is Missed',
    '휴대폰이 정상적으로 인증 되었습니다':
      'Verification is Successfully completed',
    '휴대폰 인증에 실패 했습니다': 'Verification Failed',
    '휴대폰으로 인증번호를 보내주세요':
      'Please Send Verification Code to Your Phone',
    '입력하신 휴대폰으로 등록된 사용자를 찾을 수 없습니다.':
      "Can't find a user by the phone",
    '남은 시간': 'Time Left',
    '새로운 인증번호를 요청해주세요': 'Try Again',

    // Menus
    헬로고릴라: 'HelloGorilla',
    소개: 'About Us',
    프로그램: 'Program',
    고릴라상점: 'Shop',
    아티스트: 'Artist',
    소식: 'News',

    마이페이지: 'MyPage',
    회원가입: 'Join',

    // User Profile
    '작품 소개': 'Portfolios',
    '관련 상품': 'Products',

    // Shop
    '모두 보기': 'All',
    '카테고리 1': 'Category 1',
    '￦': '$',

    // My Page
    '계정 상세': 'Profile',
    로그아웃: 'Logout',
    성: 'Last Name',
    '보여질 이름': 'Display Name',
    '이 이름이 보여집니다.': 'This name will be displayed',
    '이메일 주소': 'Email',
    '비밀번호 변경': 'Change Password',
    '현재 비밀번호 (변경하지 않으려면 비워두세요)': 'Current Password',
    '새 비밀번호 (변경하지 않으려면 비워두세요)': 'New Password',
    '새 비밀번호 확인': 'Confirm Password',
    '변경 사항 저장': 'Save',
  }

  return current_lang == 'en' ? data[key] : key
}

const _u = (current_lang, url) => {
  var lastChar = url[url.length - 1]
  var trimmedUrl = url
  if (lastChar == '/') trimmedUrl = trimmedUrl.slice(0, -1)

  if (url == '/cart') return current_lang == 'en' ? '#' : url
  else if (url == '/my-account/orders')
    return current_lang == 'en' ? '/my-account-en/orders' : url
  else return current_lang == 'en' ? trimmedUrl + '-en/' : trimmedUrl
}

export { _t, _u }
