//import SearchInput from 'react-search-input';
var SearchScreen = React.createClass({
  getInitialState: function() {
    return {message: "",
        searchText: "",
        showCategory: false,
        SearchList:[{
        "itemCode": "00005007",
        "name": "HSBC CC",
        "itemDescription": "Payment to HSBC Credit Cards"
    }, {
        "itemCode": "00005005",
        "name": "POSB",
        "itemDescription": "Payment to POSB Credit Cards"
    }, {
        "itemCode": "00005001",
        "name": "ANZ",
        "itemDescription": "Payment to ANZ Credit Cards"
    }, {
        "itemCode": "00005012",
        "name": "OCBC Plus",
        "itemDescription": "Payment to OCBC Plus"
    }, {
        "itemCode": "00005008",
        "name": "ICBC - RMB",
        "itemDescription": "Payment to ICBC Credit Cards - RMB"
    }, {
        "itemCode": "00005011",
        "name": "OCBC Credit Cards",
        "itemDescription": "Payment to OCBC Credit Cards"
    }, {
        "itemCode": "00000411",
        "name": "Diners Club (S) Pte Ltd",
        "itemDescription": "Payment to Diners Club (S)"
    }, {
        "itemCode": "00005013",
        "name": "Standard Chartered Bank Credit Card",
        "itemDescription": "Payment to Standard Chartered Bank Credit Card"
    }, {
        "itemCode": "00005006",
        "name": "CIMB Credit Cards",
        "itemDescription": "Payment to CIMB Credit Cards"
    }, {
        "itemCode": "00000027",
        "name": "UOB Card Centre",
        "itemDescription": "Payment to UOB Card Centre"
    }, {
        "itemCode": "00005010",
        "name": "Maybank Credit Cards",
        "itemDescription": "Payment to Maybank Credit Cards"
    }, {
        "itemCode": "00005004",
        "name": "DBS Credit Cards",
        "itemDescription": "Payment to DBS Credit Cards",
    }]};
  },

  handleChange: function(evt) {
    this.setState({
        searchText: evt.target.value
    });
    this.onSearch(this.state.searchText);
  },
  handleClick: function(event) {
  	  var that = this;
  },

  searchWithDelay: function (term) {
        var state = this.getInitialState();
        if (term.length > 2){
            state.showCategory = true;
        }
        state.searchTerm = term;
        this.setState(state);
        this.onSearch(term);
  },

  onSearch: function (term) {
      //var that = this;
      //var filters = ['billerOrgnization'];
      //
      //setTimeout(function(){
      //    if (ReactDOM.findDOMNode(that.refs.search)) {
      //        that.setState({
      //            SearchList  :
      //        });
      //    }
      //},200);
  },


  render: function() {
      var that = this;
      var searchList = [];
      if ( that.state.SearchList.length > 0 ){
          searchList = that.state.SearchList.map(function(item,index){
              if (item !== null) {
                  return (<li key={index} className="list__row">
                      <h2 className="title">{item.name}</h2>
                  </li>);
              }
          });
      }
      return (
        <div>
            <div className="search__wrapper search__wrapper--banking">
                <div className="input-div">
                    <input type="text" ref='search' onChange={that.handleChange}  className="input-text" placeholder="Enter Your Search Text here."/>
                </div>
                {searchList}
            </div>
        </div>
    );
  }
});

ReactDOM.render(
  <SearchScreen/>,
  document.getElementById('content')
);


