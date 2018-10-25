import React from "react";
import Page69 from "./Page69";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page69 },
  childRoutes: [
    {
      path: "/single-post",
      name: "/single-post",
      component: Page69
    },
    {
      path: "*",
      name: "notfound",
      component: Page69
    }
  ]
};
