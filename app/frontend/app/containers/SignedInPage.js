import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MapComponent from '../components/MapComponent';
import TopHitsComponent from '../components/TopHitsComponent';


const SignedInPage = React.createClass({

  getInitialState: function(){
    return {
      ajaxReturn: [],
      name: '',
    };
  },

  countryInput: function(e){
    this.setState({
      name: e.target.value
    });
    console.log(this.state.name);
  },

  render: function() {
    return (
      <div>
        <HeaderComponent />
        <MapComponent countryInput={this.countryInput} />
        <TopHitsComponent songs={this.state.ajaxReturn} />
      </div>
    );
  }
});

export default SignedInPage;
