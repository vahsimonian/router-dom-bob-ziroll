import React, { Suspense } from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({ request }) {
  await requireAuth(request)
  return defer({ vans: getHostVans() })
}

const HostVans = () => {
  const dataPromise = useLoaderData()

  function renderVanElements(vans) {
    const hostVanElements = vans.map((van) => (
      <Link to={van.id} key={van.id} className='host-van-link-wrapper'>
        <div className='host-van-single'>
          <img src={van.imageUrl} alt={`hey ${van.name}`} />
          <div className='host-van-info'>
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
    return hostVanElements
  }

  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div className='host-vans-list'>
        <section>
          <Suspense fallback={<h2>Loading host vans...</h2>}>
            <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
          </Suspense>
        </section>
      </div>
    </section>
  )
}

export default HostVans
