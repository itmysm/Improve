export default function Info(props) {
  const regex = /[a-zA-Z0-9\u0600-\u06FF]/; // Regex to match letter, number, or Persian letter

  const longestWord = () => {
    let word = ''
    
    if (!regex.test(props.content)) return '-'
    console.log(props.content.replace('\n', ' '));
    props.content.replaceAll('\n', ' ').split(' ').forEach(el => {
      if (el.length > word.length) {
        return word = el
      }
    });

    return word
  }

  const averageRead = () => {
    if (!regex.test(props.content)) return 0
    return Math.round(props.content.split('').length / 600)
  }
  return (<div className="flex items-center justify-evenly w-8/12 bg-white rounded-xl py-5 px-10">
    <div className="flex items-center justify-center">
      <p className="">Average to Read:</p>
      <p className="font-semibold ml-2">{averageRead()} min</p>
    </div>

    <div className="flex items-center justify-center">
      <p className="">Longest word:</p>
      <p className="font-semibold ml-2">{longestWord()}</p>
    </div>
  </div>)
}