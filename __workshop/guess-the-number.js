const inquirer = require('inquirer');

console.log('\"HEY! its time forrrrrrrrrrr \'GUESS THAT NUMBER\' Montreal\'s premier game show on AM radio. I\'m your host Clyde Bellington!, give us a call at 514-RUN-AWAY and see if you can GUESS THAT NUMBER\"')

let name = null
let randomNum = Math.floor(Math.random() * 100)

let questions = [
    {
        type: 'input',
        name: 'phoneCall',
        message: 'You pick up the rotary handset and put it up to your ear. The dialtone hums, you\'ve been waiting for this moment for weeks. This is your chance, you just need to call, what was that number again?',
        validate: function(value) {
            if (value === '514-786-2929' || value === '5147862929' || value === '(514)7862929') {
                return true
            }
                return 'Your fingers, swift and panicked, move inaccurately pulling the rotary disk a bit too far, or a bit too short. This never happens when you\'re calling your mother. Rest her soul. You take a deep breath and try again'
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'the dialtone buzzes... ... ... ... ! On the other side you can hear the buzz crackle into static air, and then finally a voice. \"Hi you\'ve reached SLOWCLAP 1280, you\'ve been picked to play \'GUESS THE NUMBER\', could I please get your name? \n \"Did you mean \"GUESS THAT NUMBER\"? You correct the person on the other line. \n... \"Yes, Guess That Number\"',
            validate: function(value) {
                if (typeof value === 'string') {
                    name = value
                    return true
                } 
                    return '\"...Excuse me?\"'
            }
        },
        {
            type: 'list',
            name: 'chickenOut',
            message: `\"Okay ${name}, just give us a sec, we'll put you on hold.\". You flick off the radio. The bored intern's voice melts away into some sanitized jazz. Like Mingus on sleeping pills. You feel hyper-aware in this still moment. You can feel your heart beat in your upper arm, definitely not where it should be. Your neck hairs bristle against your tee shirt, you aren't moving.`,
            choices: ['CHICKEN OUT', 'Be steady'],
            default: 'CHICKEN OUT',
            validate: function(value) {
                console.log(value);
                if (value === 'CHICKEN OUT') {
                    return 'You pull the handset from your head and reach to place it back on the switch-hook. Though faintly, you can hear Clyde\'s voice on the line. You quickly pull the receiver back to your ear'
                } else
                    return true
            }
        },
        {
            type: 'input',
            name: 'firstGuess',
            message: `\"We have ${name} on the phone! ${name}, are you ready to play? If you don't remember the rules, we have a hidden number between 1 and 100, you have 5 guesses and every guess you get a hint if it's lower or higher. If you can guess correctly before you hit 5 guesses you win todays prize! A pair of tickets to see The Police live! Let's play!" The shock jock's voice cuts out for a second while they play their prerecorded jingles. You steel yourself. \"Alright what's your first guess?\"`,
            validate: function(value) {
                if (value > randomNum) {
                    'The answer is lower'
                } else if ( value < randomNum) {
                    'the answer is higher'
                } else {
                    'you\'re dead on!'
                }
            }
        },
        {
            type: 'input',
            name: 'secondGuess',
            message: '',
            validate: function(value) {
                if (value > randomNum) {
                    'The answer is lower'
                    return true
                } else if ( value < randomNum) {
                    'the answer is higher'
                    return true
                } else {
                    'you\'re dead on!'
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'thirdGuess',
            message: '',
            validate: function(value) {
                if (value > randomNum) {
                    'The answer is lower'
                } else if ( value < randomNum) {
                    'the answer is higher'
                } else {
                    'you\'re dead on!'
                }
            }
        },
        {
            type: 'input',
            name: 'fourthGuess',
            message: '',
            validate: function(value) {
                if (value > randomNum) {
                    'The answer is lower'
                } else if ( value < randomNum) {
                    'the answer is higher'
                } else {
                    'you\'re dead on!'
                }
            }
        },
        {
            type: 'input',
            name: 'finalGuess',
            message: '',
            validate: function(value) {
                if (value > randomNum) {
                    'The answer is lower'
                } else if ( value < randomNum) {
                    'the answer is higher'
                } else {
                    'you\'re dead on!'
                }
            }
        },

]

inquirer.prompt(questions).then(answers => {
    console.log(answers)
})

