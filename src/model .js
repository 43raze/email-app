const randId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)

const repositoryEmails = []
const repositoryAccounts = []

function createAccount(nickname, password, firstName, lastName) {
  return {
    id: randId(),
    server: 'mailbox.com',
    nickname,
    password,
    firstName,
    lastName,
    get emailAddress() {
      return `${this.nickname}@${this.server}`
    },
  }
}

function registerAccount(nickname, password, firstName, lastName) {
  const checkAccount = repositoryAccounts.find(acc => acc.nickname === nickname)

  if (checkAccount) {
    console.error(`Аккаунт с таким ником ${nickname} уже есть!`)
    return null
  }

  const account = createAccount(nickname, password, firstName, lastName)
  repositoryAccounts.push(account)
  return account
}

let currentAccount = null

function login(nickname, password) {
  const account = repositoryAccounts.find(
    acc => acc.nickname === nickname && acc.password === password
  )
  if (!account) return console.error('Неверный логин или пароль')

  currentAccount = account
  console.log(`Вход выполнен: ${currentAccount.emailAddress}`)

  return account
}

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

const currentEmails = []

registerAccount('bob', 'qwerty123', 'Petya', 'Petrov')
registerAccount('alice', 'pass456', 'Anna', 'Ivanova')
registerAccount('bob', 'qwerty123', 'Petya', 'Petrov')

console.log(repositoryAccounts)
console.log(repositoryAccounts[0].emailAddress)
console.log(repositoryAccounts[1].emailAddress)

login('bob', 'qwerty123')

login('alice', 'pass456')
console.log('Письма для Alice:', getCurrentEmails())
