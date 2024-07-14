import RepresentStateCard from "./RepresentStateCard";
import StateCard from "./StateCard";
import WorkCard from "./WorkCard";

const cardMapping = {
  WorkCard,
  StateCard,
  RepresentStateCard,
};

const defaultCardType = "WorkCard";

const Card = ({ as, ...rest }) => {
  const RenderCard = as ? cardMapping[as] : cardMapping[defaultCardType];
  return <RenderCard as={as} {...rest} />;
};

export default Card;
