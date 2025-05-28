import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage.jsx";
import withPageLoader from "./Components/Loading/withPageLoader.jsx";
import Header from "./Components/Header/Header.jsx";
// Lazy loaded pages
const OurCollection = lazy(() => import("./Pages/OurCollection/OurCollection.jsx"));
const Galleryv3 = lazy(() => import("./Pages/Gallery/Galleryv3.jsx"));
const Galleryv4 = lazy(() => import("./Pages/Gallery/Galleryv4.jsx"));
const Galleryv5 = lazy(() => import("./Pages/Gallery/Galleryv5.jsx"));
const BlogPosts = lazy(() => import("./Pages/Blogs/BlogPosts.jsx"));
const BlogDetails = lazy(() => import("./Pages/Blogs/BlogDetails.jsx"));
const EnquiryForm = lazy(() => import("./Pages/EnquiryForm/EnquiryForm.jsx"));
const Aboutuspage = lazy(() => import("./Pages/AboutUs/Aboutuspage.jsx"));
const Loading = lazy(() => import("./Components/Loading/Loading.jsx"));

// Wrap with animated loader

const WrappedAboutus = withPageLoader(Aboutuspage, "About Us");
const WrappedCollection = withPageLoader(OurCollection, "Our Collection");
const WrappedGallery3 = withPageLoader(Galleryv3, "Gallery");
const WrappedGallery4 = withPageLoader(Galleryv4, "Gallery");
const WrappedGallery5 = withPageLoader(Galleryv5, "Gallery");
const WrappedBlogPosts = withPageLoader(BlogPosts, "Blog");
const WrappedBlogDetails = withPageLoader(BlogDetails, "Blog Post");
const WrappedEnquiryForm = withPageLoader(EnquiryForm, "Enquiry");
const WrappedLoading = withPageLoader(Loading, "Loading");

const Loader = () => (
  <div className="flex justify-center items-center min-h-screen bg-white">
    Loading
  </div>
);

function App() {
  return (
    <div className="min-h-screen py-0">
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Wrapped with loader animation */}
          <Route path="/Collection" element={<WrappedCollection />} />
          <Route path="/Aboutus" element={<WrappedAboutus />} />
          <Route path="/EnquiryForm" element={<WrappedEnquiryForm />} />
          {/* Removed the wrapper and added isolated for gallery */}
          {/* <Route path="/Gallery" element={<WrappedGallery3 />} /> */}
          <Route path="/Gallery" element={<Galleryv3 />} />
          <Route path="/Galleryv5" element={<WrappedGallery5 />} />
          <Route path="/Galleryv4" element={<WrappedGallery4 />} />

          <Route path="/Blog" element={<WrappedBlogPosts />} />
          <Route path="/Blog/:BlogID" element={<WrappedBlogDetails />} />

          <Route path="/loading" element={<WrappedLoading />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
