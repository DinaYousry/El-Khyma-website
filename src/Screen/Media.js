import React from 'react'
import { Nav ,Row } from 'react-bootstrap'
import {  NavLink } from 'react-router-dom'
import ListMedia from "../Components/ListMedia";

const Media = () => {
  return (
    <>
     <div className='no'>
        <Nav className="justify-content-center ">
        <Nav.Item>
          <NavLink className="navii" to="/plays">مسرحيات  </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="navii" to="/seriesmedia"> مسلسلات</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="navii" to="/movies"> افلام</NavLink>
        </Nav.Item>
      </Nav>
      <br/>
  </div>


  <div className="listt">
  <Row>

      <br />

      <ListMedia
        title={"افلام اكشن"}
        url={"/action"}
        link={"wait"}
        API={"http://hwayadesigns-001-site8.ftempurl.com/api/movies/category?page=1&pageSize=4&Type=2"}
      />
      <br />
      <ListMedia
        title={"افلام دراما "}
        url={"/drama"}
        link={"wait"}
        API={"http://hwayadesigns-001-site8.ftempurl.com/api/movies/category?page=1&pageSize=4&Type=3"}
      />
      <br />
      <ListMedia
        title={"افلام كوميدي"}
        url={"/comedy"}
        link={"wait"}
        API={"http://hwayadesigns-001-site8.ftempurl.com/api/movies/category?page=1&pageSize=4&Type=1"}
      />
      <br />
      <ListMedia
        title={"مسلسلات "}
        url={"/seriesmedia"}
        link={"waitseries"}
        API={"http://hwayadesigns-001-site8.ftempurl.com/api/series?page=1&pageSize=4"}
      />
      <br />
      <ListMedia
        title={"مسرحيات "}
        url={"/plays"}
        link={"wait"}
        API={"http://hwayadesigns-001-site8.ftempurl.com/api/Plays?page=1&pageSize=4"}
      />

  </Row>
  </div>


  <br/>

  

    </>
  )
}

export default Media