import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  
  const {pathname} = request.nextUrl
  const sessionToken = request.cookies.get('sessionToken')?.value
  return NextResponse.next()

  //return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login','/regsister','/me'
  ]
}