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

export { addAccount, findAccount }
