import React, { Suspense } from 'react'
import { Link, useLocation, useLoaderData, Await } from 'react-router-dom'
import { getVan } from '../../api'

export function loader({ params }) {
  return { van: getVan(params.id) }
}

const VanDetail = () => {
  const location = useLocation()
  const dataPromise = useLoaderData()

  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  function vanElements(van) {
    return (
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
    )
  }

  return (
    <div className='van-detail-container'>
      <Link to={`..${search}`} className='back-button' relative='path'>
        &larr; <span>Back to {type}</span>
      </Link>
      <Suspense fallback={<h2>Loading the details...</h2>}>
        <Await resolve={dataPromise.van}>{vanElements}</Await>
      </Suspense>
    </div>
  )
}

export default VanDetail
