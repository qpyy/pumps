import { useSearchParams } from "react-router-dom";

const Result = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries(searchParams.entries());

  return (
    <div>
      <h1>Результат</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default Result;
