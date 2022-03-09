import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import classes from "./Home.module.css";
import "react-tabs/style/react-tabs.css";
import SectionLabel from "../SectionLabel/SectionLabel";

const Home = () => {
  return (
    <div className={classes.home}>
      <SectionLabel label="PhishCode | Home" />
      <div className={classes.container}>
        <div className={classes.left_side}>
          <img src="images/home-img-1.svg" alt="" />
        </div>
        <div className={classes.right_side}>
          <h1>Welcome to Phish Code</h1>
          <p>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <Tabs className={classes.tabs}>
            <TabList className={classes.tablist}>
              <Tab className={classes.tab}>Intro</Tab>
              <Tab className={classes.tab}>Give Feedback</Tab>
            </TabList>

            <TabPanel className={classes.tabPanel}>
              <p>
                Phish Node Attack simulation training lets you run benign cyber
                attack simulations on your organization to test your security
                policies and practices.
              </p>
            </TabPanel>
            <TabPanel className={classes.tabPanel}>
              <p>
                This is just the beginning. We're invested in building a
                one-stop shop to meet all your security needs across Microsoft
                365. But we need your help. Join the Windows insider programs to
                preview and review the latest enhancements. Leave feedback right
                here in Microsoft 365 Defender anytime to help us build the
                right solutions for you.
              </p>
              <textarea
                name=""
                id=""
                cols="20"
                rows="6"
                placeholder="Give your feedback here!"
              ></textarea>
              <button className={classes.submitBtn}>Submit Feedback</button>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
