import EmojiGame from './components/EmojiGame';
import './App.css';
const emojiList=[
  {
    id:1,
    imgName:"chill",
    imgUrl:"https://freepngimg.com/thumb/emoji/1-2-wink-emoji-png-thumb.png"
  },
  {
    id:2,
    imgName:"cool",
    imgUrl:"https://freepngimg.com/thumb/emoji/4-2-smiling-face-with-sunglasses-cool-emoji-png-thumb.png"
  },
  {
    id:3,
    imgName:"blash",
    imgUrl:"https://freepngimg.com/thumb/emoji/3-2-love-hearts-eyes-emoji-png-thumb.png"
  },
  {
    id:4,
    imgName:"ring smile",
    imgUrl:"https://freepngimg.com/thumb/emoji/6-2-angel-blushing-smile-emoji-png-thumb.png"
  },
  {
    id:5,
    imgName:"toungeout",
    imgUrl:"https://freepngimg.com/thumb/emoji/9-2-tongue-out-emoji-png-thumb.png"
  },
  {
    id:6,
    imgName:"deep cry",
    imgUrl:"https://freepngimg.com/thumb/emoji/11-2-loudly-crying-emoji-png-thumb.png"
  },
  {
    id:7,
    imgName:"exclamation",
    imgUrl:"https://freepngimg.com/thumb/emoji/8-2-fearful-emoji-png-thumb.png"
  },
  {
    id:8,
    imgName:"sorrow",
    imgUrl:"https://freepngimg.com/thumb/emoji/10-2-unamused-face-emoji-png-thumb.png"
  },
  {
    id:9,
    imgName:"smile",
    imgUrl:"https://freepngimg.com/thumb/emoji/47416-2-smiley-image-free-png-hq-thumb.png"
  },
  {
    id:10,
    imgName:"fear",
    imgUrl:"https://freepngimg.com/thumb/emoji/73743-emoticon-anger-whatsapp-smiley-emoji-free-png-hq-thumb.png"
  },
  {
    id:11,
    imgName:"sick",
    imgUrl:"https://freepngimg.com/thumb/emoji/7-2-sad-crying-emoji-png-thumb.png"
  },
  {
    id:12,
    imgName:"kiss",
    imgUrl:"https://freepngimg.com/thumb/emoji/47418-4-smiley-free-clipart-hd-thumb.png"
  },
]
function App() {
  return (
    <div>
     <EmojiGame emojiList={emojiList}/>
    </div>
  );
}

export default App;

