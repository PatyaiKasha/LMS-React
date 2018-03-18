import React from 'react';
import HeaderMain from "@/components/Common/HeaderMainBlock";
import RightNav from "@/components/Common/RightNav";
import data from "@/components/Common/teoHw.js";

const TheoryPage = () => (
  <div>
    < HeaderMain 
    module = {data[0].dest}
    themNum = {data[0].number}
    themTitle = {data[0].title}
    time = {data[0].timer}
    />
< RightNav />
  </div>
);

export default TheoryPage;
