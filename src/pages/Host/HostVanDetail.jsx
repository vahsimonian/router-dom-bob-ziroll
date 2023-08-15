import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

const HostVanDetail = () => {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans))
  }, [id])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <Link to='..' className='back-button' relative='path'>
        &larr; <span>Back to all vans</span>
      </Link>

      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={currentVan.imageUrl} alt='some van' />
          <div className='host-van-detail-info-text'>
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <div className='host-details'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='.'
          >
            <p>Details</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='pricing'
          >
            <p>Pricing</p>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='photos'
          >
            <p>Photos</p>
          </NavLink>
        </div>
        <Outlet context={[currentVan]} />
      </div>
    </section>
  )
}

export default HostVanDetail
