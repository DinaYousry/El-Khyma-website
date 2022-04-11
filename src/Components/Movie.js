import React from "react";

const Movie = () => {
  const youtubeUrl = new URLSearchParams(document.location.search).get(
    "youtubeUrl"
  );
  var youtube= `${youtubeUrl}` .replace("watch?v=", "embed/");
  const ar_name = new URLSearchParams(document.location.search).get("ar_name");
  
  return (
    <>
      <h3>{ar_name}</h3>
      <br />

      {/* <iframe
        width="90%"
        height="800px"
        title="i"
        src={`https://www.youtube.com/watch?v=36yp0DRoLZs`}
      ></iframe> */}

      <iframe
        width="90%"
        height="800px"
        src={youtube}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Movie;
