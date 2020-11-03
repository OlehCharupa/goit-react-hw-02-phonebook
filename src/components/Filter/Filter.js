import React, { Component } from 'react';
import "./Filter.css"

class Filter extends Component {
    state = {
        filter: ""
    }
    inputHandler = ({ target }) => {
        const { name, value } = target
        this.setState((() => ({
            [name]: value
        })), this.addFilterData())
    }
    addFilterData = () => {
        const { filter } = this.state
        const newFilter = filter
        this.props.stateFilter(newFilter)
    }


    render() {
        return (
            <label className="labelSearch" >
                Find contacts by name
                <input
                    className="inputSearch"
                    name="filter"
                    type="text"
                    value={this.state.filter}
                    onChange={this.inputHandler}
                />
            </label>
        );
    };
}
export default Filter;