import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

const VanDetail = () => {
  const [van, setVan] = useState([])
  const location = useLocation()
  console.log(location)
  const params = useParams()

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
  }, [params.id])

  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  return (
    <div className='van-detail-container'>
      <Link to={`..${search}`} className='back-button' relative='path'>
        &larr; <span>Back to {type}</span>
      </Link>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl} alt='data' />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>

          <button className='link-button'>Order</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default VanDetail
