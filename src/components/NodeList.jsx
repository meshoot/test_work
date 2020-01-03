import React from "react";

import NodeElement from "./NodeElement";


function NodeList(props) {
    const items = props.data;

    return (
        <ul className="node-list">
            {
                items.map(item => (
                    <li className="node-list__item" key={item.id}>
                        <NodeElement
                            id={item.id}
                            name={item.name}
                            childrens={item.childrens}
                            onDeleteNode={ id => props.onDeleteNode(id) }
                        />
                    </li>
                ))
            }
        </ul>
    );
}

export default NodeList;