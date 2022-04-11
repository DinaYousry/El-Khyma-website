import React
// , { useState, useEffect }
 from "react";
import { Col, Row } from "react-bootstrap";
import ListCategory from "../Components/ListCategory";
import { Link } from "react-router-dom";

const Home = () => {


  return (
    <>
      <br />

      <Row>
        <Col lg={3} xs={3}>
          <svg
            style={{ color: "#981916" }}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-bookmarks-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
            <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
          </svg>
          <br />
          <br />
          <Link to="/quraan">
            <button className="buto">القران الكريم </button>
          </Link>
        </Col>
        <Col lg={3} xs={3}>
          <svg
            style={{ color: "#981916" }}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-alarm"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
          </svg>
          <br />
          <br />
          <Link to="/prays">
            <button className="buto">مواقيت الصلاة </button>
          </Link>
        </Col>
        <Col lg={3} xs={3}>
          <svg
            style={{ color: "#981916" }}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-robot"
            viewBox="0 0 16 16"
          >
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
          </svg>
          <br />
          <br />
          <Link to="/chat">
            <button className="buto"> المساعد الشخصي </button>
          </Link>
        </Col>
        <Col lg={3} xs={3}>
          <svg
            style={{ color: "#981916" }}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-play-btn"
            viewBox="0 0 16 16"
          >
            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
          </svg>
          <br />
          <br />
          <Link to="/media">
            {" "}
            <button className="buto"> مكتبة الميديا </button>
          </Link>
        </Col>
      </Row>

      <br />
      <br />

      <ListCategory
        title={"تاكل ايه ؟"}
        url={"food"}
        link={"foodelement"}
        // Meal={Meal.Data}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Meals/List?pageNo=1&pageSize=4"}
      />
      <br />
      <ListCategory
        title={"تشوف ايه ؟"}
        url={"series"}
        link={"serieselement"}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Series/List?pageNo=1&pageSize=4"}
      />
      <br />
      <ListCategory
        title={"تخرج فين ؟"}
        url={"places"}
        link={"placeselement"}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Places/List?pageNo=1&pageSize=4"}
      />
      <br />
      <ListCategory
        title={"معلومة ع السريع"}
        url={"info"}
        link={"infoelement"}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Article/List?pageNo=1&pageSize=4"}
      />
    </>
  );
};

export default Home;
