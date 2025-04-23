const idols = [
  //0
  {
    name:"Jin",
    points:0,
    img:"Jin.jpg"
  },
  //1
  {
    name:"Suga",
    points:0,
    img:"Suga.jpg"
  },
  //2
  {
    name:"J-Hope",
    points:0,
    img:"Jhope.jpg"
  },
  //3
  {
    name:"RM",
    points:0,
    img:"RM.jpg"
  },
  //4
  {
    name:"Jimin",
    points:0,
    img:"Jimin.jpg"
  },
  //5
  {
    name:"V",
    points:0,
    img:"V.jpg"
  },
  //6
  {
    name:"Jungkook",
    points:0,
    img:"Jungkook.png"
  },
]; 

const questions = 
  [
    {
      Q:"Are you introverted (yes) or extroverted(no) ?",
      Y:[1,3,6],
      N:[0,2,4,5]
    },
    {
      Q:"Are you the type of person to study in your free time?",
      Y:[0,1,3],
      N:[2,4,5,6]
    },
    {
      Q:"Do you consider yourself worldwide good-looking?",
      Y:[0,5,6],
      N:[1,2,3,4]
    },
    {
      Q:"Did you ever get COVID-19?",
      Y:[0,1,3,4,5],
      N:[2,6]
    },
    {
      Q:"If anyone tells you you are good-looking, would you agree with them or disagree?",
      Y:[0,4,6],
      N:[1,2,3,5]
    },
    {
      Q:"Are you the type of person to participate in school spirit weeks?",
      Y:[0,2,6],
      N:[1,3,4,5]
    },
    {
      Q:"Do you flirt a lot?",
      Y:[0,1,5,6],
      N:[2,3,4]
    },
    {
      Q:"Do you speak any foreign languages?",
      Y:[0,3],
      N:[1,2,4,5,6]
    },
    {
      Q:"Do you prefer Christmas(yes) or Halloween?(no)",
      Y:[2,4,5,6],
      N:[0,1,3]
    },
    {
      Q:"Are you athletic?",
      Y:[2,4,5,6],
      N:[0,1,3]
    },
    {
      Q:"Are you a smart student with perfect grades?",
      Y:[0,3],
      N:[1,2,4,5,6]
    },
    
  ]


let index = 0; 

function Event(yes)
  {
    if(yes)
    {
      let yesPeople = questions[index].Y;
      for(let i = 0; i < yesPeople.length;i++)
      {
        idols[yesPeople[i]].points = idols[yesPeople[i]].points+1; 
      } 
    }
    else
    {
      let noPeople = questions[index].N;
      for(let i = 0; i < noPeople.length;i++)
      {
        idols[noPeople[i]].points = idols[noPeople[i]].points+1; 
      }
    }
    index++;
    GenerateQuestion()
    
  }


function startGame() 
{
document.getElementById("Start").style.display = "none";
  document.getElementById("questions").style.display = "inline";
}

function GenerateQuestion()
{
  console.log(index)
  if(!questions[index])
  {
    EndGame(); 
    return; 
  }
  
  let questionName = questions[index].Q;
  let container = document.createElement("div");
  let questionRender = document.createElement("div");

  questionRender.style.color = "#ffbe3b"
  questionRender.style.fontSize="20px"
  
  let yesButton = document.createElement("button");
  
  yesButton.innerHTML = "yes";

  yesButton.setAttribute("onclick", "Event(true)")

  yesButton.setAttribute("class", "buttonStyle1")

  let noButton = document.createElement("button");
  
  noButton.innerHTML = "no";

  noButton.setAttribute("onclick", "Event(false)")
  
  noButton.setAttribute("class", "buttonStyle2")
  questionRender.innerHTML = `Question ${index+1}. ${questionName}`;

  container.appendChild(questionRender)

  container.appendChild(yesButton)
  container.appendChild(noButton)
  document.getElementById("questions").innerHTML= "";
  document.getElementById("questions").appendChild(container)
  
}

function EndGame() 
  {
    console.log(idols)
    let max = 0; 
    let passedIdols = []
    for(let i = 0; i < idols.length; i++)
      {
        if(idols[i].points > max)
        {
          max = idols[i].points;
          passedIdols = [];
          passedIdols.push(idols[i]);
        } 
        else if (idols[i].points == max)
        {
          passedIdols.push(idols[i]);
        }
      }
    let winner = getRandomInt(passedIdols.length)
    
  document.getElementById("questions").innerHTML=` <img class="pic"src="${ passedIdols[winner].img}"> <p style="font-size:30px;color:#ffbe3b">${ passedIdols[winner].name}</p>`
    
    
  }
GenerateQuestion();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}