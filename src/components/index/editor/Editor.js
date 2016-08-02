import React from "react";
import Radium from "radium";

import ajax from "~/util/ajax";
import RTEditor from "./RTEditor";
import { EditorButton } from "./shared";

@Radium
export default class Editor extends React.Component {

    constructor(props) {
        super(props);

        // not state because it does not affect the view
        // it is this way because RTEditor is uncontrolled
        // should be changed eventually
        this.content = "";

        this.state = {
            audience: {
                users: [],
                groups: [],
            },
        }

        // TODO: add audience selection button
    }

    post = async () => {
        let announcement = await ajax.request("POST", "/announcements", {
            content: this.content,
            audience: this.state.audience,
        });
        console.log(announcement);
    }
    
    render() {
        return (
            <div>
                <RTEditor
                    onChange={html => this.content = html}
                />
                <EditorButton
                    text="Select audience"
                    onClick={() => {}}
                />
                <EditorButton
                    text="Post"
                    onClick={this.post}
                />
            </div>
        )
    }

}