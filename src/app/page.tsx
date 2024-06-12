
import Link from "next/link";
export default function Home() {




  return (
   <main>
        <ul>
          <li>
          <Link href={'/login'}>
        Login
        </Link>
          </li>
          <li>
          <Link href={'/register'}>
        register
        </Link>
          </li>
        </ul>
       

      
        
   </main>
  );
}
