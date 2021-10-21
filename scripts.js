const rockHtml = document.getElementById('rock').innerHTML
const paperHtml = document.getElementById('paper').innerHTML
const scissorsHtml = document.getElementById('scissors').innerHTML

const handOptions = {
	rock: rockHtml,
	paper: paperHtml,
	scissors: scissorsHtml,
}

const pickUserHand = (hand) => {
	let hands = document.querySelector('.start')
	hands.style.display = 'none'

	let contest = document.querySelector('.contest')
	contest.style.display = 'flex'

	// set the user pick
	document.querySelector('.userPickImage').innerHTML = handOptions[hand]

	pickComputerHand()
}

const pickComputerHand = () => {
	let hands = ['rock', 'paper', 'scissors']

	let cpHand = hands[Math.floor(Math.random() * hands.length)]

	document.querySelector('.compPickImage').innerHTML = handOptions[cpHand]
}
