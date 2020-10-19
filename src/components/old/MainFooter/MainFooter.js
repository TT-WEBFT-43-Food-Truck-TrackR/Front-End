import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faMapMarkerAlt, faBookmark } from "@fortawesome/free-solid-svg-icons"

import "./MainFooter.css"

export default function MainFooter() {
  return (
    <div className="footer-container">
      <div className="footer-button footer-button-left">
        <FAIcon className="footer-icon" icon={ faSearch } size="lg" />
        <div className="footer-text">Search</div>
      </div>
      <div className="footer-button footer-button-center">
        <FAIcon className="footer-icon" icon={ faMapMarkerAlt } size="lg" />
        <div className="footer-text">GPS</div>
      </div>
      <div className="footer-button footer-button-right">
        <FAIcon className="footer-icon" icon={ faBookmark } size="lg" />
        <div className="footer-text">Favorites</div>
      </div>
    </div>
  )
}
