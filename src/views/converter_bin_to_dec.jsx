import React, { Component } from "react";
import "../css/converter_bin_to_dec.css";
import { Form, Button } from "react-bootstrap";
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decimal_value: 0,
      binary_value: 0,
      error:false
    };
    this.changeText = this.changeText.bind(this);
    this.convert = this.convert.bind(this)

  }
  changeText(event) {
    let regex = /[^0-1]/;
    let value = event.target.value;

    let isValid = !regex.test(value);
    if (isValid) {
      this.setState({
        binary_value: value,
      });
    } else {
        this.setState({
            error: true,
          });
    }
  }

  convert(){
    let binary_value = this.state.binary_value
    let decimal_value = 0
    for (let i = 0; i <  binary_value.length; i++) {
  
        const element =  binary_value[binary_value.length-1-i];
        if(parseInt(element) === 1){
            let value =Math.pow(2,i)
            decimal_value += value
        }
        console.log(decimal_value)
    
    }

    this.setState({
        decimal_value
    })
  }
  render() {
    return (
      <center>
        <main id="main-container">
          <h1>Converter Binary to Decimal</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Binary Number</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                id="value-input"
                value={this.state.binary_value}
                onChange={this.changeText}
              />
            </Form.Group>
            {(this.state.error) ?    <Form.Text className="text-muted">
              Only binary values (0,1)
            </Form.Text> :''}
         
          </Form>

          <Button  onClick={this.convert} >Convert</Button>
          <div className="divider" ></div>
           <h4>
            Decimal Number
           </h4>
           <section id="number-container">
           {this.state.decimal_value}

           </section>
        </main>
      </center>
    );
  }
}

export default Converter;
