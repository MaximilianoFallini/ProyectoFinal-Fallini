import { MoonLoader } from "react-spinners";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    const { isLoading } = props;

    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-[60vh]">
          <MoonLoader color="#ff9100" />
        </div>
      );
    }

    return <Component {...props} />;
  }

  return ComponentWithLoading;
};