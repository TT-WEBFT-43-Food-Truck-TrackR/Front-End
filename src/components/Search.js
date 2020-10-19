import transitions from '@material-ui/core/styles/transitions'
import React, { useState, useRef } from 'react'
import { v4 as uuid } from "uuid"

const truckList = [
  {
    id: uuid(),
    truckName: "Food Truck 1",
    category: "Mexican",
    reviews: [
      {
        username: "chris",
        rating: 2,
        desc: "food was shit"
      },
      {
        username: "andrew",
        rating: 3,
        desc: "food was great"
      },
      {
        username: "thomas",
        rating: 1,
        desc: "food was absolute shit"
      },
    ],
    ratingAvg: 2,
    location: "mexico city, mexico",
    menu: [
      {
        id: uuid(),
        item: "bbq chicken",
        price: "5.60"
      },
      {
        id: uuid(),
        item: "chili cheese dog",
        price: "7.60"
      }
    ]

  },
  {
    id: uuid(),
    truckName: "Food Truck 2",
    category: "Thai",
    reviews: [
      {
        username: "chris",
        rating: 2,
        desc: "food was shit"
      },
      {
        username: "andrew",
        rating: 3,
        desc: "food was great"
      },
      {
        username: "thomas",
        rating: 1,
        desc: "food was absolute shit"
      },
    ],
    ratingAvg: 2,
    location: "guadalajara, mexico",
    menu: [
      {
        id: uuid(),
        item: "bbq chicken",
        price: "5.60"
      },
      {
        id: uuid(),
        item: "chili cheese dog",
        price: "7.60"
      }
    ]
  },
  {
    id: uuid(),
    truckName: "Food Truck 3",
    category: "BBQ",
    reviews: [
      {
        username: "chris",
        rating: 2,
        desc: "food was shit"
      },
      {
        username: "andrew",
        rating: 3,
        desc: "food was great"
      },
      {
        username: "thomas",
        rating: 1,
        desc: "food was absolute shit"
      },
    ],
    ratingAvg: 2,
    location: "los angeles, california",
    menu: [
      {
        id: uuid(),
        item: "bbq chicken",
        price: "5.60"
      },
      {
        id: uuid(),
        item: "chili cheese dog",
        price: "7.60"
      }
    ]
  },
]

function Results({ trucks }) {
  return (
    <div>
      { trucks.map(truck => {
        return (
          <div>{ truck.truckName }</div>
        )
      })}  
    </div>
  )
}

export default function Search() {
  const [trucksArr, setTruckArr] = useState(truckList)
  const searchRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    const searchTerm = searchRef.current.value
    setTruckArr(trucksArr.filter( truck => {
      return truck.truckName.toLowerCase().includes(searchTerm.toLowerCase())
    }))
  }
  
  const onChange = {
    
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          name="search"
          ref={ searchRef }
        />
        <button>Search</button>
      </form>
      <Results trucks={ trucksArr } />
    </>
  )
}
