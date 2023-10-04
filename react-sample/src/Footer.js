import React from 'react'

const Footer = () => {

    const footerStyle={
        'backgroundColor':'powderblue',
        'color':'white'
    }

    const year = new Date();

  return (
    // footerStyle can be replaced with whole content of the footerstyle replacing the footerstyle variable below 
    <div style={footerStyle}>Copyright &copy; Manikandan as of {year.getFullYear()}</div>
  )
}

export default Footer