import React, { Component } from "react";

const WithLogging = ({ WrappedComponent }) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${WithLoggingComponent.getDisplayName()} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WithLoggingComponent.getDisplayName()} is going to unmount`);
    }

    static getDisplayName() {
      return (
        WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component"
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the displayName property on the returned component
  WithLoggingComponent.displayName = `WithLogging(${WithLoggingComponent.getDisplayName()})`;

  return WithLoggingComponent;
};

export default WithLogging;
