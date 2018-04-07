import React from 'react';
import MapContainer from './map_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="title">Weltkrieg</div>
        <div className="main-content">
          <div className="research side-panel"></div>
          <div className="map">
            <MapContainer />
          </div>
          <div className="production side-panel"></div>
        </div>
        <div className="secondary-content">
          <div className="info"></div>
          <div className="battle"></div>
        </div>

      </div>
    );
  }
}

export default Main;