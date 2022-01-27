import { fabric } from "fabric";
import React, { Component } from "react";
import { data } from "../utils/datalist";

export default class fabricCanvas extends Component {
  constructor(props) {
    super(props);
    this.initCanvas = this.initCanvas.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    this.initCanvas();
  }

  initCanvas = () => {
    const canvasInstance = new fabric.Canvas("canvas", {
      preserveObjectStacking: true,
      backgroundColor: "white",
    });

    canvasInstance.setHeight(
      document.getElementById("fc-container").clientHeight
    );
    canvasInstance.setWidth(
      document.getElementById("fc-container").clientWidth
    );

    canvasInstance.setDimensions(
      {
        height: "100%",
        width: "100%",
      },
      { cssOnly: true }
    );

    this.addMouseEventsOnCanvas(canvasInstance);
    this.props.setCanvas(canvasInstance);
  };

  handleDrop = (droppedAsset) => {
    let canvas = this.props.canvas;

    let asset = data.objects.filter((o) => o.name === droppedAsset)[0];

    let groupArr = [];

    let groupHeight = 200;

    let groupMain = new fabric.Rect({
      originX: "center",
      originY: "center",
      width: 50,
      height: groupHeight,
      borderColor: "black",
      stroke: "black",
      fill: "rgba(0,0,0,0)",
      strokeWidth: 1,
      hasBorders: true,
    });

    let groupName = new fabric.Text(asset.name, {
      fontSize: 20,
      originX: "center",
      originY: "center",
      angle: 270,
    });

    groupArr.push(groupMain, groupName);

    if(asset.nodelist.length>0){
      let top = 25
      asset.nodelist.forEach((o,i) => {
        let line = new fabric.Line([25,-20*i,50,-1*i], {
          stroke: 'green',
        });
          groupArr.push(line)
      })
    }

    console.log(groupArr)

    var group = new fabric.Group(groupArr, {
    });

    canvas.add(group);
    canvas.renderAll();
    canvas.centerObject(group);
  };

  addMouseEventsOnCanvas = (canvasInstance) => {
    let handleDrop = this.handleDrop;
    canvasInstance.on("drop", function (e) {
      let droppedAsset = e.e.dataTransfer.getData("text");
      handleDrop(droppedAsset);
    });
  };

  render() {
    return (
      <div className="fc-wrapper">
        <div className="card" id="fc-container">
          <canvas id="canvas" />
        </div>
      </div>
    );
  }
}
