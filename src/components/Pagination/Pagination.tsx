import "./Pagination.scss";
import previousButton from "../../resources/dreadful cherry tomatoes/icon/left-chevron@2x.png";
import nextButton from "../../resources/dreadful cherry tomatoes/icon/right-chevron@2x.png";

const Pagination = (props: {
  pageCount: number;
  activePage: number;
  setActivePage;
}) => {
  function changePage(page: number) {
    props.setActivePage(page);
  }
  let content: JSX.Element[] = [];
  if (props.pageCount > 0) {
    const previousClickable = props.activePage > 1;
    content.push(
      <button
        key="previous"
        className={"previous" + (!previousClickable ? " disabled" : "")}
        onClick={() => {
          if (previousClickable) {
            changePage(props.activePage - 1);
          }
        }}
      >
        <img src={previousButton} alt="" />
      </button>
    );
    for (let index = 1; index <= props.pageCount; index++) {
      const clickable = index !== props.activePage;
      const element = (
        <button
          key={"button" + index}
          className={!clickable ? "active" : ""}
          onClick={() => {
            if (clickable) {
              changePage(index);
            }
          }}
        >
          {index}
        </button>
      );
      content.push(element);
    }
    const nextClickable = props.activePage < props.pageCount;
    content.push(
      <button
        key="next"
        className={"next" + (!nextClickable ? " disabled" : "")}
        onClick={() => {
          if (nextClickable) {
            changePage(props.activePage + 1);
          }
        }}
      >
        <img src={nextButton} alt="" />
      </button>
    );
  }
  return <div className="pagination">{content}</div>;
};

export default Pagination;
