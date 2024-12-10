
import Link from 'next/link'; 

const displayName = 'abdullah';

export default function Header() {
  
  if(displayName==null){
    return (
      <header className="sticky top-0 z-50 bg-white shadow-md p-2 flex justify-between items-center ">
        <Link href="/">
                <img className="cursor-pointer rounded-full w-15 h-10" src="/logo.jpg" alt="Company logo"/>
        </Link>
        
        
        <nav className="mx-auto lg:mx-32 flex items-center h-10 justify-center">
          <Link href="/" className='text-blue-700 font-semibold mr-10' >Home</Link>
          <Link href="/about" className='text-blue-700 font-semibold mr-10'>About</Link>
          <Link href="/Scholorships" className='text-blue-700 font-semibold mr-10'>Scholorships</Link>
          <Link href="/TrackingPage" className='text-blue-700 font-semibold mr-10'>Applications</Link>
          
        </nav>
      <div style={{height: '40px', width:'100px',display:'flex'}} >
        <Link  href="/Signup" className="text-white bg-blue-500 rounded-full p-2 mr-3" >
        <div style={{width:'60px', display:'flex', alignItems:'center', justifyContent:'center',}}>Sign Up</div>
        </Link>
        <Link href="/Login" className="text-white bg-blue-500 rounded-full p-2" >
        <div style={{width:'60px',display:'flex', alignItems:'center', justifyContent:'center'}}>
          Log in
        </div>
        </Link>
      </div>
      </header>
    )
}else{
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-2 flex justify-between items-center ">
      <Link href="/">
              <img className="cursor-pointer rounded-full w-15 h-10" src="/logo.jpg" alt="Company logo"/>
      </Link>
      
      
      <nav className="mx-auto lg:mx-32 flex items-center h-10 justify-center">
        <Link href="/" className='text-blue-700 font-semibold mr-10' >Home</Link>
        <Link href="/about" className='text-blue-700 font-semibold mr-10'>About</Link>
        <Link href="/Scholorships" className='text-blue-700 font-semibold mr-10'>Scholorships</Link>
        <Link href="/TrackingPage" className='text-blue-700 font-semibold mr-10'>Applications</Link>
        <Link href="/Admin" className='text-blue-700 font-semibold mr-10'>Admin</Link>
        
      </nav>
    <div style={{height: '40px', width:'100px',display:'flex', alignItems:'center'}} >
      <a href="" style={{color:'blue',}}>hi, {displayName}</a>
      
    </div>
    </header>
  )
}

}