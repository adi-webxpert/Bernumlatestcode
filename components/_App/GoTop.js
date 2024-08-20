import React from "react";

const GoTop = () => {
  const [thePosition, setThePosition] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);


  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;  
};

  const renderGoTopIcon = () => {
    return (
      <div
        className={`go-top ${thePosition ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    );
  };

  return <>{
    renderGoTopIcon()
    }</>;
};

export default GoTop;
