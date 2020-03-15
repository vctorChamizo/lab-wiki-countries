import React from "react";

import { Link } from "react-router-dom";

export const List = ({ countries }) => (
  <div className="col-3 list">
    <div className="list-group">
      {countries.map((e, i) => {
        const isActive = e.active ? "active" : "";
        return (
          <Link
            key={i}
            to={`/${e.code}`}
            className={`list-group-item list-group-item-action ${isActive}`}
          >
            {e.flag} {e.name}
          </Link>
        );
      })}
    </div>
  </div>
);
