const fetch = require('node-fetch');

const getAnimeQuery = async (query,) => {
  try {
    const animeList = [];
    const res = await fetch('https://api.jikan.moe/v3/search/anime?q=' + query)
    const data = await res.json();
    for (let index = 0; index < data.results.length / 5; index++) {
      const fragmenteList = data.results.slice(index * 5,index * 5 + 5)
      animeList.push({
        data: processData(fragmenteList)
      })
    }
    return animeList;
  } catch (error) {
    throw new Error("Error in getAnime " + error);
  }
}

const processScore = (score) => {
  if (score >= 1 && score <= 4) {
      return "I do not recommend it.";
  } else if (score >= 5 && score <= 7) {
    return "You may have fun.";
  } else {
    return "Great, this is one of the best anime.";
  }
}

const processData = (animes) => {
  const newList = []
  for (const anime of animes) {
    newList.push({
      title: anime.title,
      episodes: anime.episode,
      scoreTitle: processScore(anime.score),
      image: anime.image_url,
      type: anime.type
    })
  }
  return newList;
}

module.exports = {
  getAnimeQuery
}