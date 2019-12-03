import React from "react";
import chip from "../pictures/choq.png";
import logo from "../pictures/log.png";

const card3 = date => {
  let ar = [];
  for (var i = 0; i < date.length; i += 2) {
    ar.push(date.slice(i, i + 2));
  }
  return ar.join("/");
};

class Card1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      validity: ""
    };
  }
  changeName = e => {
    if (!e.target.value.match(/[0-9]/g) && e.target.value.length < 21) {
      this.setState({
        name: e.target.value
      });
    }
  };
  changeNumber = e => {
    if (!e.target.value.match(/[^0-9 ]/gi) && e.target.value.length < 20) {
      this.setState({
        number: e.target.value.replace(/[ ]/gi, "")
      });
    }
  };
  changeValidity = e => {
    if (Number(e.target.value.slice(0, 2)) < 13) {
      this.setState({
        validity: e.target.value.replace(/[^0-9]/g, "").slice(0, 4)
      });
    } else return alert("Please enter a valid date");
  };
  splitNumbers = str => {
    let ar = [];
    for (var i = 0; i < str.length; i += 4) {
      ar.push(str.slice(i, i + 4));
    }
    return ar.join(" ");
  };

  render() {
    return (
      <div className="main">
        <div className="card">
          <h1>Achraf company</h1>
          <img src={chip} alt="choq" />
          <div className="middle-section">
            <div className="info">
              <p>{this.splitNumbers(this.state.number.padEnd(16, "*"))}</p>
              <p className="valid">
                {card3(this.state.validity.padEnd(4, "*"))}
              </p>
              <p>{this.state.name.toUpperCase()}</p>
            </div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="inputs">
          <label>
            <h3 className="label">Card holder</h3>
            <input
              type="text"
              name="fullname"
              value={this.state.name}
              onChange={this.changeName}
            />
          </label>
          <label>
            <h3 className="label">Card number</h3>
            <input
              type="text"
              name="cardnumber"
              value={this.splitNumbers(this.state.number)}
              onChange={this.changeNumber}
            />
          </label>
          <label>
            <h3 className="label">Valid thru</h3>
            <input
              type="text"
              name="validthru"
              value={card3(this.state.validity)}
              onChange={this.changeValidity}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Card1;
