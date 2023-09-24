import React from 'react'

const Footer = () => {

    const footerStyle={
        'backgroundColor':'powderblue',
        'color':'white'
    }

    const year = new Date();

  return (
    <div style={footerStyle}>Copyright &copy; Manikandan as of {year.getFullYear()}</div>
  )
}

export default Footer