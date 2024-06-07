import { setTimeout } from "timers";

export const getTrending = async () => {
    const result = await fetch(`https://kitsu.io/api/edge/trending/anime?page=1` ,{
      cache : 'no-cache'
    }).then((res) => {
      return res.json();
    }).catch((error) => {
      console.log(error);
      
    })
  
  
    return result
  }
export const getNewer = async () => {
    const result = await fetch(`https://kitsu.io/api/edge/anime?filter[seasonYear]=2024` ,{
      cache : 'no-cache'
    }).then((res) => {
      return res.json();
    }).catch((error) => {
      console.log(error);
      
    })
  
  
    return result
  }
export const getPopular = async () => {
    const result = await fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank` ,{
      cache : 'no-cache'
    }).then((res) => {
      return res.json();
    }).catch((error) => {
      console.log(error);
      
    })
  
  
    return result
  }
export const getById = async (id : string) => {
    const result = await fetch(`https://kitsu.io/api/edge/anime/${id}` ,{
      cache : 'no-cache'
    }).then((res) => {
      return res.json();
    }).catch((error) => {
      console.log(error);
      
    })
  
  
    return result
  }
