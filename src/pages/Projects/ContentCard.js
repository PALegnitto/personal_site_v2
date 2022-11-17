
const ContentCard = ({content}) => {


  return (
    <div className="card">
      <div className="cardTitle">{content.title}</div>
      <div className="cardBody">{content.body}</div>
    </div>
  )
};

export default ContentCard;