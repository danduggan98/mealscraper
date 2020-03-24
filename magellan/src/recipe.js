import React, {Component} from 'react';

//Parse an object into a JSX list
function ObjectToList(props) {
    let data = props.list;
    let items = [];

    Object.keys(data).forEach((header, list) => {
        let section = [];
        let itemList = data[header];
        for (let i = 0; i < itemList.length; i++) {
            section.push(<li key={itemList[i].toString()}>{itemList[i]}</li>);
        }
        items.push(<h4 key={header.toString()}><u>{header}</u></h4>)
        items.push(<ul key={section.toString()}>{section}</ul>);
    });

    return (<div> {items} </div>);
}

//Parse directions into a list

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeID: props.id,
            ingredients: '',
            directions: ''
        };
    }

    componentDidMount() {
        fetch('/recipe/' + this.state.recipeID)
        .then(res => res.json())
        .then(data => this.setState({
            URL: data.URL,
            imageURL: data.imageURL,
            author: data.author,
            recipeName: data.recipeName,
            difficulty: data.difficulty,
            totalTime: data.totalTime,
            prepTime: data.prepTime,
            inactiveTime: data.inactiveTime,
            activeTime: data.activeTime,
            cookTime: data.cookTime,
            yield: data.yield,
            ingredients: data.ingredients,
            directions: data.directions,
            source: data.source
        }));
    }

    render() {
        return (
            <div>
                <h1> {this.state.recipeName} </h1>
                <h2> by {this.state.author} </h2>
                <h3> Courtesy of {this.state.source} </h3>

                { this.state.imageURL ?
                    <img src={this.state.imageURL} alt="" width="600"></img> :
                    <p></p>
                }

                <br></br>
                <a target="_blank" rel="noopener noreferrer" href={this.state.URL}>Original Recipe</a>
                
                <br></br>
                <h3> Difficulty: {this.state.difficulty} | Yield: {this.state.yield} </h3>
                
                <br></br>
                <h2> Total Time: {this.state.totalTime} </h2>

                { this.state.prepTime ?
                    <h4> {this.state.prepTime} prep time </h4> :
                    <p></p>
                }
                    
                { this.state.cookTime ?
                    <h4> {this.state.cookTime} cook time </h4> :
                    <p></p>
                }

                { this.state.activeTime ?
                    <h4> {this.state.activeTime} active time </h4> :
                    <p></p>
                }

                { this.state.inactiveTime ?
                    <h4> {this.state.inactiveTime} inactive time </h4> :
                    <p></p>
                }

                <br></br>
                <h2>Ingredients: </h2>
                <ObjectToList list={this.state.ingredients} />
                <br></br>

                <h2>Directions: </h2>
                <ObjectToList list={this.state.directions} />
            </div>
        );
    }
}

export default Recipe;