import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  // const [currentVans, setCurrentVans] = useState({})
  // const { id } = useParams()

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVans(data.vans))
  // }, [])
  const [currentVan] = useOutletContext()
  console.log(currentVan)

  return (
    <section>
      <h1>${currentVan.price}.00 /day</h1>{' '}
    </section>
  )
}

export default HostVanPricing
