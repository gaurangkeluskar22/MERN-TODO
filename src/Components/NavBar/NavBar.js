import { useNavigate } from "react-router-dom"


const NavBar = () => {

    const navigate = useNavigate()

    const handleSignOut = () => {
        localStorage.clear()
        navigate('/login')
    }

    const handleWriteThought = () => {
        navigate('/create')
    }

    const handleHome = () => {
        navigate('/home')
    }

    const handleMyThoughts = () => {
        navigate('/myThoughts')
    }

    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100vw', alignItems:'center', alignContent:'center', background:'#cde'}}>
        <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
        <h1 style={{margin: '10px 30px'}} onClick={handleHome}>Daily Thoughts</h1>
        <p style={{marginRight:' 30px', fontSize:'17px'}} onClick={handleWriteThought}>Write Thought</p>
        <p style={{fontSize:'17px'}} onClick={handleMyThoughts}>My Thoughts</p>
        </div>
        <button style={{margin:'10px 30px', background:'#def', padding:'10px'}} onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default NavBar;