import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "@mui/material";
import profileImage from "./assets/images/profile-image.JPG";
import logo from "./assets/images/logo.png";
import Link from "./components/SocialLink";
import igLogo from "./assets/images/ig-logo.png";
import twitterLogo from "./assets/images/twitter-logo.png";
import tiktokLogo from "./assets/images/tiktok-logo.png";
import spotifyLogo from "./assets/images/spotify-logo.png";
import pressLogo from "./assets/images/press-logo.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import featuredTrack from "./assets/tracks/apr.m4a";
import "./App.css";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: "1rem",
    fontFamily: "Arial",
  },
  logo: {
    objectFit: "contain",
    height: "100px",
    width: "200px",
    marginRight: "20px",
  },
  audioPlayer: {
    borderTopColor: "#fff",
    marginTop: "10px",
    color: "#680747",
    width:'100%'
  },
  audioPlayerContainer: {
    borderRadius: 10,
    boxShadow: "-3px 9px 29px rgba(0, 0, 0, 0.2)",
    marginBottom: "1rem",
    padding: "1rem",
    alignItems: "center",
    width: "100%",
  },
});

export default function App() {
  return (
    <View style={styles.container} id="root">
      <Avatar
        src={profileImage}
        alt="FlucoMars"
        sx={{ width: 98, height: 98 }}
      />
      <img src={logo} alt="" style={styles.logo} />
      <View style={styles.audioPlayerContainer}>
        <Text>Ain't Playing Round</Text>
        <AudioPlayer src={featuredTrack} style={styles.audioPlayer} />
      </View>
      <Link
        url="https://open.spotify.com/artist/2Hx7BLFGcQqLmaJKB5rHX2?si=GQ9i5ExOQ46ZY7RuPJ3_ig "
        socialLogo={spotifyLogo}
      />
      <h4>Social Media</h4>
      <View>
        <Link
          nameOfSocial={"Instagram"}
          url="https://www.instagram.com/flucomars/"
          socialLogo={igLogo}
        />
        <Link
          nameOfSocial={"Twitter"}
          url="https://twitter.com/Flucomars"
          socialLogo={twitterLogo}
        />
        <Link
          nameOfSocial={"Tiktok"}
          url="https://www.tiktok.com/@flucomars"
          socialLogo={tiktokLogo}
        />
        <Link
          nameOfSocial={"Fluco Press Kit"}
          url="https://www.reverbnation.com/flucomars"
          socialLogo={pressLogo}
        />
      </View>
    </View>
  );
}
