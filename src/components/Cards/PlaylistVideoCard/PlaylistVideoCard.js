import React from "react";
import classes from "./PlaylistVideoCard.module.css";

const PlaylistVideoCard = ({ item }) => {
  const updatedName =
    item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name;
  return (
    <div className={classes.main}>
      <div className={classes.video_div}>
        <div className={classes.video}>
          <img className={classes.video_image} src={item.thumbnail} />
        </div>
        <div className={classes.video_content}>
          <span className={classes.heading}>{updatedName}</span>
          <span className={classes.author}>{item.author}</span>
        </div>
      </div>
      <div className={classes.cancel_div}>
        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default PlaylistVideoCard;
