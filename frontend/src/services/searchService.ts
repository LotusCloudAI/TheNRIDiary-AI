import { mockStories } from "../data/mockStories"

export function searchStories(keyword:string){

 return mockStories.filter(story =>
   story.title.toLowerCase().includes(keyword.toLowerCase())
 )

}