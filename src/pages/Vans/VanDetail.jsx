import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const VanDetail = () => {
  const [van, setVan] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
  }, [params.id])

  return (
    <div className='van-detail-container'>
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
