import React from "react";
import Radium from "radium";

import ajax from "~/util/ajax";
import ProfilePicture from "~/shared/components/ProfilePicture";
import {fullName} from "~/util"
import styles from "~/shared/styles/navbar";

@Radium
export default class SearchDropItem extends React.Component {

    static propTypes = {
        user: React.PropTypes.object,
    }

    onClick = () => {
        window.location.assign("/profiles/id/" + this.props.user._id);
    }

    render() {
        return (
            <li onClick={this.onClick} style={styles.searchDropItem.li}>
        	    <ProfilePicture
                    user={this.props.user}
                    picSize="small"
                    frameSize={30}
                    hasIndicator
        	    />
        	    <span style={styles.searchDropItem.span}>{fullName(this.props.user)}</span>
        	</li>
        )
    }
}
