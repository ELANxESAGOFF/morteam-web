import React from "react";
import Radium from "radium";

import { makeChangeHandlerFactory, REDIR_TIME } from "~/util";
import ajax from "~/util/ajax";
import VoidButton from "./VoidButton";
import VoidTextBox from "./VoidTextBox";
import ErrorMsg from "~/components/shared/forms/ErrorMsg";

@Radium
export default class CreateScreen extends React.Component {

    constructor(props) {
        super(props);

        this.getChangeHandler = makeChangeHandlerFactory(this);

        this.state = {
            number: "", // actual number here?
            name: "",
            id: "",
            errorMsg: "",
        }
    }

    create = async() => {
        try {
            await ajax.request("post", "/teams", {
                number: this.state.number,
                name: this.state.name,
                id: this.state.id,
            });
            this.setState({
                errorMsg: "Success"
            });
            setTimeout(() => window.location.assign("/"), REDIR_TIME);
        } catch ({ data }) {
            this.setState({
                errorMsg: data
            });
        }
    }

    render() {
        return (
            <div>
                <VoidTextBox
                    placeholder="Team Number"
                    value={this.state.number}
                    onChange={this.getChangeHandler("number")}
                />
                <VoidTextBox
                    placeholder="Team Name"
                    value={this.state.name}
                    onChange={this.getChangeHandler("name")}
                />
                <VoidTextBox
                    placeholder="Choose Team ID"
                    value={this.state.id}
                    onChange={this.getChangeHandler("id")}
                />
                <VoidButton
                    text="Done"
                    onClick={this.create}
                />
                <ErrorMsg message={this.state.errorMsg} />
            </div>
        )
    }

}
