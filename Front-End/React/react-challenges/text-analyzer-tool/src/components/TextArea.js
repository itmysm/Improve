export default function TextArea({onGettingContent}) {
  
  return (<div className="w-8/12 my-10">
    <textarea className="w-full bg-white rounded-xl p-3 focus:outline-none" rows={10} onChange={(e) => onGettingContent(e.target.value)} />
  </div>)
}