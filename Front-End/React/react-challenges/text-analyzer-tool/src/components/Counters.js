export default function Counter(props) {
  const regex = /[a-zA-Z0-9\u0600-\u06FF]/; // Regex to match letter, number, or Persian letter

  const sentences = () => {
    if (!regex.test(props.content)) return 0
    return props.content.split('.').length - 1
  }

  const words = () => {
    if (!regex.test(props.content)) return 0
    return props.content.split(' ').length
  }

  const paragraphs = () => {
    return 0
  }

  const chars = () => {
    if (!regex.test(props.content)) return 0
    return props.content.split('').length
  }

  return (<div className="flex items-center justify-between w-8/12 bg-white rounded-xl py-5 px-10">
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg">sentences</p>
      <p className="text-lg font-semibold">{sentences()}</p>
    </div>

    <div className="flex flex-col items-center justify-center">
      <p className="text-lg">paragraphs</p>
      <p className="text-lg font-semibold">{paragraphs()}</p>
    </div>

    <div className="flex flex-col items-center justify-center">
      <p className="text-lg">words</p>
      <p className="text-lg font-semibold">{words()}</p>
    </div>

    <div className="flex flex-col items-center justify-center">
      <p className="text-lg">chars</p>
      <p className="text-lg font-semibold">{chars()}</p>
    </div>
  </div>)
}