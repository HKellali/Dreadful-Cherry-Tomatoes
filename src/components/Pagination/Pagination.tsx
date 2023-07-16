import previousButton from "../../resources/dreadful cherry tomatoes/icon/left-chevron@2x.png";
import nextButton from "../../resources/dreadful cherry tomatoes/icon/right-chevron@2x.png";

import styles from "./Pagination.module.scss";

/* I could have imported this from a different file but decided to leave 
it here in order to not change the project structure too much  and avoid 
adding a utilities folder */
function generateArray(start: number, stop: number, step: number) {
  const array = Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );

  return array;
}

interface PaginationProps {
  pageCount: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  pageCount,
  activePage,
  setActivePage,
}: PaginationProps) => {
  const pages = generateArray(1, pageCount, 1);

  const previousClickable = activePage > 1;
  const nextClickable = activePage < pageCount;

  function changePage(page: number) {
    setActivePage(page);
  }

  return (
    <>
      {pageCount > 1 && (
        <div className={styles.pagination}>
          <button
            key="previous"
            className={
              styles.previous +
              (!previousClickable ? " " + styles.disabled : "")
            }
            onClick={() => {
              if (previousClickable) {
                changePage(activePage - 1);
              }
            }}
          >
            <img src={previousButton} alt="previous page" />
          </button>
          {pages.map((page) => (
            <button
              key={"button" + page}
              className={page === activePage ? styles.active : ""}
              onClick={() => {
                if (page !== activePage) {
                  changePage(page);
                }
              }}
            >
              {page}
            </button>
          ))}
          <button
            key="next"
            className={
              styles.next + (!nextClickable ? " " + styles.disabled : "")
            }
            onClick={() => {
              if (nextClickable) {
                changePage(activePage + 1);
              }
            }}
          >
            <img src={nextButton} alt="next page" />
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
