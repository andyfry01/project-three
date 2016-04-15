import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MapComponent from '../components/MapComponent';
import TopHitsComponent from '../components/TopHitsComponent';
import ajaxHelpers from '../utils/ajaxHelpers';

let styles = require('../css/styles.css');

const SignedInPage = React.createClass({
  componentDidMount: function() {
    console.log("hi signedInPage has loaded");
  },

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
    console.log('getting songs on signedinpage');

    if (this.state.ajaxReturn.track) {
      return (
        <div className='topHitsStyles'>
          <TopHitsComponent
            songs={this.state.ajaxReturn}
          />
        </div>
      );
    }
  },

  render: function() {
    console.log("SignedInPage pageValue isssss:", this.state.pageValue);
    return (
      <div>
        <HeaderComponent buttonText={"View Playlist"} link={"PlaylistPage"}/>
        <MapComponent countryInput={this.countryInput} onSubmit={this.findCountrySongsAjaxCall} />
        {this.getCountrySongs()}
      </div>
    );
  }
});

export default SignedInPage;
