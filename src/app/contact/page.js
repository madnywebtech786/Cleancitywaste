import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Contact from '../sections/Contact'

export default function page() {
  return (
    <div>
        <Breadcrumb name={'Contact Us'} />
        <Contact />
    </div>
  )
}
