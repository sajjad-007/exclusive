import React from "react";
import { useLocation, Link } from "react-router-dom";
const BreadCrumb = () => {
  let { pathname } = useLocation();
  let myPath = pathname.split("/").filter((path) => path);
  let BreadCrumb = "";
  return (
    <div className="container">
      <div className="main py-4 flex gap-2">
        <div>
          <span className="text-text-7d8 font-poppins text-sm font-normal leading-5 capitalize ">
            <Link to="/">home</Link>
          </span>
        </div>
        {myPath?.map((name, index) => {
            //my last path
          let isLast = index === myPath.length - 1;
          //my current path
          BreadCrumb += `/${name}`;
          return isLast ? (
            <>
              <span className="text-xl text-text-7d8">/</span>
              <div>
                <span className="text-text-7d8 font-poppins text-sm font-normal leading-5 capitalize cursor-not-allowed">
                  {name}
                </span>
              </div>
            </>
          ) : (
            <>
              <span className="text-xl text-text-7d8">/</span>
              <div>
                <span className="text-text-7d8 font-poppins text-sm font-normal leading-5 capitalize ">
                  <Link to={BreadCrumb}>{name}</Link>
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;
