
import React from 'react';
import HeaderMain from "@/components/Common/HeaderThery";
import RightNav from "@/components/Common/RightNav";
import data from "@/components/Common/teoHw.js";

const HomeworkPage = () => (
  <div>
    < HeaderMain
    module = {data[1].dest}
    themNum = {data[1].number}
    themTitle = {data[1].title}
    time = {data[1].timer}
    />
    <RightNav />
  </div>
);

export default HomeworkPage;
