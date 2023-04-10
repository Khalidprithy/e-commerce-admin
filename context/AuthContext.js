import Cookies from 'js-cookie';
import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const secret = process.env.SECRET_TOKEN;

export default function middleware(req) {
  if (typeof window === 'undefined') {
    return NextResponse.next();
  }

  const userToken = Cookies.get('userToken');
  const url = req.url;

  if (url.includes('/admin')) {
    if (!userToken) {
      return NextResponse.redirect('/login');
    }

    try {
      verify(userToken, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect('/login');
    }
  }

  return NextResponse.next();
}
