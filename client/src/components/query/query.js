import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class Query extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types: ["user", "product", "outlet"],
      selectedType: "user",
      typeOptions: [],
      typeId: 1,
      selectedStartDate: null,
      selectedEndDate: null,
      queryResult: null,
    };

    let display = (
      <ListGroupItem className="d-flex">
        <p>No Result</p>
      </ListGroupItem>
    );
  }

  async componentDidMount() {
    const { selectedType } = this.state;
    const typeOptions = await axios.get(
      `http://localhost:5000/${selectedType}`
    );
    this.setState({ typeOptions: typeOptions.data });
    console.log(typeOptions);
  }

  onChangeUser = async (e) => {
    this.setState({
      selectedType: e.target.value,
    });

    const typeOptions = await axios.get(
      `http://localhost:5000/${e.target.value}`
    );

    this.setState({
      typeOptions: typeOptions.data,
    });
    console.log(typeOptions.data);
  };

  onChangeTypeOptions = async (e) => {
    this.setState({ typeId: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const {
      selectedStartDate,
      selectedEndDate,
      typeId,
      selectedType,
    } = this.state;
    const result = await axios.post(
      `http://localhost:5000/order/${selectedType}/${typeId}`,
      {
        start_date: selectedStartDate,
        end_date: selectedEndDate,
      }
    );

    this.setState({ queryResult: result.data[0] });

    // this.props.history.push("/");
  };

  render() {
    const {
      types,
      selectedType,
      typeOptions,
      typeId,
      selectedStartDate,
      selectedEndDate,
      queryResult,
    } = this.state;

    let display = (
      <ListGroupItem className="d-flex">
        <p>No Result</p>
      </ListGroupItem>
    );
    console.log("result===>", queryResult);

    if (queryResult) {
      if (selectedType == "product") {
        display = (
          <ListGroupItem className="d-flex">
            <p>{queryResult.name}</p>
            <p>{queryResult.total_quantity}</p>
            <p>{queryResult.total_cost}</p>
          </ListGroupItem>
        );
      } else if (selectedType == "outlet") {
        display = (
          <ListGroupItem className="d-flex">
            <p>{queryResult.name}</p>
            <p>{queryResult.total_quantity}</p>
            <p>{queryResult.total_products}</p>
            <p>{queryResult.total_cost}</p>
          </ListGroupItem>
        );
      } else if (selectedType == "user") {
        display = (
          <ListGroupItem className="d-flex">
            <p>{queryResult.name}</p>
            <p>{queryResult.total_quantity}</p>
            <p>{queryResult.total_products}</p>
            <p>{queryResult.total_cost}</p>
          </ListGroupItem>
        );
      }
    }

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Type</Label>
          <Input
            type="select"
            value={selectedType}
            onChange={this.onChangeUser}
            name="user"
            placeholder="Enter User"
            required
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Input>
          <Label>Select</Label>
          <Input
            type="select"
            value={typeId}
            onChange={this.onChangeTypeOptions}
            name="user"
            placeholder="Enter User"
            required
          >
            {typeOptions.map((typeOption) => (
              <option key={typeOption.id} value={typeOption.id}>
                {typeOption.name}
              </option>
            ))}
          </Input>
          <Label>Start date</Label>
          <DatePicker
            selected={selectedStartDate}
            onChange={(date) => this.setState({ selectedStartDate: date })}
            dateFormat="yyyy-MM-dd"
          />
          <Label>End date</Label>
          <DatePicker
            selected={selectedEndDate}
            onChange={(date) => this.setState({ selectedEndDate: date })}
            dateFormat="yyyy-MM-dd"
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
        <ListGroup>{display}</ListGroup>
      </Form>
    );
  }
}
