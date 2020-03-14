import React, { Component } from "react";
import EbookTable from "../../components/list/Table";
import { getEbookList } from "../../api/index";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getEbookList()
      .then(res => {
        const { data } = res.data;
        this.setState(state => ({
          data: data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <EbookTable data={this.state.data} />
      </div>
    );
  }
}

export default List;
