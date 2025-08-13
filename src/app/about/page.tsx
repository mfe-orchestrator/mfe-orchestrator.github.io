import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-3xl">
        <p className="text-lg mb-4">
          Welcome to our MFE (Micro Frontend) Orchestrator Hub. This platform is designed to help you manage
          and orchestrate multiple micro frontends in a seamless and efficient manner.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Mission</h2>
        <p className="mb-4">
          To simplify the development and deployment of micro frontend architectures, making it easier for teams
          to build scalable and maintainable web applications.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Easy integration of multiple micro frontends</li>
          <li>Independent deployment of frontend modules</li>
          <li>Version management for micro frontends</li>
          <li>Performance optimization</li>
          <li>Developer-friendly tools</li>
        </ul>
      </div>
    </div>
  );
}
