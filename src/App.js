import React from 'react';
import './App.css';

import data from "./data/data";

import NodeElement from "./components/NodeElement";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeList: []
        };

        this.deleteNode =  this.deleteNode.bind(this);
    }

    componentDidMount() {
        this.setState({nodeList: data});
    }

    deleteNode(id) {
        let nodeList = this.state.nodeList;

        nodeList = nodeList.filter(node => {
            if (!search(node)) return node;
        });

        function search(node) {
            if (node.id !== id) return true;

            if (node.childrens) {
                return node.childrens.some(item => search(item));
            }
        }

        this.setState({nodeList});
    };

    render() {
        const nodeList = this.state.nodeList;

        return (
          <div>
              {nodeList.map(el => (
                  <NodeElement
                      key={ el.id }
                      id={ el.id }
                      name={ el.name }
                      childrens={ el.childrens }
                      onDeleteNode={ id => {this.deleteNode(id)} }
                  />
              ))}
          </div>
      );
    };
}

export default App;
