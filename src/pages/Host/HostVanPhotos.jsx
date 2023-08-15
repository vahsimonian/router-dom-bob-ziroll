import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
  // const [currentVans, setCurrentVans] = useState({})
  // const { id } = useParams()

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVans(data.vans))
  // }, [])

  const [currentVan] = useOutletContext()
  // console.log(currentVan)

  return (
    <div>
      <img
        src={currentVan.imageUrl}
        alt='van-image'
        width={'100px'}
        style={{ borderRadius: '5px' }}
      />
    </div>
  )
}

export default HostVanPhotos
