import './Navbar.css'

function Navbar(){
  return (
   <div className='nav'>
    <div className='nav-logo'>Domain Expansion</div>
    <ul className='nav-menu'>
        <li className='home'>Home</li>
        <li className='characters'>Characters</li>
        <li className='ability'>Ability</li>
        <li className='strength'>Strength</li>
    </ul>
   </div>
  )
}

export default Navbar