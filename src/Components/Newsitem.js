import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date,source} = this.props;
        return (<>
            <div className='my-3'>
                <div className="card" >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'88%',zIndex:'1'}}>{source}</span>
                    <img src={imageurl ? imageurl : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} </p>
                        <p className="card-text"><small className="text-muted"> {author} - on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>

        )
    }
}
export default Newsitem

// export class Newsitem extends Component {
//     render() {
//         let [{title, description, imageurl, newsurl}]=this.props;
//         return (
//             <div className='my-3'>
//                 <div className="card" style={{width: '18rem'}}>
//                     <img src={imageurl?imageurl:"https://i.ytimg.com/vi/dSGksruu8L8/maxresdefault_live.jpg"} className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{title}</h5>
//                             <p className="card-text">{description} </p>
//                             <a href={newsurl}  className="btn btn-sm btn-primary">Read More</a>
//                         </div>
//                 </div>
//             </div>
//         )
//     }
// }

// 
