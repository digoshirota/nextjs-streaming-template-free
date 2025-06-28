// app/components/FreeTrialSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

/*
  FreeTrialSection Component
  --------------------------
  - Next.js 15 (Client Component)
  - Tailwind CSS for styling
  - shadcn/ui Button for the call-to-action
  - Comments in English
*/

export default function FreeTrialSection() {
  return (
    <section
      className="
        relative
        bg-[url('/images/movies2.png')]  /* placeholder background URL */
        bg-cover
        bg-center
        rounded-lg
        overflow-hidden
        
      "
    >
      {/* semi-opaque black overlay above the background image */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content container above the overlay */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between text-white min-h-[350px]">
        {/* headline and subtext */}
        <div className="text-left space-y-4">
          <h2 className="text-3xl font-bold">
            Start your free trial today!
          </h2>
          <p className="text-gray-200">
            This is a clear and concise call to action that encourages users to sign up for a free trial of VibeCast.
          </p>
        </div>

        {/* call-to-action button */}
        <div className="mt-6 md:mt-0">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
            Start a Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
