import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
  const [currentVan] = useOutletContext()

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
