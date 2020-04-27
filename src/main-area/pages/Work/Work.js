import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import MainTitle from '../../components/MainTitle'
import WorkSection from "../../components/WorkSection";
import './Work.sass'
import "react-tabs/style/react-tabs.css";

const Work = () => {
  return (
    <div className="Work">
      <MainTitle subTitle="MY WORK" title="RECENT WORK" />
      <div className="Work__tabContainer">
        <Tabs>
          <TabList>
            <Tab>Web</Tab>
            <Tab>Mobile</Tab>
          </TabList>

          <TabPanel>
              <WorkSection type="web" />
          </TabPanel>
          <TabPanel>
              <WorkSection type="mobile" />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Work
