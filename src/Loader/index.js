import React, { Component } from "react";
// import { Progress  }  from "material-ui";
import  {   CircularProgress  } from "material-ui/Progress";
// import   Loader    from 'react-loaders'

const styles = {
  loader: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#394A5E"
  }
};
class App extends Component {
  render() {
    return (
      <div style={styles.loader}>
        <div
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
         
          <CircularProgress size={50} />
          <div
            style={{
              flexDirection: "column",
              backgroundColor: "orange",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            c
          </div>
        </div>
      </div>
    );
  }
}

export default App;
