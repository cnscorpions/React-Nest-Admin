import React, { Component } from "react";
import EbookTable from "../../components/list/Table";
import { getEbookList, deleteEbook } from "../../api/index";
import msgService from "../../components/message/message";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
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
  };

  deleteItem(id) {
    deleteEbook({ id: id })
      .then(res => {
        this.getList();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <EbookTable data={this.state.data} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default List;
