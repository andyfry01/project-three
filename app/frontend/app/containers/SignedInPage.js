import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MapComponent from '../components/MapComponent';
import TopHitsComponent from '../components/TopHitsComponent';
import ajaxHelpers from '../utils/ajaxHelpers';



const SignedInPage = React.createClass({

  getInitialState: function(){
    return {
      ajaxReturn: [],
      countryName: '',
    };
  },

  countryInput: function(e){
    this.setState({
      countryName: e.target.value
    });
    console.log(this.state.countryName);
  },

  findCountrySongsAjaxCall: function(){
    console.log('finding country:', this.state.countryName);
    const country = {
      countryName: this.state.countryName,
    };

  },

  render: function() {
    return (
      <div>
        <HeaderComponent />
        <MapComponent countryInput={this.countryInput} onSubmit={this.findCountrySongsAjaxCall} />
        <TopHitsComponent songs={this.state.ajaxReturn} />
      </div>
    );
  }
});

export default SignedInPage;
