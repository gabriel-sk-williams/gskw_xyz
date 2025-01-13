
import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/type.css'
import '../styles/entry.css'

/* eslint-disable react/prop-types */
function Entry({ id, title, subtitle, date, image, path})  { // imagePath

    console.log(id, title, subtitle, date, path)

    return (
        <Link to={`/${id}`} className="blog-card">
            <div className="blog-card-content">
                <h2 className="blog-card-title">{title}</h2>
                <h4 className="blog-card-subtitle">{subtitle}</h4>
                <h4 className="blog-card-subtitle">{date}</h4>
            </div>
            <div className="blog-card-image">
                <img src={image} alt={title} />
            </div>
            
        </Link>
    )
}

export default Entry;