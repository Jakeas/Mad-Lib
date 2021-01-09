let nouns = []
let verbs = []
let adjects = []
let silliness = []
let nounsTwo = []
let verbsTwo = []
let adjectsTwo = []

function madLib(){
    const noun = nouns[Math.floor(Math.random()* nouns.length)]
    const verb = verbs[Math.floor(Math.random()* verbs.length)]
    const adj = adjects[Math.floor(Math.random()* adjects.length)]
    const nounTwo = nounsTwo[Math.floor(Math.random()* nouns.length)]
    const verbTwo = verbsTwo[Math.floor(Math.random()* verbs.length)]
    const adjTwo = adjectsTwo[Math.floor(Math.random()* adjects.length)]
    const silly = silliness[Math.floor(Math.random()* silliness.length)]

    console.log(`${noun} the wizard joined the knights and ${verb} to the nearby kingdom where all the ${adj} goats were keeping Princess ${nounTwo} hostage. The group ${verbTwo} toward the hoard of goats as the wizard yelled ${adjTwo} ${silly}.  The goats were all vanquished and the Princess was set free.`)

 
    nounOne.textContent = `${noun} the wizard joined the knights and ${verb} to the nearby kingdom where all the ${adj} goats were keeping Princess ${nounTwo} hostage. The group ${verbTwo} toward the hoard of goats as the wizard yelled ${adjTwo} ${silly}.  The goats were all vanquished and the Princess was set free.`
}   
   
    const readyButton = document.querySelector('.ready') 
    const nounOne  = document.querySelector('.nounFirst') 
    const verbOne  = document.querySelector('.verbFirst') 
    const adjOne  = document.querySelector('.adjFirst') 
    const sillyOne  = document.querySelector('.sillyFirst') 
    const nounTwo  = document.querySelector('.nounSecond') 
    const verbTwo  = document.querySelector('.verbSecond') 
    const adjTwo  = document.querySelector('.adjSecond')
    const userList = document.querySelector('.name-list')
    
    const listInputNoun = document.querySelector('.list-inputNoun')
    const listInputVerb = document.querySelector('.list-inputVerb')
    const listInputAdj = document.querySelector('.list-inputAdj')
    const listInputNounTwo = document.querySelector('.list-inputNounTwo')
    const listInputVerbTwo = document.querySelector('.list-inputVerbTwo')
    const listInputAdjTwo = document.querySelector('.list-inputAdjTwo')
    const listInputSilly = document.querySelector('.list-inputSilly')
    
    const addListBtnNoun = document.querySelector('.addListBtnNoun')
    const addListBtnVerb = document.querySelector('.addListBtnVerb')
    const addListBtnAdj = document.querySelector('.addListBtnAdj')
    const addListBtnNounTwo = document.querySelector('.addListBtnNounTwo')
    const addListBtnVerbTwo = document.querySelector('.addListBtnVerbTwo')
    const addListBtnAdjTwo = document.querySelector('.addListBtnAdjTwo')
    const addListBtnSilly = document.querySelector('.addListBtnSilly')
 
    addListBtnNoun.addEventListener('click', function(){
        nouns.push(listInputNoun.value)
    })
    addListBtnNounTwo.addEventListener('click', function(){
        nounsTwo.push(listInputNounTwo.value)
    })
    addListBtnVerb.addEventListener('click', function(){
        verbs.push(listInputVerb.value)
    })
    addListBtnVerbTwo.addEventListener('click', function(){
        verbsTwo.push(listInputVerbTwo.value)
    })
    addListBtnAdj.addEventListener('click', function(){
        adjects.push(listInputAdj.value)
    })
    addListBtnAdjTwo.addEventListener('click', function(){
        adjectsTwo.push(listInputAdjTwo.value)
    })
    addListBtnSilly.addEventListener('click', function(){
        silliness.push(listInputSilly.value)
    })

    readyButton.addEventListener('click', e => {
        madLib()    
    })