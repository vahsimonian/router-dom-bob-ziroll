import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader({ params }) {
  return getVans(params.id)
}

const VanDetail = () => {
  const location = useLocation()
  const van = useLoaderData()

  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  return (
    <div className='van-detail-container'>
      <Link to={`..${search}`} className='back-button' relative='path'>
        &larr; <span>Back to {type}</span>
      </Link>
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
    </div>
  )
}

export default VanDetail
