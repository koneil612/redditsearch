import React from "react";

class Clicking extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.userGreeting = this.userGreeting.bind(this);

    }

    userGreeting() {
            return this.props.post.title;
    }

    handleClick(e) {
       e.preventDefault();
        console.log(this.props.post.title);
            return <userGreeting />;

        }

    render() {
        return (
            <img src={this.props.post.thumbnail} onClick={this.handleClick}/>
        );
    }
}

export default class ResultList extends React.Component {
    render() {
    return (
      <ul>
      {this.props.list.map(post =>
        <li key={post.id}>
        <Clicking post={post} />
        </li>
         )}
    </ul>
    )
  }
}
