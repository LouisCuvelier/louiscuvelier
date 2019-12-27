import React from "react";
import IconTime from "../../content/assets/svgs/icon-time.svg";
import IconUpdateTime from "../../content/assets/svgs/icon-history.svg";
import IconTimeRead from "../../content/assets/svgs/icon-hour-glass.svg";
import PropTypes from "prop-types";

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

const PostMetadata = props => {
  const { publicationDate, updateDate, timeToRead } = props;
  const publicationDateFormatted = new Date(publicationDate);
  const updateDateFormatted = new Date(updateDate);

  return (
    <div className="flex flex-wrap label label-base mt-2 mb-4 items-center">
      <div className={"flex items-center"}>
        <IconTime className="w-0875 h-full mr-1 fill-current" />
        <time pubdate="pubdate" dateTime={publicationDate} className="">
          {publicationDateFormatted.toLocaleDateString("fr-FR", dateOptions)}
        </time>
      </div>
      <span className="mx-2">{" • "}</span>
      <div className={"flex items-center"}>
        <IconUpdateTime className="w-0875 h-full h-100 mr-1 fill-current" />
        <time dateTime={updateDate} className="">
          {updateDateFormatted.toLocaleDateString("fr-FR", dateOptions)}
        </time>
      </div>
      <span className="mx-2">{" • "}</span>
      <div className={"flex items-center"}>
        <IconTimeRead className="w-0875 h-full h-100 mr-1 fill-current" />
        {timeToRead} {timeToRead > 1 ? "minutes" : "minute"}
      </div>
    </div>
  );
};

PostMetadata.propTypes = {
  timeToRead: PropTypes.number.isRequired,
  updateDate: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired
};

export default PostMetadata;
