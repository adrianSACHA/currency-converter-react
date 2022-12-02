import { StyledParagraph } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const actualDate = useCurrentDate();

  const formattedDate = (date) =>
    date.toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    
  return (
    <StyledParagraph>
      Dzisiaj jest {formattedDate(actualDate)}
    </StyledParagraph>
  );
};

export default Clock;
