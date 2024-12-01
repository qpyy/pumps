import AdditionalOptions from "../../components/AdditionalOptions";
import ApplicationField from "../../components/ApplicationField";
import PumpSeries from "../../components/PumpSeries";
import { StyledWrapper } from "./styles";

const PumpSelection = () => {
  return (
    <StyledWrapper>
      <ApplicationField />
      <PumpSeries />
      <AdditionalOptions />
    </StyledWrapper>
  );
};

export default PumpSelection;
