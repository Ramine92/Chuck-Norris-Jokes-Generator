const loadJoke = async () => {
  try{
    const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random',{
      headers:{
        Accept: "application/json"
      }
    });
    const jokeData = await chuckNorrisFetch.json();
    document.getElementById('loading-jokes').innerHTML = jokeData.value;
  }catch(error){
    console.log(error);
  }
}

document.getElementById('load-button').addEventListener('click',loadJoke);
