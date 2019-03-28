import React, { Component } from 'react'

const Test = ({match}) => console.log('match', match) || (
  <div>
    <h3>This is a test: {match.params.id}</h3>
  </div>

)

export default Test;