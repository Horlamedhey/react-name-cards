import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import UserCardList from "./components/UserCardList/UserCardList.js";
import UserPage from "./components/UserPage/UserPage";
import GetPeople from "./services//GetPeople";
import ReactPaginate from "react-paginate";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  async UNSAFE_componentWillMount() {
    this.handleDataFetch(1);
  }
  handleDataFetch = async page => {
    const _fetchData = await GetPeople(page);
    this.setState({
      people: _fetchData.data,
      page: _fetchData.page,
      perPage: _fetchData.per_page,
      total: _fetchData.total,
      totalPages: _fetchData.total_pages
    });
  };

  handlePageChange = page => {
    this.handleDataFetch(page.selected + 1);
    document.querySelector(".App").scrollIntoView();
  };

  render() {
    return (
      <Router>
        <Redirect to="/users"></Redirect>
        <div className="App">
          <Switch>
            <Route exact path="/users">
              <h2 className="App-header">Name Cards</h2>
              <UserCardList people={this.state.people} />
              <ReactPaginate
                previousLabel={<button>previous</button>}
                previousLinkClassName="controlButtons"
                nextLinkClassName="controlButtons"
                nextLabel={<button>next</button>}
                pageClassName="pages"
                pageLinkClassName="pagesLink"
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </Route>

            <Route path="/users/:id">
              <UserPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
