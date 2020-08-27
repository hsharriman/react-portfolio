import React from "react"
import '../styles/projectpgs.css'

export default class ProjectPage extends React.Component {
    render() {
        return (
            <section>
                <div className="right-section">
                    {this.props.renderTitleSection()}
                    {this.props.renderRightSection()}
                </div>
                <div className="left-section">
                    {this.props.renderLeftSection()}
                </div>
            </section>
        );
    }

}