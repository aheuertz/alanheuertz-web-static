import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import TabPane from "reactstrap/lib/TabPane";
import TabContent from "reactstrap/lib/TabContent";
import Nav from "reactstrap/lib/Nav";
import NavLink from "reactstrap/lib/NavLink";
import Parser from "rss-parser";
import { isNullOrUndefined } from "util";
import Spinner from "reactstrap/lib/Spinner";
import moment from "moment";
import Table from "reactstrap/lib/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Tab {
  shortTitle: string,
  longTitle: string,
  rssFeedUrl: string,
}

const tabs = [
  {
    shortTitle: 'HN',
    longTitle: 'Hacker News',
    rssFeedUrl: 'https://news.ycombinator.com/rss',
  },
  {
    shortTitle: 'SH',
    longTitle: 'Scott Hanselman',
    rssFeedUrl: 'http://feeds.hanselman.com/ScottHanselman',
  },
  {
    shortTitle: 'ALA',
    longTitle: 'A List Apart',
    rssFeedUrl: 'https://alistapart.com/main/feed',
  },
  {
    shortTitle: 'CH',
    longTitle: 'Coding Horror',
    rssFeedUrl: 'https://blog.codinghorror.com/feed',
  },
]

export const FeedsCard = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [error, setError] = React.useState<string|undefined>(undefined);
  const [feed, setFeed] = React.useState<Parser.Output|undefined>(undefined);
  const [loading, setLoading] = React.useState(false);
  const pageSize = 5;

  React.useEffect(() => {
    setLoading(true);
    setError(undefined);
    setFeed(undefined);
    const parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    parser.parseURL(CORS_PROXY + tabs[activeTab].rssFeedUrl)
      .then((feed: Parser.Output) => {
        setLoading(false);
        setFeed(feed);
      })
      .catch((error: Error) => {
        setLoading(false);
        console.error("Unable to fetch RSS feed", error);
        setError("Unable to fetch RSS feed");
      });
  }, [activeTab]);

  return (
    <Card>
      <CardHeader>Feeds</CardHeader>
      <CardBody style={{minHeight: "300px"}}>
        <Nav className="justify-content-center" tabs>
          {tabs.map((tab: Tab, index: number) => (
            <NavLink
              key={index}
              active={index === activeTab}
              onClick={() => setActiveTab(index)}>{index === activeTab ? tab.longTitle : tab.shortTitle}</NavLink>
          ))}
        </Nav>
        <TabContent className="mt-2" activeTab={activeTab}>
          {tabs.map((tab: Tab, index: number) => (
            <TabPane tabId={index} key={index}>
              {loading && <Spinner />}
              {!isNullOrUndefined(error) && error}
              {!isNullOrUndefined(feed) && !isNullOrUndefined(feed.items) && (
                <Table size="sm">
                  <tbody>
                    {feed.items.slice(0, pageSize).map(item => (
                      <tr>
                        <td>{moment(item.isoDate).fromNow()}</td>
                        <td><a href={item.link} target="_blank">{item.title}<FontAwesomeIcon size="sm" color="gray" icon="external-link-alt" className="ml-2" /></a></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </TabPane>
          ))}
        </TabContent>
      </CardBody>
    </Card>
  );
}
