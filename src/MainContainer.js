import React, {Component} from 'react';
import PersonNameApi from './PersonNameApi';
import './MainContainer.css'

class MainContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            person: null,
            loading: true
        }

        // this.ajaxFunctionWeather = this.ajaxFunctionWeather.bind(this);
    }

 async componentDidMount() {
      const response = await fetch("https://api.randomuser.me/")
      const data =  await response.json()

      this.setState({
        person: data.results[0], loading: false
      })
  }

    render() { 
        return (
            <div className="mainContainer">
               { 
                    this.state.loading || !this.state.person ? (
                        <div>loading ...</div>
                    ) : (
                    <div className="card">
                        <PersonNameApi personName={this.state.person.name.first}/>
                        <div>{this.state.person.name.title}</div>
                        <div>{this.state.person.name.last}</div>
                        <img src={this.state.person.picture.large} />
                        <p>Это страница разных людей из api</p>
                        <div onClick={() => window.location.reload()} className="btn-next">&rarr;</div>
                    </div>
                    )}
            </div>
        )
    }
}

export default MainContainer;