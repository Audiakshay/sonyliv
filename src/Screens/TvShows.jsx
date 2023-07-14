import React from "react";
import CarouselList from "../Components/Carousel";
import CardList from "../Components/CardList";
import '../CssFolder/TvShows.css';
import { popularTVShows } from "../Components/navBar";
import { useSelector } from "react-redux";

function TvShows() {
  const list = useSelector(state => state?.slider[0]?.results);
  const list1 = useSelector(state => state?.slider[1]?.results);

  return (
    <div style={{ height: "100fr", marginBottom: "20px" }}>
      <CarouselList />
      <div className="card1">
        <h1>Latest Movies &gt;</h1>
        <CardList data={list} />
      </div>
      <img src='https://images.slivcdn.com/videoasset_images/coc_barsatein_dated_trailer_3july_web.jpg?h=191&w=1416&t=c_fill&q=low&fr=webp' alt='ads' style={{borderRadius: '10px', margin: '70px 0 40px 50px'}} />
      <div className="card1">
        <h1>English Movies &gt;</h1>
        <CardList data={list1} />
      </div>
      <div className="card1">
        <h1>Popular TV Shows</h1>
        {
          popularTVShows.map(x => <img src={x} alt="popularTvShows" className="popTv" />)

        }
        
      </div>
    </div>
  );
}

export default TvShows;
