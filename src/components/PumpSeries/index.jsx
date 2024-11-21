import { useSearchParams } from "react-router-dom";
import PumpSeriesList from "../PumpSeriesList";
import { getSeriesByCategoryId } from "../../services";
import { StyledWrapper } from "./styles";
import StepTitle from "../UI/StepTitle";

const PumpSeries = () => {
  const [searchParams] = useSearchParams();
  const category = parseInt(searchParams.get("category"), 10);
  const pumpSeries = getSeriesByCategoryId(category);

  return (
    <StyledWrapper>
      <StepTitle number={2} text="Серия насосов" />
      <PumpSeriesList series={pumpSeries} />
    </StyledWrapper>
  );
};

export default PumpSeries;
