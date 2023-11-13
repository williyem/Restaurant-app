/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
  env: {
    apiKey: "AIzaSyDfHuRjvGZUKSPIUdvEwqoXmNJUsiSnCF0",
    authDomain: "restaurant-app-f19c2.firebaseapp.com",
    projectId: "restaurant-app-f19c2",
    storageBucket: "restaurant-app-f19c2.appspot.com",
    messagingSenderId: "291304040424",
    appId: "1:291304040424:web:d1df12f818b3b48b4a265d",
    measurementId: "G-W07T4YEJ89",
  },
};

module.exports = nextConfig;
