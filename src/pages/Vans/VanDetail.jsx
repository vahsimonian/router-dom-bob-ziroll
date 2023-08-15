import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const VanDetail = () => {
  const [van, setVan] = useState([])
  const [order, setOrder] = useState(false)
  const [orderBtn, setOrderBtn] = useState('Rent this van')
  const params = useParams()

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setVan(data.vans))
  }, [params.id])

  const rentThisVan = () => {
    setOrderBtn('Ordering...')
    setTimeout(() => {
      setOrder(!order)
    }, 1000)
  }

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

          <button onClick={rentThisVan} className='link-button'>
            {order ? 'Congratulations with you order!' : orderBtn}
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default VanDetail
