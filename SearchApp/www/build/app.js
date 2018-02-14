"use strict";

//import SearchInput from 'react-search-input';
var SearchScreen = React.createClass({
    displayName: "SearchScreen",

    getInitialState: function getInitialState() {
        return { message: "",
            searchText: "",
            showCategory: false,
            SearchList: [{
                "billerId": "f16be370ac1d267b0085ef3c94fa7407",
                "billerCode": "00005003",
                "billerOrgnization": "Citibank Credit Cards",
                "billerDescription": "Payment to Citibank Credit Cards",
                "billerType": "B",
                "billerCategory": "Credit / Charge Cards",
                "billerValid": "false",
                "billerShortName": "Citi CC",
                "billerReferenceNumberHelpText": "Please enter the 16 digits credit card number as your bill reference number(omit dashes/space)."
            }, {
                "billerId": "f16be371ac1d267b0085ef3c56a03948",
                "billerCode": "00005002",
                "billerOrgnization": "Bank of China Credit Cards",
                "billerDescription": "Payment to Bank of China Credit Cards",
                "billerType": "B",
                "billerCategory": "Credit / Charge Cards",
                "billerValid": "false",
                "billerShortName": "BOC CC",
                "billerReferenceNumberHelpText": "Please enter the 16 digits credit card number as your bill reference number(omit dashes/space)."
            }, {
                "billerId": "f16be372ac1d267b0085ef3cf98b551f",
                "billerCode": "00000020",
                "billerOrgnization": "American Express International Inc",
                "billerDescription": "Payment to AMEX",
                "billerType": "B",
                "billerCategory": "Credit / Charge Cards",
                "billerValid": "false",
                "billerShortName": "AMEX",
                "billerReferenceNumberHelpText": "PLEASE ENTER 15 DIGITS BEGINNING WITH 3762 AS YOUR BILL REFERENCE NUMBER (OMIT DASHES/SPACE)."
            }, {
                "billerId": "f16be376ac1d267b0085ef3c4ee99c2b",
                "billerCode": "00000008",
                "billerOrgnization": "PAY ANY CARDS",
                "billerDescription": "CARD to do Other Bank Bill Payment",
                "billerType": "B",
                "billerCategory": "Credit / Charge Cards",
                "billerValid": "false",
                "billerShortName": "PA CARDS"
            }, {
                "billerId": "f16be37cac1d267b0085ef3c54cac62f",
                "billerCode": "00005009",
                "billerOrgnization": "ICBC Credit Cards - SGD",
                "billerDescription": "Payment to ICBC Credit Cards - SGD",
                "billerType": "B",
                "billerCategory": "Credit / Charge Cards",
                "billerValid": "false",
                "billerShortName": "ICBC CC SGD",
                "billerReferenceNumberHelpText": "Please enter the 16 digits credit card number as your bill reference number(omit dashes/space)."
            }, {
                "billerCode": "00005007",
                "billerOrgnization": "HSBC Credit Cards",
                "billerDescription": "Payment to HSBC Credit Cards"
            }, {
                "billerCode": "00005005",
                "billerOrgnization": "POSB Credit Cards",
                "billerDescription": "Payment to POSB Credit Cards"
            }, {
                "billerCode": "00005001",
                "billerOrgnization": "ANZ Credit Cards",
                "billerDescription": "Payment to ANZ Credit Cards"
            }, {
                "billerCode": "00005012",
                "billerOrgnization": "OCBC Plus",
                "billerDescription": "Payment to OCBC Plus"
            }, {
                "billerCode": "00005008",
                "billerOrgnization": "ICBC Credit Cards - RMB",
                "billerDescription": "Payment to ICBC Credit Cards - RMB"
            }, {
                "billerCode": "00005011",
                "billerOrgnization": "OCBC Credit Cards",
                "billerDescription": "Payment to OCBC Credit Cards"
            }, {
                "billerCode": "00000411",
                "billerOrgnization": "Diners Club (S) Pte Ltd",
                "billerDescription": "Payment to Diners Club (S)"
            }, {
                "billerCode": "00005013",
                "billerOrgnization": "Standard Chartered Bank Credit Card",
                "billerDescription": "Payment to Standard Chartered Bank Credit Card"
            }, {
                "billerCode": "00005006",
                "billerOrgnization": "CIMB Credit Cards",
                "billerDescription": "Payment to CIMB Credit Cards"
            }, {
                "billerCode": "00000027",
                "billerOrgnization": "UOB Card Centre",
                "billerDescription": "Payment to UOB Card Centre"
            }, {
                "billerCode": "00005010",
                "billerOrgnization": "Maybank Credit Cards",
                "billerDescription": "Payment to Maybank Credit Cards"
            }, {
                "billerCode": "00005004",
                "billerOrgnization": "DBS Credit Cards",
                "billerDescription": "Payment to DBS Credit Cards"
            }] };
    },

    handleChange: function handleChange(evt) {
        this.setState({
            searchText: evt.target.value
        });
        this.onSearch(this.state.searchText);
    },
    handleClick: function handleClick(event) {
        var that = this;
    },

    searchWithDelay: function searchWithDelay(term) {
        var state = this.getInitialState();
        if (term.length > 2) {
            state.showCategory = true;
        }
        state.searchTerm = term;
        this.setState(state);
        this.onSearch(term);
    },

    onSearch: function onSearch(term) {
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

    render: function render() {
        var that = this;
        var searchList = [];
        if (that.state.SearchList.length > 0) {
            searchList = that.state.SearchList.map(function (item, index) {
                if (item !== null) {
                    return React.createElement(
                        "li",
                        { key: index, className: "list__row" },
                        React.createElement(
                            "h2",
                            { className: "title" },
                            item.billerOrgnization
                        )
                    );
                }
            });
        }
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "search__wrapper search__wrapper--banking" },
                React.createElement(
                    "div",
                    { className: "input-div" },
                    React.createElement("input", { type: "text", ref: "search", onChange: that.handleChange, className: "input-text", placeholder: "Enter Your Search Text here." })
                ),
                searchList
            )
        );
    }
});

ReactDOM.render(React.createElement(SearchScreen, null), document.getElementById('content'));
