import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import StepTitle from "../UI/StepTitle";
import { getAllCategories } from "../../services";
import { updateUrlParams } from "../../helpers/url";
import { StyledWrapper, StyledCatalog } from "./styles";

const ApplicationField = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const fieldList = getAllCategories();

  useEffect(() => {
    const categoryId = searchParams.get("category");
    if (categoryId) {
      setActiveIndex(Number(categoryId));
    }
  }, [searchParams]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    updateUrlParams(searchParams, setSearchParams, { category: index });
  };

  return (
    <StyledWrapper>
      <StepTitle number={1} text="Область применения" />

      <StyledCatalog>
        {fieldList.map((field, index) => (
          <button
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleButtonClick(index)}
          >
            {field.name}
          </button>
        ))}
      </StyledCatalog>
    </StyledWrapper>
  );
};

export default ApplicationField;
