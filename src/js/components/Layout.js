import React from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import axios from 'axios';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            search:"reactjs",
            posts: []
        };
        this.doSearch = this.doSearch.bind(this);
    }

    doSearch(search,event){
        console.log("doing the search:");
        this.setState({
            search:search,
        });

        axios.get(`http://www.reddit.com/r/${search}.json`)
          .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);

            this.setState({
                posts:posts
            })
          });
    }


    render() {
        var displayShowResults = false;
        let list = <li>{}</li>;

        return (
            <div>
            <div id="SearchBar">
                <SearchBar doSearch={this.doSearch} />
                <h1>{this.state.search}</h1>
            </div>
            <div id="list">
                <ResultList list={this.state.posts} />
            </div>
            </div>

        );

  }
}
