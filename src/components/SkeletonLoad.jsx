import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HeadNews = () => {
  return (
    <div className="head-news">
      <div className="news-background">
        <Skeleton height={"315px"} baseColor="#CCCCCC" borderRadius={0}/>
        <Skeleton
          height={"30px"}
          baseColor="#CCCCCC"
          width={"20%"}
          style={{ marginTop: "10px" }}
          borderRadius={0}
        />
        <Skeleton
          height={"25px"}
          baseColor="#CCCCCC"
          width={"100%"}
          style={{ marginTop: "10px" }}
          borderRadius={0}
        />
        <Skeleton
          height={"25px"}
          baseColor="#CCCCCC"
          width={"80%"}
          style={{ marginTop: "10px" }}
          borderRadius={0}
        />
      </div>
    </div>
  );
};

export const FollowingNews = () => {
  return (
    <div className="line flex">
      <div className="card">
        <div className="news-background">
          <Skeleton height={"150px"} baseColor="#CCCCCC" borderRadius={0}/>
          <Skeleton
            height={"10px"}
            baseColor="#CCCCCC"
            width={"20%"}
            style={{ marginTop: "2px" }}
            borderRadius={0}
          />
          <Skeleton
            height={"10px"}
            baseColor="#CCCCCC"
            width={"100%"}
            style={{ marginTop: "2px" }}
            borderRadius={0}
          />
          <Skeleton
            height={"10px"}
            baseColor="#CCCCCC"
            width={"80%"}
            style={{ marginTop: "2px" }}
            borderRadius={0}
          />
        </div>
      </div>
      <div className="card">
        <div className="news-background">
          <Skeleton height={"150px"} baseColor="#CCCCCC" borderRadius={0}/>
          <Skeleton
            height={"10px"}
            baseColor="#CCCCCC"
            width={"20%"}
            style={{ marginTop: "2px" }}
            borderRadius={0}
          />
          <Skeleton
            height={"10px"}
            baseColor="#CCCCCC"
            width={"100%"}
            style={{ marginTop: "2px" }}
            borderRadius={0}
          />
          <Skeleton
            height={"10px"}
            baseColor="#CCCCCC"
            width={"80%"}
            style={{ marginTop: "2px" }}
            borderRadius={0}
          />
        </div>
      </div>
    </div>
  );
};
