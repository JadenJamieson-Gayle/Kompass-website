declare module "react-slick" {
  import * as React from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    cssEase?: string;
    arrows?: boolean;
    pauseOnHover?: boolean;
    variableWidth?: boolean;
    // Add other settings as needed
  }

  export default class Slider extends React.Component<Settings> {}
}
