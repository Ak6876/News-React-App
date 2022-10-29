import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": { "id": null, "name": "YouTube" },
            "author": null,
            "title": "Russia Vs Ukraine War Update Live | Russians Retreat From Kherson | Ukraine News | News18 Live - CNN-News18",
            "description": "Russia Vs Ukraine War Update Live | Russians Retreat From Kherson | Ukraine News | News18 LiveTens of thousands of civilians and Russian-appointed officials ...",
            "url": "https://www.youtube.com/watch?v=dSGksruu8L8",
            "urlToImage": "https://i.ytimg.com/vi/dSGksruu8L8/maxresdefault_live.jpg",
            "publishedAt": "2022-10-29T10:37:10Z",
            "content": null
        },
        {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Heather Chen, Philip Wang, Angus Watson",
            "title": "45 dead as Tropical Storm Nalgae hits Philippines - CNN",
            "description": "Tropical Storm Nalgae has killed at least 45 people and injured dozens more in the Philippines, the country's disaster agency said Saturday.",
            "url": "https://www.cnn.com/2022/10/28/asia/tropical-storm-nalgae-paeng-philippines-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221028202630-03-philippines-tropical-storm-nalgae-102822.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-10-29T09:45:00Z",
            "content": "Tropical Storm Nalgae has killed at least 45 people and injured dozens more in the Philippines, the countrys disaster agency said Saturday.\r\nA further 14 people were missing after the storm, known lo… [+1188 chars]"
        },
        {
            "source": { "id": null, "name": "CBS Sports" },
            "author": "Mike Axisa",
            "title": "World Series score: Phillies grab Game 1 vs. Astros as J.T. Realmuto's home run caps huge comeback - CBS Sports",
            "description": "Philadelphia dug its way out of a five-run hole against Justin Verlander to take Game 1 in Houston",
            "url": "https://www.cbssports.com/mlb/news/world-series-score-phillies-grab-game-1-vs-astros-as-jt-realmutos-home-run-caps-huge-comeback/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/10/29/e7d2c024-a932-45b2-9723-fb00d51d5a9e/thumbnail/1200x675/4b880226a64350de0c1e3a0bc8e942c2/jt-world-series-getty.png",
            "publishedAt": "2022-10-29T09:45:00Z",
            "content": "The Philadelphia Phillies defeated the Houston Astros, 6-5, on Friday night in a drama-filled Game 1 of the 2022 World Series. The Phillies, who came back from a five-run deficit, now possess a 1-0 l… [+8866 chars]"
        }]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    // async componentDidMount(){
    //     let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0358c95df4812b7103f52f2f49648";
    //     let data= await fetch(url);
    //     let passeddata= await data.json()
    //     this.setState({articles: passeddata.articles})
    // }
    render() {
        return (
            <div className='container my-3'>
                <h2>News - Top Headlines</h2>
                <div className='row'>

                    {this.state.articles.map((element) =>{ 
                        return <div className='col-md-4' key={element.url}>
                                <Newsitem  title={element.title ? element.title : " "} description={element.description ? element : " "} imageurl={element.urlToImage} newsurl={element.newsurl} />
                                </div>
                        })}
                </div>
            </div>
        )
    }
}
// {this.state.articles.map[(element) => {}]}
// {element.url}
// 
// 
// 
// 
export default News
