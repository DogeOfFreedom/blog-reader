import PropTypes from "prop-types";

export default function postPreview({ post }) {
  const { author, title, text, timestamp } = post;

  return (
    <div className="previewCard">
      <h1 className="cardTitle">{title}</h1>
      <p className="cardText cardAuthor">{author}</p>
      <p className="cardText cardContent">{text}</p>
      <p className="cardText cardTimeStamp">{timestamp}</p>
    </div>
  );
}

postPreview.propTypes = {
  post: PropTypes.object,
};
