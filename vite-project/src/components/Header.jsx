
const Header = () => {
    let CustomCss="code"
    const isloggedin = true
    const greeting = isloggedin ? "Welcome User" : "Please Login" 
    const listItems = ["apple", "banana", "mango", "orange"]
  return (
    <div>
      <h1 className="banner">My Very First Project</h1>
      <p>This is a text of my first Project</p>
      <p className={CustomCss} style={{textAlign:"center",fonrStyle:"italic"}}>25+45 = {25+45}</p>

      {/* Jsx with conditional Rendering */}
      <p>{greeting}</p>
      {/* Jsx List */}
<ul>
    {listItems.map((item,index)=>(<li key={index}>{item}</li>))}
</ul>
    </div>
  )
}

export default Header
