import React from 'react';
import HeaderMain from "@/components/Common/HeaderMainBlock";
import RightNav from "@/components/Common/RightNav";
import Content from "@/components/Theory/Content";
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
    {/* < Content arrData = {data[0].content[0]} 
    /> */}
    {this.state.content.map(elem => <Content key={elem.id} {...elem} /> )}
      </div>
  );
}
}