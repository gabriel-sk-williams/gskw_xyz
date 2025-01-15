import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/type.css'
import '../styles/entry.css'

/* eslint-disable react/prop-types */
function Entry({ id, title, subtitle, date, image, wordCount})  {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            to={`/${id}`} 
            className="blog-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >   

            <div className="blog-card-content">
                <h2 className="blog-card-title">{title}</h2>
                <h4 className="blog-card-subtitle">{subtitle}</h4>
                <h4 className="blog-card-subtitle">{date}</h4>

                <div className="bottom-element">
                    {isHovered && (
                    <h4 className="blog-card-subtitle bottom-element">{wordCount} words</h4>
                    )}
                </div>
            </div>
            
            <div className="blog-card-image">
                <img src={image} alt={title} />
            </div>

            
        </Link>
    )
}

export default Entry;