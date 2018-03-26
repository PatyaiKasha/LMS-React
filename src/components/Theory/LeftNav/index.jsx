import React from 'react';
import LeftNav from "@/components/Theory/LeftNav/LeftNav.jsx";
import './style.scss';
import text from "@/components/Theory/Content/theoryComtent.js";

export default class LeftNavAll extends React.Component {

    state = {
    content : text
    };
render() {
  return (
    < div className = "m-left-nav" >
        {this.state.content.map(elem => <LeftNav key={elem.numb} {...elem} /> )}
    </div>
  );
}
}