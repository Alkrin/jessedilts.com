import * as React from "react";

const Root = "TabNavigator-Root";
const Tabs = "TabNavigator-Tabs";
const Tab = "TabNavigator-Tab";
const TabContainer = "TabNavigator-TabContainer";
const Scroller = "TabNavigator-Scroller";

export interface TabModel {
  name: string;
  content: () => React.ReactNode;
}

interface State {
  selectedTabIndex: number;
}

interface ReactProps {
  tabs: TabModel[];
}

type Props = ReactProps;

export class TabNavigator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { selectedTabIndex: 0 };
  }

  render(): React.ReactNode {
    return (
      <div className={Root}>
        <div className={Tabs}>
          {this.props.tabs.map((model, index) => {
            return (
              <div
                key={`Tab${index}`}
                className={`${Tab} ${index === this.state.selectedTabIndex ? "selected" : ""}`}
                onClick={() => {
                  this.setState({ selectedTabIndex: index });
                }}
              >
                {model.name}
              </div>
            );
          })}
        </div>
        <div className={TabContainer}>
          <div key={this.state.selectedTabIndex} className={Scroller}>
            {this.props.tabs[this.state.selectedTabIndex]?.content() ?? "No Content"}
          </div>
        </div>
      </div>
    );
  }
}
