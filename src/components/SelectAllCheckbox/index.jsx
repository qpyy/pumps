import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getParamFromUrl, updateUrlParams } from "../../helpers/url";
import { StyledCheckbox, StyledLabel, StyledName } from "./styles";

const SelectAllCheckbox = ({ series }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectionState, setSelectionState] = useState({
    selectAll: false,
    selectedCount: 0,
  });

  useEffect(() => {
    const selectedSeries = getParamFromUrl(searchParams, "series");
    updateSelectAllState(selectedSeries);
  }, [searchParams, series.length]);

  const updateSelectAllState = (selectedSeries) => {
    const newState = {
      selectAll: selectedSeries.length === series.length,
      selectedCount: selectedSeries.length,
    };
    setSelectionState(newState);
  };

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    const seriesArray = isChecked ? series.map((item) => item.id) : [];

    updateUrlParams(searchParams, setSearchParams, { series: seriesArray.join(",") });

    setSelectionState({
      selectAll: isChecked,
      selectedCount: isChecked ? series.length : 0,
    });
  };

  return (
    <StyledLabel>
      <StyledCheckbox
        type="checkbox"
        checked={selectionState.selectAll}
        onChange={handleSelectAllChange}
      />
      <StyledName>
        {selectionState.selectedCount} из {series.length} выбрано
      </StyledName>
    </StyledLabel>
  );
};

export default SelectAllCheckbox;
