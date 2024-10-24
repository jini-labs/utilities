import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="comingsoon__inner">
      <h1>工事中</h1>
      <p>準備中です、暫くお待ちください。</p>
      <Link to="/">Homeへ</Link>
    </div>
  ) 
}

export default ComingSoon;
