import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
    };
  }
  render() {
    return <div>Meme Generator</div>;
  }
}

export default MemeGenerator;
