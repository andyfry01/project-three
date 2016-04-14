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
  },

  findCountrySongsAjaxCall: function(){
    console.log('finding country:', this.state.countryName);
    let country = this.state.countryName;
    ajaxHelpers.findCountrySongs(country)
    .then(function(response){
      console.log(response.data.tracks);
      this.setState({
        ajaxReturn: response.data.tracks
      });
    }.bind(this));
  },

  getCountrySongs: function(){
    console.log('getting songs');
    if (this.state.ajaxReturn.track) {
      return(
        <TopHitsComponent
          songs={this.state.ajaxReturn}
          />
      )
    }
  },

  render: function() {
    return (
      <div>
        <HeaderComponent />
        <MapComponent countryInput={this.countryInput} onSubmit={this.findCountrySongsAjaxCall} />
        {this.getCountrySongs()}
      </div>
    );
  }
});

export default SignedInPage;
