import React, { Component } from 'react';
import StrainContainer from "./StrainContainer";
import AppleMusic from "../../images/icon-itunes.png";
import Spotify from "../../images/icon-spotify.png";
import Amazon from "../../images/icon-amazon.png";
import Movie from "../../images/icon-movie.png";

const styles = {
    thumb: {
        height: '20px',
        width: '20px',
    }
}

class Album extends Component {
    state = {
        album: {}
    }

    render(){
        return(
            <div className="row container-fluid center">

          <div className="col s12 m12 l4">
            <div className="icon-block">
              <h1 className="center white-text"><i className="material-icons">music_video</i></h1>
              <h6 className="center">Album of the Week</h6>
              <p className="light center white-text">Hud Dreems by Knxwledge</p>
              <iframe title="cherry" style={{border: "0", width: "250px", height: "250px", marginRight: "20px"}} src="https://bandcamp.com/EmbeddedPlayer/album=747875505/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://knxwledge.bandcamp.com/album/hud-dreems">{ this.state.album.title } by Knxwledge.}</a></iframe>
              <p className="light white-text" align="left">Knxwledge (pronounced “knowledge”) is a Los Angeles based beat maker making his debut on Stones Throw, with the 2015 album Hud Dreems – 26 tracks of instrumental hip-hop.</p>
              <p className="light center"><a href="https://itunes.apple.com/us/album/hud-dreems/980151816" target="_blank" rel="noopener noreferrer"><img style={styles.thumb} src={AppleMusic} alt="appleMusic" /> Listen on Apple Music</a>
                <br /><a href="https://open.spotify.com/album/2hnFG95OCnV24yP4UDXlzl" target="_blank" rel="noopener noreferrer"><img style={styles.thumb} src={Spotify} alt="Spofity" /> Listen on Spotify</a></p>
            </div>
          </div>
          <div className="col s12 m12 l4">
            <div className="icon-block">
              <h1 className="center white-text"><i className="material-icons">ondemand_video</i></h1>
             </div>
            <h6 className="center white-text">Movie of the Week</h6>
            <p className="light white-text">2001: A SPACE ODYSSEY</p>
            <iframe style={styles.movie} title= "movie" src="https://www.youtube.com/embed/oR_e9y-bka0?rel=0&amp;showinfo=0" width="100%" height= "275px" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="light white-text"><i>Official Trailer</i></p>
            <p className="light white-text" align="left">A mind-bending sci-fi symphony, Stanley Kubrick's landmark 1968 epic pushed the limits of narrative and special effects toward a meditation on technology and humanity.</p>
            <p className="light"><a href="https://itunes.apple.com/us/movie/2001-a-space-odyssey/id285993250" target="_blank" rel="noopener noreferrer"><img style={styles.thumb} src={Movie} alt="iTunes" /> Rent on iTunes</a>
              <br /><a href="https://www.amazon.com/2001-Space-Odyssey-Keir-Dullea/dp/B000HEBCZQ/ref=sr_1_2?s=instant-video&ie=UTF8&qid=1526668766&sr=1-2&keywords=2001+a+space+odyssey" target="_blank" rel="noopener noreferrer"><img style={styles.thumb} src={Amazon} alt="Amazon" /> Rent on Amazon</a></p>
          </div>
          <div className="col s12 m12 l4">
          <div className="icon-block">
          <h1 className="center white-text"><i className="material-icons">local_pharmacy</i></h1>
              <h6 className="center">Strain of the Week</h6>
                <StrainContainer />
          </div>
          </div>
        </div>
      );
    }
}
export default Album; 
        
