const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, target) => {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const {homeTeam, awayTeam} = game;
    const newEntry = document.createElement('li');

    newEntry.innerHTML = getScoreLine(game);
  
    
    newEntry.classList.add(isWinner(game, target) ? 'win' : 'loss');
  
    ulParent.append(newEntry);
  }
  return ulParent;
};

const isWinner = ({homeTeam, awayTeam}, target) => {
  const winner = homeTeam.team === target ? homeTeam : awayTeam;
  return winner.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam, points: hPoints} = homeTeam;
  const {team: aTeam, points: aPoints} = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;

  let scoreLine;
  if (aPoints > hPoints)
    scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  else 
    scoreLine = `${aPoints}-<b>${hPoints}</b>`;

  return `${teamNames} ${scoreLine}`;
}

const chart1 = makeChart(warriorsGames, 'Golden State');
document.body.prepend(chart1);
