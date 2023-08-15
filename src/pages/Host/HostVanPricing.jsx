import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const [currentVan] = useOutletContext()

  return (
    <section>
      <h1>${currentVan.price}.00 /day</h1>{' '}
    </section>
  )
}

export default HostVanPricing
