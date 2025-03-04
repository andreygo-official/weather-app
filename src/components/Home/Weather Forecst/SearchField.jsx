import React from 'react'

const SearchField = ({value, onChangeHandler}) => {
    
  return (
    <>
      <input value={value} onChange={onChangeHandler} type="search" className="form-control searchField" placeholder="Find your location..." />
    </>
  )
}

export default SearchField
