import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import TabPane from "reactstrap/lib/TabPane";
import TabContent from "reactstrap/lib/TabContent";
import Nav from "reactstrap/lib/Nav";
import NavLink from "reactstrap/lib/NavLink";
import { TwitterTimelineEmbed } from "react-twitter-embed";

interface Tab {
  shortTitle: string;
  longTitle: string;
  twitterHandle: string;
}

const tabs = [
  {
    shortTitle: "DA",
    longTitle: "Dan Abramov",
    twitterHandle: "dan_abramov"
  },
  {
    shortTitle: "GR",
    longTitle: "Guillermo Rauch",
    twitterHandle: "rauchg"
  },
  {
    shortTitle: "KCD",
    longTitle: "Kent C. Dodds",
    twitterHandle: "kentcdodds"
  }
];

export const TweetsCard = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Card>
      <CardHeader>Tweets</CardHeader>
      <CardBody className="mb-3" style={{ minHeight: "300px" }}>
        <Nav className="justify-content-center" tabs>
          {tabs.map((tab: Tab, index: number) => (
            <NavLink
              key={index}
              active={index === activeTab}
              onClick={() => setActiveTab(index)}
            >
              {index === activeTab ? tab.longTitle : tab.shortTitle}
            </NavLink>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {tabs.map((tab: Tab, index: number) => (
            <TabPane
              tabId={index}
              key={index}
              style={{ maxHeight: "500px", overflowY: "scroll" }}
            >
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName={tab.twitterHandle}
              />
            </TabPane>
          ))}
        </TabContent>
      </CardBody>
    </Card>
  );
};
