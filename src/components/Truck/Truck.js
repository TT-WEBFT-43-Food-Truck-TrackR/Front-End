import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function Truck() {
  const params = useParams()

  useEffect(() => {
    // use effect to get truck details with params.whatever
  })

  return (
    <div>
      Truck Details      
    </div>
  )
}
