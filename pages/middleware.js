import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const secret = process.env.SECRET_TOKEN;

export default function middleware(req) {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const jwt = localStorage.getItem('userToken');
    const url = req.url;

    if (url.includes('/admin')) {
      if (jwt === undefined) {
        return NextResponse.redirect('/login');
      }
      try {
        verify(jwt, secret);
        return NextResponse.next();
      } catch (error) {
        return NextResponse.redirect('/login');
      }
    }
  }
}
