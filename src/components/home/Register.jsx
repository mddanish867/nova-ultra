import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Register = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const x = e.clientX - cursorRef.current.clientWidth / 2;
        const y = e.clientY - cursorRef.current.clientHeight / 2;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex items-center justify-center">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 border border-white/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
      />

      <div className="max-w-md w-full px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extralight tracking-[0.2em] mb-4">REGISTER</h1>
          <p className="text-sm text-white/60 font-extralight tracking-wider">
            Join the ULTRA NOVA experience
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs tracking-[0.2em] font-extralight mb-2">
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border border-white/20 px-4 py-2 text-sm font-extralight focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs tracking-[0.2em] font-extralight mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border border-white/20 px-4 py-2 text-sm font-extralight focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs tracking-[0.2em] font-extralight mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-transparent border border-white/20 px-4 py-2 text-sm font-extralight focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-xs tracking-[0.2em] font-extralight mb-2">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full bg-transparent border border-white/20 px-4 py-2 text-sm font-extralight focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-xs text-white/60 font-extralight">
              I agree to the <a href="#" className="text-white hover:text-white/80 transition-colors duration-300">Terms of Service</a> and <a href="#" className="text-white hover:text-white/80 transition-colors duration-300">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full group relative px-6 py-3 overflow-hidden"
          >
            <span className="relative z-10 text-xs tracking-[0.2em] font-extralight transition-colors duration-500 group-hover:text-black flex items-center justify-center">
              REGISTER <ArrowRight className="ml-2 w-4 h-4" />
            </span>
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-white/60 font-extralight">
            Already have an account?{' '}
            <a href="/login" className="text-white hover:text-white/80 transition-colors duration-300">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

