import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/type.css'
import '../styles/entry.css'
import '../styles/flex.css'

/* eslint-disable react/prop-types */
function Entry({ id, title, subtitle, date, image, wordCount, readTime})  {

    return (
        <Link to={`/${id}`} className="blog-card">
            <div className="blog-card-content">
                <div className="full-height flex-column">
                    <div className="title-bar">
                        <h2 className="blog-card-title">{title}</h2>
                        <h4 className="blog-card-subtitle">{subtitle}</h4>
                        <h4 className="blog-card-subtitle">{date}</h4>
                    </div>

                    <div className="stats-bar">
                        <h4 className="blog-card-stats">{wordCount} words</h4>
                        <h4 className="blog-card-stats">{readTime} read</h4>
                    </div>
                </div>
            </div>
            
            <div className="blog-card-image">
                <img src={image} alt={title} />
            </div>
        </Link>
    );
}

export default Entry;