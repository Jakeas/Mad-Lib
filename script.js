function madLib(){

    let nouns = ["bobby", "george", "merlin"]
    let verbs = ["ran", "flailed", "swam"]
    let adjects = ["sparkly", "slowly", "magically"]
    let silliness = ["tootsMcGee", "jiggledeePop", "spoofblaster"]
    let nounsTwo = ["lollipop", "gamer", "player"]
    let verbsTwo = ["splashed", "tumbled", "flew"]
    let adjectsTwo = ["bald", "quietly", "loudly"]
    

    const noun = nouns[Math.floor(Math.random()* nouns.length)]
    const verb = verbs[Math.floor(Math.random()* verbs.length)]
    const adj = adjects[Math.floor(Math.random()* adjects.length)]
    const nounTwo = nounsTwo[Math.floor(Math.random()* nouns.length)]
    const verbTwo = verbsTwo[Math.floor(Math.random()* verbs.length)]
    const adjTwo = adjectsTwo[Math.floor(Math.random()* adjects.length)]
    const silly = silliness[Math.floor(Math.random()* silliness.length)]

    console.log(`${noun} the wizard joined the knights and ${verb} to the nearby kingdom where all the ${adj} goats were keeping Princess ${nounTwo} hostage. The group ${verbTwo} toward the hoard of goats as the wizard yelled ${adjTwo} ${silly}.  The goats were all vanquished and the Princess was set free.`)

 
    nounOne.textContent = `${noun} the wizard joined the knights and ${verb} to the nearby kingdom where all the ${adj} goats were keeping Princess ${nounTwo} hostage. The group ${verbTwo} toward the hoard of goats as the wizard yelled ${adjTwo} ${silly}.  The goats were all vanquished and the Princess was set free.`
    //  nounOne.textContent = `${noun}`
    //  verbOne.textContent = `${verb}`
    //  adjOne.textContent = `${adj}`
    //  sillyOne.textContent = `${silly}`
    //  nounTwo.textContent = `${noun}`
    //  verbTwo.textContent = `${verb}`
    //  adjTwo.textContent = `${adj}`

 
}   
   
    const readyButton = document.querySelector('.ready') 
     const nounOne  = document.querySelector('.nounFirst') 
     const verbOne  = document.querySelector('.verbFirst') 
     const adjOne  = document.querySelector('.adjFirst') 
     const sillyOne  = document.querySelector('.sillyFirst') 
     const nounTwo  = document.querySelector('.nounSecond') 
     const verbTwo  = document.querySelector('.verbSecond') 
     const adjTwo  = document.querySelector('.adjSecond') 
    
     readyButton.addEventListener('click', e => {
    madLib()    
    })