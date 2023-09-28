import './index.css';
const EmojiCard=(props)=>{
    const{emojiDetails,addEmoji}=props
    const{id,imgName,imgUrl}=emojiDetails
    const onClickedEmoji =()=>{
        addEmoji(id)
    }
    return(
        <li className="list-item">
            <button className="emoji-btn" onClick={onClickedEmoji}>
                <img src={imgUrl} alt={imgName} className="emoji"/>
            </button>
        </li>
    );
}
export default EmojiCard;