/**
 * This program generates a random number between 1 and 6
 *
 *
 * By: Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()
const max = 6
const min = 1
const randomInt = Math.floor(Math.random() * max) + min
let firstInt = 1

while (true) {
  try {
    const userString = prompt('Guess a number between 1 to 6: ')
    const user = parseInt(userString)

    if (isNaN(user)) {
      throw new Error('not a number')
    }
    if (user < 1 || user > 6) {
      console.log("This isn't between 1 to 6.")
    } else if (user === randomInt) {
      console.log('\nYou are correct!')
      console.log(`It took you ${firstInt} tries.`)
      break
    } else if (user > randomInt) {
	    console.log('You guessed too high, guess again.')
    } else {
      console.log('You guessed too low, guess again.')
    }
  } catch (e) {
    console.log("This isn't an integer between 1 to 6.")
  }
  firstInt = firstInt + 1
}
console.log('\nDone.')
