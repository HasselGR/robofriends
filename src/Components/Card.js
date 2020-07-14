import React from 'react';
import ReactCardFlip from 'react-card-flip';
import {SocialMediaIconsReact} from 'social-media-icons-react';


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFlipped:false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        this.setState(prevState =>({isFlipped: !prevState.isFlipped}));
    }
    render(){
        return (
            <div className='flipcard tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 content-center items-center justify-center'>
                <ReactCardFlip isFlipped ={this.state.isFlipped} flipDirection ="horizontal">
                    <div  className='card-side tc' onMouseEnter={this.handleClick}>
                        <img  alt='robots' src = {`https://robohash.org/${this.props.id}?200x200`}/>
                        <div>
                            <h2>{this.props.name} </h2>
                            <p>{this.props.email}</p>
                        </div>
                    </div>
                    <div className='card-side tc ml4' onMouseLeave={this.handleClick}>
                        <h2> Contact me!</h2>
                        <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="50%" url="https://twitter.com" size="35" />
                        <span className='space'></span>
                        <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(158,113,197,1)" iconSize="5" roundness="50%" url="https//instagram.com" size="35" />
                        <span className='space'></span>
                        <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(60,40,200,1)" iconSize="5" roundness="50%" url="https://facebook.com" size="35" />
                    </div>
                </ReactCardFlip>
            </div>
        );
    }
}

export default Card;