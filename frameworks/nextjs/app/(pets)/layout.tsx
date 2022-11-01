import Link from "next/link";
import clsx from "clsx";

import * as filterStyles from "../../../styles/filter.module.css";

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={filterStyles.searchIconSvg}
  >
    <g
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 19.1758C15.4183 19.1758 19 15.5941 19 11.1758C19 6.7575 15.4183 3.17578 11 3.17578C6.58172 3.17578 3 6.7575 3 11.1758C3 15.5941 6.58172 19.1758 11 19.1758Z" />
      <path d="M21.0004 21.1742L16.6504 16.8242" />
    </g>
  </svg>
);

export default async function Layout({ children }) {
  return (
    <>
      <div className={filterStyles.filterAndSearch}>
        <div className={filterStyles.filters}>
          <Link href="/"
            className={clsx(filterStyles.filterButton)}
          >
            All Snugglers
          </Link>
          <Link href="/dogs"
            className={clsx(filterStyles.filterButton)}
          >
            Dogs
          </Link>
          <Link href="/cats"
            className={clsx(filterStyles.filterButton)}
          >
            Cats
          </Link>
          <Link href="/exotics"
            className={clsx(filterStyles.filterButton)}
          >
            Exotics
          </Link>
        </div>
        <form className={filterStyles.searchContainer}>
          <SearchIcon />
          <input
            className={filterStyles.search}
            type="search"
            placeholder="Search pets"
          />
        </form>
      </div>
      {children}
    </>
  );
}
