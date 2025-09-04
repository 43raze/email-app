import { randId } from './shared.js'

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

    get fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  }
}

function addAccount(nickname, password, firstName, lastName) {
  if (repositoryAccounts.find(a => a.nickname === nickname)) return false
  const account = createAccount(nickname, password, firstName, lastName)
  repositoryAccounts.push(account)
  return true
}

function findAccount(nickname, password) {
  return repositoryAccounts.find(
    a => a.nickname === nickname && a.password === password
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
