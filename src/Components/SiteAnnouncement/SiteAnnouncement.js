import React from 'react'
import Announcement from './Announcement/Announcement'
import second from './SiteAnnouncement.css'

const SiteAnnouncement = () => {
  return (
    <div >
     
      <h2 className='siteAnnouncement'>SiteAnnouncement</h2>
      <Announcement/>
      <Announcement/>
    </div>
  )
}

export default SiteAnnouncement