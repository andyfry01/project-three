import React from 'react';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactAudioPlayer from 'react-audio-player';

const SongComponent = React.createClass({

  getInitialState: function(){
    return {
      btnValue: this.props.btnValue,
      playUrl: '',
      route: '', //use for future delete button
      btnBgColor: 'rgba(142, 38, 113,.9)',
    }
  },

  playSong: function(){
    console.log('should play song now');
    ajaxHelpers.playSong(this.props.name)
    .then(function(response){
      console.log('spotify:', response.data.tracks.items[0].preview_url)
      this.setState({
        playUrl: response.data.tracks.items[0].preview_url,
      })
    }.bind(this));
  },

  pauseSong: function(){
    this.setState({
      playUrl: '',
    })
  },

  addSong: function(){

    if(this.state.btnValue === 'Save'){
      this.setState({
        btnValue: 'Saved!',
        btnBgColor: '#b71998',
      });
    }

    let song = {
      name: this.props.name,
      artist: this.props.artist,
      country: this.props.country,
      rank: this.props.rank,
      album_image: this.props.album_image,
      song_url: this.props.song_url
    }
    ajaxHelpers.addSongToPlaylist(song)
  },

  getSongs: function(){

    let mainStyle = {
      formatDiv: {
        backgroundColor: 'rgba(255,255,255,.1)',
        color: 'rgba(255,255,255,.9)',
        textShadow: '0 0 5px #000',
        borderRadius: '5px',
        margin: '20px',
        width: '370px',
        height: '370px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundImage: 'url(' + this.props.album_image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontWeight: 'bolder',
      },
      formatBtn: {
        backgroundColor: this.state.btnBgColor,
        border: '1px solid rgba(142, 38, 113,1)',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: '17px'
      },
      flex: {
        display: 'flex',
      },
      track: {
        fontSize: '30px',
        textTransform: 'uppercase',
      },
      artist: {
        fontSize: '20px',
      },
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        top: '100px',
      },
      hide: {
        visibility: 'hidden',
      }
    };

    return (
      <div
        style={mainStyle.formatDiv}
        onMouseEnter={this.playSong}
        onMouseLeave={this.pauseSong}
        className='songInfo'>

        <div style={mainStyle.center}>
          <span style={mainStyle.artist}>{this.props.artist}</span>
          <span style={mainStyle.track}> {this.props.name}</span>
        </div>

        <div style={mainStyle.flex}>
          <button
            style={mainStyle.formatBtn}
            onClick={this.addSong}
            className="addSongBtn"
            > {this.state.btnValue}
          </button>

          <div style={mainStyle.hide}>
            <ReactAudioPlayer
              src={this.state.playUrl}
              autoPlay='true'
              preload='none'
            />
          </div>

        </div>
      </div>
    )
  },

  render: function() {
    return (
      <div>
        {this.getSongs()}
      </div>
    );
  }
});

export default SongComponent;
