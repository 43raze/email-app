import { addAccount, findAccount } from './sv.js'

let currentAccount = null

function register(nickname, password, firstName, lastName) {
  const account = addAccount(nickname, password, firstName, lastName)
  if (account) console.log(`Аккаунт ${nickname} успешно зарегистрирован!`)
  else console.error(`Аккаунт с таким ником ${nickname} уже есть ,(`)
}

function login(nickname, password) {
  const account = findAccount(nickname, password)
  if (!account) return console.error('Неверный логин или пароль')
  currentAccount = account
  console.log(`Вход выполнен: ${currentAccount.emailAddress}`)
}

const currentEmails = []

const email = {
  id: 'aabbccdd',
  subject: 'greetings',
  text: 'hello bob',
  sender: 'bob@mailbox.com',
  recipient: 'alice@mailbox.com',
  singature: 'ff0077aa',
  attachment: null,
}

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

// repositoryAccounts
// register('bob', 'qwerty123', 'Petya', 'Petrov')
// repositoryAccounts
// registerAccount('alice', 'pass456', 'Anna', 'Ivanova')
// registerAccount('bob', 'qwerty123', 'Petya', 'Petrov')

// console.log(repositoryAccounts)
// console.log(repositoryAccounts[0].emailAddress)
// console.log(repositoryAccounts[1].emailAddress)

// currentAccount
// login('bob', 'qwerty123')
// currentAccount

// login('alice', 'pass456')
// // console.log('Письма для Alice:', getCurrentEmails())
