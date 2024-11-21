import PumpSeriesItem from "../PumpSeriesItem";
import SelectAllCheckbox from "../SelectAllCheckbox";
import { StyledList, StyledListItem } from "./styles";

const PumpSeriesList = ({ series }) => {
  return (
    <StyledList>
      <StyledListItem>
        <SelectAllCheckbox series={series} />
      </StyledListItem>
      {series.map((item) => (
        <PumpSeriesItem key={item.id} item={item} />
      ))}
    </StyledList>
  );
};

export default PumpSeriesList;
