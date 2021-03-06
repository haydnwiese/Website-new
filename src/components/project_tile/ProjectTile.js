import React from "react";
import PropTypes from "prop-types";

import "./ProjectTile.css";

import reactLogo from "../../resources/projects/react.png";
import androidLogo from "../../resources/projects/androidLogo.png";
import nodeLogo from "../../resources/projects/nodeLogo.png";
import springBootLogo from "../../resources/projects/springBootLogo.png";
import iosLogo from "../../resources/projects/iosLogo.png";

export default class ProjectTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  resetTile = () => {
    this.setState({ active: false });
  };

  render() {
    let className;
    className += " projectTileNoImages";
    this.state.active
      ? this.props.containsImages
        ? (className = "projectTile projectTileActive")
        : (className = "projectTile projectTileNoImages")
      : (className = "projectTile projectTileInactive");

    let toolIcon;
    switch (this.props.projectTool) {
      case "React Native":
      case "React":
        toolIcon = reactLogo;
        break;
      case "Android (Java)":
        toolIcon = androidLogo;
        break;
      case "Node.js":
        toolIcon = nodeLogo;
        break;
      case "Spring Boot":
        toolIcon = springBootLogo;
        break;
      case "Swift":
        toolIcon = iosLogo;
        break;
      default:
        toolIcon = reactLogo;
    }

    if (!this.state.active) {
      return (
        <div
          className={className}
          onClick={() =>
            this.state.active
              ? this.setState({ active: false })
              : this.setState({ active: true })
          }
        >
          <div className="projectTitle">{this.props.projectTitle}</div>
          <div className="projectToolContainer">
            <img className="projectToolLogo" src={toolIcon} />
            <div className="projectTool">{this.props.projectTool}</div>
          </div>
          <div className="promptContainer">
            <div className="expandPrompt">
              {this.state.active ? "Click to Collapse" : "Click to Expand"}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={className}
          onClick={() =>
            this.state.active
              ? this.resetTile()
              : this.setState({ active: true })
          }
        >
          <div className="projectTitle">{this.props.projectTitle}</div>
          <div className="projectToolContainer">
            <img className="projectToolLogo" src={toolIcon} />
            <div className="projectTool">{this.props.projectTool}</div>
          </div>
          <div className="descriptionContainer">
            <p className="description">{this.props.description1}</p>
            <p className="description">{this.props.description2}</p>
          </div>
          <div className={`previewContainer ${this.props.layout}`}>
            {this.props.children}
          </div>
          <div className="promptContainer">
            <div
              className={
                this.state.active ? "expandPromptExpanded" : "expandPrompt"
              }
            >
              {this.state.active ? "Click to Collapse" : "Click to Expand"}
            </div>
          </div>
        </div>
      );
    }
  }
}

ProjectTile.propTypes = {
  projectTitle: PropTypes.string,
  projectTool: PropTypes.string,
  layout: PropTypes.string,
  containsImages: PropTypes.bool,
};

ProjectTile.defaultProps = {
  containsImages: true,
};
