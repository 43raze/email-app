import { randId } from './shared.js'

const repositoryEmails = []
const repositoryAccounts = []

function createAccount(nickname, passworld, firstName, lastName) {
  return {
    id: randId(),
    server: 'mailbox.com',
    nickname,
    passworld,
    firstName,
    lastName,
    get emailAddress() {
      return `${this.nickname}@${this.server}`
    },

    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  }
}

function addAccount(nickname, passworld, firstName, lastName) {
  if (repositoryAccounts.find(a => a.nickname === nickname)) return false
  const account = createAccount(nickname, passworld, firstName, lastName)
  repositoryAccounts.push(account)
  return true
}

function findAccount(nickname, passworld) {
  return repositoryAccounts.find(
    a => a.nickname === nickname && a.passworld === passworld
  )
}

function createEmail(subject, text, sender, recipient) {
  return {
    id: randId(),
    subject,
    text,
    sender,
    recipient,
  }
}

function addEmail(subject, text, sender, recipient) {
  const email = createEmail(subject, text, sender, recipient)
  repositoryEmails.push(email)
  return email
}

function findEmails(emailAddress) {
  return repositoryEmails.filter(e => e.recipient === emailAddress)
}

export { addAccount, findAccount, addEmail, findEmails }

// addAccount('alice', '1234', 'Alice', 'Smith')
// addAccount('bob', '5678', 'Bob', 'Johnson')

// console.log(
//   'Аккаунты:',
//   findAccount('alice', '1234'),
//   findAccount('bob', '5678')
// )

// addEmail('Привет!', 'Как дела, Боб?', 'alice@mailbox.com', 'bob@mailbox.com')

// addEmail(
//   'Ответ',
//   'Привет, Алиса! Всё отлично.',
//   'bob@mailbox.com',
//   'alice@mailbox.com'
// )

// const bobsEmails = findEmails('bob@mailbox.com')
// console.log('Письма Боба:', bobsEmails)

// const alicesEmails = findEmails('alice@mailbox.com')
// console.log('Письма Алисы:', alicesEmails)
