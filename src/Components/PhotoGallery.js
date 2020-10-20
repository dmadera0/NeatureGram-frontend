import React from 'react'
import PhotoCard from './Components/PhotoCard'


export default function PhotoGallery(props){

    const displayPhotos = () => {
        return photos.map(photo => {
            return (
                <PhotoCard 
                    key={brewery.id} 
                    brewery={brewery}
                    onClick={addToFavorites}
                />
            )
        })
    }

    return(
        <div className="all-photos">
            {displaydisplayPhotos()}
        </div>
    )
}
}