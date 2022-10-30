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
            totalResults: 0
        }
        document.title = `${this.CapitalizeFirst(this.props.category)} - News`;
    }
    updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=6fd0358c95df4812b7103f52f2f49648`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let passeddata = await data.json()
        this.setState({  articles: passeddata.articles, totalResults: passeddata.totalResults,loading: false })
    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fd0358c95df4812b7103f52f2f49648&page=${this.state.page}`;
        let data = await fetch(url);
        let passeddata = await data.json()
        this.setState({ articles: this.state.articles.concat(passeddata.articles),totalResults: passeddata.totalResults })
    }
    render() {
        return (<>
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
                                <Newsitem title={[element.title] ? [element.title] : " "} description={[element.description] ? [element.description] : " "} imageurl={[element.urlToImage]} newsurl={[element.url]} author={[element.author] ? [element.author] : ["Unknown"]} date={[element.publishedAt]} source={[element.source.name]} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>
        )
    }
}
// {this.state.articles.map[(element) => {}]}
// {element.url} 
export default News
