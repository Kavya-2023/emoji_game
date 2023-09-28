import { Component } from "react";
import './index.css'
import WinorLoseCard from '../WinorLoseCard'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
class EmojiGame extends Component{
    state={
        status:true,
        topScore:0,
        selectedList:[],
    }
    resetGame=()=>{
        this.setState({selectedList:[],
        status:true})
    }
    getScoreCard=()=>{
        const{emojiList}=this.props
        const{selectedList}=this.state
        const isWin= selectedList.length === emojiList.length
        return(
            <WinorLoseCard
            isWin={isWin}
            score={selectedList.length}
            onPlayAgain={this.resetGame}/>
        )
    }
    displaytopScore=(cScore)=>{
        const{topScore}=this.state
        let newScore=topScore

        if(cScore>topScore){
            newScore=cScore
        }
        this.setState({topScore:newScore,status:false})
    }
    addEmoji=(id)=>{
        const{selectedList}=this.state
        const{emojiList}=this.props
        const isPresent=selectedList.includes(id)
        const sLength=selectedList.length
        if(isPresent){
            this.displaytopScore(sLength)
        }
        else{
            if(emojiList.length-1 === selectedList.length){
                this.displaytopScore(sLength)
            }
            else{
                this.setState(prevState=>({
                    selectedList : [...prevState.selectedList,id],
                }))
            }
        }
    }
    getShuffleList=()=>{
        const {emojiList}=this.props
        return(
            emojiList.sort(()=> Math.random()-0.5)
        )
    }
    displayEmojiList=()=>{
        const shuffleList=this.getShuffleList()
        return(
            <ul className="list-container">
                {
                    shuffleList.map(emoji=>(
                        <EmojiCard
                        id={emoji.id}
                        emojiDetails={emoji}
                        addEmoji={this.addEmoji}
                        />
                    ))
                }
            </ul>
        )
    }
    render(){
        const{selectedList,topScore,status}=this.state
        return(
            <div className="bg-container">
                <NavBar 
                score={selectedList.length}
                status={status}
                topScore={topScore}
                />
                <div>
                    {status ? this.displayEmojiList() : this.getScoreCard()}
                </div>
            </div>
        )
    }
}
export default EmojiGame