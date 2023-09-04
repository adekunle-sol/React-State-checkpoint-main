import  { Component } from 'react';



class App extends Component {
  state = {
    person: {
      fullName: "Michael Ayinla",
      bio: "A passionate developer",
      imgSrc: "https://photos.google.com/photo/AF1QipNAJIH99H-LKTxWtgp-DjLGFr-F6C3yZp6iB9-M",
      profession: "Software Engineer"
    },
    show: false,
    timeSinceMount: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {this.state.timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
