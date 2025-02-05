import React from 'react'

const Course = ({ course }) => {
    const { id, name, image, link, bilgi } = course;
    return (

        <div className='course'>
            <h4 className='titlee'>{name}</h4>
            <img src={image} width={220} height={140} />
            <a className='courselink' href={link}>Bilgileri Gör</a>
            <p className='course-desc'>{bilgi}</p>
        </div>

    )
}

export default Course