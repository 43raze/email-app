import { addAccount, findAccount, addEmail, findEmails } from './sv.js'

let currentAccount = null
const currentEmails = []

function register(nickname, password, firstName, lastName) {
  const account = addAccount(nickname, password, firstName, lastName)
  if (account) console.log(`Аккаунт ${nickname} успешно зарегистрирован!`)
  else console.error(`Аккаунт с таким ником ${nickname} уже есть ,(`)
}

function login(nickname, password) {
  const account = findAccount(nickname, password)
  if (!account) return console.error('Неверный логин или пароль')
  currentAccount = account
}

function sendEmail(subject, text, recipient) {
  const sender = currentAccount.emailAddress
  addEmail(subject, text, sender, recipient)
  console.log('Hi', 'test', 'alice@mailbox.com')
}

function emailInbox() {
  if (!currentAccount) return null
  return findEmails(currentAccount.emailAddress)
}

export { register, login, sendEmail, emailInbox }

// const email = {
//   id: 'aabbccdd',
//   subject: 'greetings',
//   text: 'hello bob',
//   sender: 'bob@mailbox.com',
//   recipient: 'alice@mailbox.com',
//   singature: 'ff0077aa',
//   attachment: null,
// }

// const account = {
//   id: 'ff00aa77',
//   nickname: 'bob',
//   password: 'qwerty123',
//   server: 'mailbox.com',
//   firstName: 'Petya',
//   lastName: 'Petrov',
//   get emailAddress() {
//     return 'bob@mailbox.com'
//   },
// }
