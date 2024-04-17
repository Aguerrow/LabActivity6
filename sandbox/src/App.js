import "./styles.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Pantropiko",
    artist: "Bini",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Alam mo ba girl",
    artist: "Hev Abi",
    genre: "Hiphop",
  },
  {
    id: 3,
    title: "Selos",
    artist: "Shaira",
    genre: "Pop",
  },
  {
    id: 4,
    title: "Sweet Creature",
    artist: "Harry Styles",
    genre: "Pop",
  },
  {
    id: 5,
    title: "Pumped Up Kicks",
    artist: "Foster the People",
    genre: "ElectroPop",
  },
  {
    id: 6,
    title: "Godspeed",
    artist: "Frank Ocean",
    genre: "R&B/Soul",
  },
  {
    id: 7,
    title: "Electric Feel",
    artist: "MGMT",
    genre: "Indie Rock",
  },
  {
    id: 8,
    title: "Take Me to Church",
    artist: "Hozier",
    genre: "Indie Rock",
  },
  {
    id: 9,
    title: "Can't Feel My Face",
    artist: "The Weeknd",
    genre: "R&B",
  },
  {
    id: 10,
    title: "Somebody That I Used to Know",
    artist: "Gotye",
    genre: "Indie Pop",
  },
  {
    id: 11,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    genre: "Pop",
  },
  {
    id: 12,
    title: "Don't Start Now",
    artist: "Dua Lipa",
    genre: "Pop",
  },
  {
    id: 13,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "R&B",
  },
  {
    id: 14,
    title: "Radioactive",
    artist: "Imagine Dragons",
    genre: "Indie Rock",
  },
  {
    id: 15,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Pop",
  },
  {
    id: 16,
    title: "Stressed Out",
    artist: "Twenty One Pilots",
    genre: "Indie Pop",
  },
  {
    id: 17,
    title: "Happier",
    artist: "Marshmello, Bastille",
    genre: "ElectroPop",
  },
  {
    id: 18,
    title: "Feel It Still",
    artist: "Portugal. The Man",
    genre: "Indie Pop",
  },
  {
    id: 19,
    title: "Uptown Funk",
    artist: "Mark Ronson, Bruno Mars",
    genre: "Funk",
  },
  {
    id: 20,
    title: "Sucker",
    artist: "Jonas Brothers",
    genre: "Pop",
  },
];

const tempPlaylist = [
  {
    id: 100,
    title: "Neneng B",
    artist: "Nik Makino",
    genre: "Rap",
    userRating: 5,
  },
  {
    id: 200,
    title: "Babaero",
    artist: "Hev Abi",
    genre: "Hiphop",
    userRating: 3,
  },
];

function Navbar({ music }) {
  const [query, setQuery] = useState("");

  return (
    <nav className="container">
      <Logo />
      <Search setQuery={setQuery} />
      <NumResult music={music} />
    </nav>
  );
}

function Logo() {
  return <h1 style={{ textAlign: "center" }}>Music App</h1>;
}

function Search({ setQuery }) {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search songs..."
      onChange={handleChange}
    />
  );
}

function NumResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function MusicListBox({ music, addToPlaylist, playlist }) {
  return (
    <div className="container">
      <h2>Music List</h2>
      <Music music={music} addToPlaylist={addToPlaylist} playlist={playlist} />
    </div>
  );
}

function Music({ music, addToPlaylist, playlist }) {
  const isInPlaylist = (songId) => {
    return playlist.some((item) => item.id === songId);
  };

  return (
    <ul>
      {music.map((song) => (
        <li className="title" key={song.id}>
          {song.title} by {song.artist} ({song.genre}){" "}
          <button onClick={() => addToPlaylist(song)}>
            {isInPlaylist(song.id) ? "❤️" : "🖤"}
          </button>
        </li>
      ))}
    </ul>
  );
}

function PlaylistBox({ playlist }) {
  return (
    <div className="container">
      <h2>Playlist</h2>
      <Playlist playlist={playlist} />
    </div>
  );
}

function Playlist({ playlist }) {
  return (
    <ul>
      {playlist.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist}
          <p>
            <span>⭐</span>
            <span>3</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);

  const addToPlaylist = (song) => {
    const isSongInPlaylist = playlist.some((item) => item.id === song.id);

    if (!isSongInPlaylist) {
      setPlaylist([...playlist, song]);
    } else {
      console.log("This song is already in the playlist.");
    }
  };

  return (
    <div>
      <Navbar music={music} />
      <div className="container">
        <MusicListBox
          music={music}
          addToPlaylist={addToPlaylist}
          playlist={playlist} // Pass playlist here
        />
        <PlaylistBox playlist={playlist} />
      </div>
    </div>
  );
}

export default App;
