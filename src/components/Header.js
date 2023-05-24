import React from "react";

function Header({ title, subTitle }) {
  // title và subTitle gọi là props (giống như object)
  return (
    <h1 className="title">
      {title}
      <span className="sub-title">{subTitle}</span>
    </h1>
  );
}

export default Header;
