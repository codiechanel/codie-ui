// eslint-disable-next-line
import React from "react";
import Icon from "material-ui/Icon";
import PropTypes from 'prop-types'
import Typography from "material-ui/Typography";
import { withTheme } from "material-ui/styles";
function IconText(props) {
  
  let color = props.theme.palette.secondary.main
  if (props.color === "primary") {
    color = props.theme.palette.primary.main
  }
  else if (props.color) {
      color = props.color
  }
  let display = props.inline ? "inline-flex": "flex"

  return (
    <div
      style={{  marginRight: 4, display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Icon
        style={{
          marginRight: 4,
          color,
          fontSize: props.iconSize
        }}
      >
        {props.iconName}
      </Icon>
      <Typography
        style={{ color }}
      >
        {props.children}
      </Typography>
    </div>
  );
}

IconText.defaultProps = {
    inline: true, 
    iconName: "home", 
    children: "IconText", 
    iconSize: 13
  }
  IconText.propTypes = {
    color: PropTypes.string
  };
export default withTheme()(IconText);
