interface TwitterTimelineEmbedProps {
  sourceType: "profile" | "likes" | "list" | "collection" | "URL" | "widget";
  screenName?: string;
  userId?: number;
  autoHeight?: boolean;
  options?: {
    height: number;
  };
}

declare module "react-twitter-embed" {
  export declare class TwitterTimelineEmbed extends React.Component<
    TwitterTimelineEmbedProps
  > {}
}
