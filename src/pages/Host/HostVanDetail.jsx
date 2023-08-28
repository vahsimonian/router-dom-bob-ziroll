import React from 'react'
import { Link, Outlet, useLoaderData, NavLink } from 'react-router-dom'
import { getVan } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({ params, request }) {
  await requireAuth(request)
  return getVan(params.id)
}

const HostVanDetail = () => {
  const currentVan = useLoaderData()

  return (
    <section>
      <Link to='..' className='back-button' relative='path'>
        &larr; <span>Back</span>
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
        <nav className='host-details'>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='.'
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='pricing'
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='photos'
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  )
}

export default HostVanDetail
