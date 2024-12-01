import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getParamFromUrl, updateUrlParams } from "../../helpers/url";
import { StyledListItem, StyledCheckbox, StyledImage, StyledLabel, StyledName } from "./styles";

const PumpSeriesItem = ({ item }) => {
  const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const selectedSeries = getParamFromUrl(searchParams, "series");
    setChecked(selectedSeries.includes(item.id));
  }, [searchParams, item.id]);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const seriesParam = searchParams.get("series") || "";
    let seriesArray = seriesParam ? seriesParam.split(",").map(Number) : [];

    seriesArray = isChecked
      ? [...seriesArray, item.id]
      : seriesArray.filter((id) => id !== item.id);

    updateUrlParams(searchParams, setSearchParams, { series: seriesArray.join(",") });
    setChecked(isChecked);
  };

  return (
    <StyledListItem>
      <StyledLabel>
        <StyledCheckbox
          type="checkbox"
          name={`pump-series-${item.id}`}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <StyledImage src={item.image} alt={item.name} />
        <StyledName>{item.name}</StyledName>
      </StyledLabel>
    </StyledListItem>
  );
};

export default PumpSeriesItem;
