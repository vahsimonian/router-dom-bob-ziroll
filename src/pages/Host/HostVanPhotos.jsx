import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { getHostVans } from '../../api'

export function loader() {
  return getHostVans()
}

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext()

  return (
    <div>
      <img
        src={currentVan.imageUrl}
        alt='van'
        width={'100px'}
        style={{ borderRadius: '5px' }}
      />
    </div>
  )
}

export default HostVanPhotos
