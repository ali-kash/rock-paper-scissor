const rockHtml = document.getElementById('rock').innerHTML
const paperHtml = document.getElementById('paper').innerHTML
const scissorsHtml = document.getElementById('scissors').innerHTML

const handOptions = {
	rock: rockHtml,
	paper: paperHtml,
	scissors: scissorsHtml,
}

let SCORE = 0

const pickUserHand = (hand) => {
	let hands = document.querySelector('.start')
	hands.style.display = 'none'

	let contest = document.querySelector('.contest')
	contest.style.display = 'flex'

	// set the user pick
	document.querySelector('.userPickImage').innerHTML = handOptions[hand]

	let cpHand = pickComputerHand(hand)
	referee(hand, cpHand)
}

const pickComputerHand = (hand) => {
	let hands = ['rock', 'paper', 'scissors']
	let cpHand = hands[Math.floor(Math.random() * hands.length)]

	document.querySelector('.compPickImage').innerHTML = handOptions[cpHand]

	return cpHand
}

const referee = (userHand, cpHand) => {
	if (userHand == 'paper' && cpHand == 'scissors') {
		setDecision('YOU LOSE!')
	}
	if (userHand == 'paper' && cpHand == 'rock') {
		setDecision('YOU WIN!')
		setScore(SCORE + 1)
	}
	if (userHand == 'paper' && cpHand == 'paper') {
		setDecision("It's a tie!")
	}
	if (userHand == 'rock' && cpHand == 'scissors') {
		setDecision('YOU WIN!')
		setScore(SCORE + 1)
	}
	if (userHand == 'rock' && cpHand == 'paper') {
		setDecision('YOU LOSE!')
	}
	if (userHand == 'rock' && cpHand == 'rock') {
		setDecision("It's a tie!")
	}
	if (userHand == 'scissors' && cpHand == 'scissors') {
		setDecision("It's a tie!")
	}
	if (userHand == 'scissors' && cpHand == 'rock') {
		setDecision('YOU LOSE!')
	}
	if (userHand == 'scissors' && cpHand == 'paper') {
		setDecision('YOU WIN!')
		setScore(SCORE + 1)
	}
}

const restartGame = () => {
	let contest = document.querySelector('.contest')
	contest.style.display = 'none'

	let hands = document.querySelector('.start')
	hands.style.display = 'flex'
}

const setDecision = (decision) => {
	document.querySelector('.decision .contest__title').innerText = decision
	// console.log(decision)
}

const setScore = (newScore) => {
	SCORE = newScore
	document.querySelector('.score').innerText = newScore
	// console.log(newScore)
}

const openBtn = () => {
	const openModal = document.querySelector('.rules-modal')
	openModal.style.display = 'flex'
}

const closeBtn = () => {
	const closeModal = document.querySelector('.rules-modal')
	closeModal.style.display = 'none'
}
