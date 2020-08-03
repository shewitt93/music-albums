import React from 'react'
import './App.css'

class App extends React.Component {
    render() {
        const studioGhibli = 'Studio Ghibli'

        const Genre = "Japanese Classical"

        const saDescription = "The film stars Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takeshi Naito, Yasuko Sawaguchi, Tsunehiko Kamijō, Takehiko Ono, and Bunta Sugawara. Spirited Away tells the story of Chihiro Ogino (Hiiragi), a 10-year-old girl who, while moving to a new neighbourhood, enters the world of Kami (spirits) of Japanese Shinto folklore.After her parents are turned into pigs by the witch Yubaba (Natsuki), Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her parents and return to the human world."

        const hmcDescription = "The story is set in a fictional kingdom where both magic and early 20th-century technology are prevalent, against the backdrop of a war with another kingdom. The film tells the story of a young, content milliner named Sophie who is turned into an old woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king."

        const mntDescription = "In 1958 Japan, university professor Tatsuo Kusakabe and his two daughters, Satsuki and Mei, move into an old house to be closer to the hospital where the girls' mother, Yasuko, is recovering from a long-term illness. The house is inhabited by tiny creatures called susuwatari—small, dark, dust-like house spirits seen when moving from light to dark places.When the girls become comfortable in their new house, the soot spirits leave to find another empty house."

        const artists = [
            {
                id: 0,
                name: 'Merry-go-round of Life',
                album: "Howl's Moving Castle"
            },
            { 
                id: 1,
                name: 'The Merry Light Cavalrymen',
                album: "Howl's Moving Castle"
            },
            { 
                id: 2,
                name: 'A Walk in the Skies',
                album: "Howl's Moving Castle"
            },
            { 
                id: 3,
                name: 'Witch of the Waste',
                album: "Howl's Moving Castle"
            },
            {
                id: 4,
                name: 'One Summer Day',
                album: "Spirited Away"
            },
            {
                id: 5,
                name: 'A Road to Somewhere',
                album: "Spirited Away"
            },
            {
                id: 6,
                name: 'The Empty Restaurant',
                album: "Spirited Away"
            },
            {
                id: 7,
                name: 'Nighttime Coming',
                album: "Spirited Away"
            },
            {
                id: 8,
                name: 'My Neighbour Totoro',
                album: "My Neighbour Totoro"
            },
            {
                id: 9,
                name: 'The Path of Wind',
                album: "My Neighbour Totoro"
            },
            {
                id: 10,
                name: 'A Lost Child',
                album: "My Neighbour Totoro"
            },
            {
                id: 11,
                name: 'Cat Bus',
                album: "My Neighbour Totoro"
            }
          ]
        
          const albumArtStyle = {
              width: "200px",
              height: "200px"
          }
          

      return (
          <main>

            <h1>{studioGhibli}</h1>
            <h4>{Genre}</h4>
            <h2>Albums</h2>

            <div className="all-albums">
            <div className="album-art">
                <img src="https://lh3.googleusercontent.com/proxy/lFPaLhSTJwCYyOY9rE5ACiV_WZMxltxV9fy8LB8CRlORJ9zjw2KsV7kRHTYT5UDieiW0uCJefDDcsCftEKgXKmJY-Q7Tcy24oNzMLyg3sNe2H06zcbrazk_7-J-tCptepc2L1a6Fw8s" style={albumArtStyle}></img>
                <figcaption>Spirited Away</figcaption>
            </div>

            <div className="album-art">
                <img src="https://data.whicdn.com/images/81610765/original.gif" style={albumArtStyle}></img>
                <figcaption>Howl's Moving Castle</figcaption>
            </div>

            <div className="album-art">
                <img src="https://data.whicdn.com/images/319857575/original.gif" style={albumArtStyle}></img>
                <figcaption>My Neighbour Totoro</figcaption>
            </div>
            </div>

            <div className="all-album-info">

                <div className="album">
                    <h3>Spirited Away</h3>
                    <p>{saDescription}</p>
                </div>

                <div className="album">
                    <h3>Howl's Moving Castle</h3>
                    <p>{hmcDescription}</p>
                </div>

                <div className="album">
                    <h3>My Neighbour Totoro</h3>
                    <p>{mntDescription}</p>
                </div>

            </div>

            <div className="songs-list">

                <div className="song">
                    <span className="songTitle">Songs</span>
                        <ul>
                            {artists.filter(name => name.album === "Spirited Away").map(filteredName => (
                                <li>
                                    {filteredName.name}
                                </li>
                            ))}
                        </ul>
                </div>

                <div className="song">
                    <span className="songTitle">Songs</span>
                        <ul>
                            {artists.filter(name => name.album === "Howl's Moving Castle").map(filteredName => (
                                <li>
                                    {filteredName.name}
                                </li>
                            ))}
                        </ul>
                </div>

                <div className="song">
                    <span className="songTitle">Songs</span>
                        <ul>
                            {artists.filter(name => name.album === "My Neighbour Totoro").map(filteredName => (
                                <li>
                                    {filteredName.name}
                                </li>
                            ))}
                        </ul>
                </div>

            </div>
        
        </main>

      )
    }
  }

export default App