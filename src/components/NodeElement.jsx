import React from "react";

import NodeList from "./NodeList";
import Button from "./Button";

class NodeElement extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }
    }

    render() {
        let id = this.props.id;

        return(
            <div className="node-element">
                <div className="node-element__head">
                    <span className="node-element__name">{ `id: ${this.props.id} ${this.props.name}`}</span>

                    <div className="node-element__control">
                        <Button
                            className="add icon"
                            icon="add"
                            // onClick={() => )}
                        />
                        <Button
                            className="edit icon"
                            icon="edit"
                            // onClick={() => this.setState({editing: true})}
                        />
                        <Button
                            className={"delete icon"}
                            icon={"delete"}
                            onClick={ () => this.props.onDeleteNode(id) }
                        />
                    </div>
                </div>

                {
                    this.props.childrens ?
                        <NodeList
                            data={ this.props.childrens }
                            onDeleteNode={ id => this.props.onDeleteNode(id) }
                        />
                        :
                        null
                }
            </div>
        );
    }
}

export default NodeElement;