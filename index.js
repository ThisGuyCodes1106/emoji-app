const myEmojis = ["👨‍💻", "⛷", "🍲", "☕"]
const pushButton = document.getElementById("push-btn")
const unshiftButton = document.getElementById("unshift-btn")
const shiftButton = document.getElementById("shift-btn")
const popButton = document.getElementById("pop-btn")
const emojiInput = document.getElementById("emoji-input")

const emojiContainer = document.getElementById("emojiContainer")

function renderEmojis() {
  emojiContainer.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++) {
      emojiContainer.innerHTML += ("<span>" + myEmojis[i] + "</span>")
  }
}

renderEmojis()

unshiftButton.addEventListener("click", function() {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})

pushButton.addEventListener("click", function() {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})

shiftButton.addEventListener("click", function() {
    myEmojis.shift()
    emojiInput.value = ""
    renderEmojis()
})

popButton.addEventListener("click", function() {
    myEmojis.pop()
    emojiInput.value = ""
    renderEmojis()
})


//other way - rendering Emojis

// const myEmojis = ["👨‍💻", "⛷", "🍲"]
// const emojiContainer = document.getElementById("emojiContainer")
//
// for (let i = 0; i < myEmojis.length; i++) {
//     // write your code here
//     const emoji = document.createElement('span')
//     emoji.textContent = myEmojis[i]
//     emojiContainer.append(emoji)
// }
