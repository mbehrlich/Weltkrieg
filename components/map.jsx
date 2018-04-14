import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.zoom = 1;
    this.factor = 0.5
    this.screenX = 0;
    this.screenY = 0;
    this.worldMap = undefined;
    this.canvas = undefined;
    this.ctx = undefined;
  }

  componentDidMount() {
    this.worldMap = new Image();
    this.canvas = document.getElementById("world-map");
    this.ctx = this.canvas.getContext("2d");
    this.worldMap.addEventListener('load', () => {
      this.ctx.scale(0.5, 0.5);
      this.ctx.drawImage(this.worldMap, this.screenX, this.screenY);
      this.drawSectors();
      this.canvas.addEventListener('wheel', event => {
        if (event.wheelDelta > 0 && this.zoom < 5) {
          this.zoom ++;
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.scale(1.25, 1.25);
          this.factor *= 1.25;
        } else if (event.wheelDelta < 0 && this.zoom > 1) {
          this.zoom --;
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.scale(0.8, 0.8);
          this.factor *= 0.8;
        }
        this.ctx.drawImage(this.worldMap, this.screenX, this.screenY);
        this.drawSectors();
      });

      this.canvas.addEventListener('mousedown', event => {
        let movingMap = this.mapMover(event);
        this.canvas.addEventListener('mousemove', movingMap);        
        window.addEventListener('mouseup', () => {
          this.canvas.removeEventListener('mousemove', movingMap);
        }, {once: true});
      });

    });
    this.worldMap.src = '../static/world_map.png';
  }

  drawSectors() {
    this.ctx.beginPath();
    this.props.landSectors.forEach(sector => {
      const vertices = sector.vertices;
      const lastVertex = vertices[vertices.length - 1];
      this.ctx.moveTo(lastVertex.x + this.screenX, lastVertex.y + this.screenY);
      sector.vertices.forEach((vertex, index) => {
        this.ctx.lineTo(vertex.x + this.screenX, vertex.y + this.screenY);
      });
    });

    this.ctx.stroke();
  }

  mapMover(initialEvent) {
    let screenX = this.screenX;
    let screenY = this.screenY;
    return event => {
      this.screenX = Math.max(Math.min(0, (event.offsetX - initialEvent.offsetX) / this.factor + screenX), this.canvas.width / this.factor - this.worldMap.width);
      this.screenY = Math.max(Math.min(0, (event.offsetY - initialEvent.offsetY) / this.factor + screenY), this.canvas.height / this.factor - this.worldMap.height);
      this.ctx.drawImage(this.worldMap, this.screenX, this.screenY);
      this.drawSectors();
    }
  }

  render() {
    return (
      <canvas id="world-map" height="600" width="600"></canvas>
    );
  }
}

export default Map;