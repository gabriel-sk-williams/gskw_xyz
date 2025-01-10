
// import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/type.css'

/* eslint-disable react/prop-types */
function Entry({ id, title, subtitle, date, path})  { // imagePath

    console.log(id, title, subtitle, date, path)

    return (
        <div>entry</div>
    )

    /*
    return (
        <Link to={`/blog/${id}`} className="blog-card">
            <div className="blog-card-image">
                <img src={"/images/004_card.jpg"} alt={title} />
            </div>
            <div className="blog-card-content">
                <h2 className="blog-card-title">{title}</h2>
                <p className="blog-card-subtitle">{subtitle}</p>
            </div>
        </Link>
    );
    */
}

export default Entry;