import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Catogories from "../../Components/catogoriesBar/Catogories";
import Video from "../../Components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../Components/skeletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const videos = useSelector((state) => state.homeVideos);
  console.log(videos);
  const fetchData = () => {
    if (videos.activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(videos.activeCategory));
  };
  return (
    <Container>
      <Catogories />

      <InfiniteScroll
        dataLength={videos.video.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!videos.loading
          ? videos.video?.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
