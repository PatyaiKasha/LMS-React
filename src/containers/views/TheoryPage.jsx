import React from 'react';
import HeaderMain from "@/components/Common/HeaderMainBlock";
import RightNav from "@/components/Common/RightNav";
import Content from "@/components/Theory/Content";
import LeftNavAll from "@/components/Theory/LeftNav/index.jsx";
import data from "@/components/Common/teoHw.js";
import text from "@/components/Theory/Content/theoryComtent.js";

export default class TheoryPage extends React.Component {

state = {
content : text
};
render() {
  return (
  <div>
    < HeaderMain
      module = {data[0].dest}
      themNum = {data[0].number}
      themTitle = {data[0].title}
      time = {data[0].timer}
    />
    
    < RightNav />
    
    <LeftNavAll />

    {this.state.content.map(elem => <div> <Content key={elem.numb} {...elem} /> </div> )}
    
  </div>
  );
}
}