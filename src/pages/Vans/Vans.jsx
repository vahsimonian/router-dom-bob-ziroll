import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get('type')

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const detailEls = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans

  const vanElements = detailEls.map((van) => (
    <Link to={`/vans/${van.id}`} key={van.id}>
      <div key={van.id} className='van-tile'>
        <img src={van.imageUrl} alt={`of`} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ))

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>

      <button
        className={
          typeFilter === 'simple'
            ? 'van-type simple selected'
            : `van-type simple`
        }
        onClick={() => handleFilterChange('type', 'simple')}
      >
        simple
      </button>
      <button
        className={
          typeFilter === 'rugged'
            ? 'van-type rugged selected'
            : `van-type rugged`
        }
        onClick={() => handleFilterChange('type', 'rugged')}
      >
        rugged
      </button>
      <button
        className={
          typeFilter === 'luxury'
            ? 'van-type luxury selected'
            : `van-type luxury`
        }
        onClick={() => handleFilterChange('type', 'luxury')}
      >
        luxury
      </button>
      {searchParams.size > 0 ? (
        <button
          className='van-type clear-filters'
          onClick={() => handleFilterChange('type', null)}
        >
          clear
        </button>
      ) : null}

      <div className='van-list'>{vanElements}</div>
    </div>
  )
}
