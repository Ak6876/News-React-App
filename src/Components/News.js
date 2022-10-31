import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: "in",
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    CapitalizeFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title = `${this.CapitalizeFirst(this.props.category)} - News`;
    }
    updateNews = async () => {
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let passeddata = await data.json()
        this.props.setProgress(70)
        this.setState({  articles: passeddata.articles, totalResults: passeddata.totalResults,loading: false })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.updateNews();
    }
    async componentDidUpdate(prevProps){
        if(this.props.category !== prevProps.category){
            this.updateNews(this.props.category)
        }
    }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({page:this.state.page+1})
        let data = await fetch(url);
        let passeddata = await data.json()
        this.setState({ articles: this.state.articles.concat(passeddata.articles),totalResults: passeddata.totalResults })
    }
    render() {
        return (<>
            <div>
            <h1 className='text-center' style={{ margin: '35px 0px' }}>News - Top {this.CapitalizeFirst(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner />}
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}>
                <div className='container'>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageurl={element.urlToImage} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                        </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            </div>
        </>
        )
    }
}
// {this.state.articles.map[(element) => {}]}
// {element.url} 
export default News
