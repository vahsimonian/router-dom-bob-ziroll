import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
  const [currentVan] = useOutletContext()

  return (
    <section>
      <h4
        style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '.2px' }}
      >
        Name: {currentVan.name}
      </h4>
      <h4
        style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '.2px' }}
      >
        Category: {currentVan.type}
      </h4>
      <h4
        style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '.2px' }}
      >
        Description: {currentVan.description}
      </h4>
      <h4
        style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '.2px' }}
      >
        Visibility: {currentVan.visibility}
      </h4>
    </section>
  )
}

export default HostVanInfo
