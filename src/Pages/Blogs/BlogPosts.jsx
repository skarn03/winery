import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import wineGlass from './Wine.webp'; // Replace with actual image
import wineTank from './WineSteel.webp'; // Replace with actual image
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
const BlogPosts = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const navigate = useNavigate();

    const handleBlogClick = (blogID) => {
        navigate(`/blog/${blogID}`);
    };
    return (
        <div>
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="mx-auto p-6 font-kollektif bg-[#FFFFE3] w-screen min-h-screen">

                <h2 className="text-center text-2xl font-bold mb-14 mt-40">Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* First Row - Wine Glass takes half screen, Two Wine Tanks take the other half */}
                    <motion.div
                        className="relative rounded-xl overflow-hidden shadow-lg"
                        onClick={() => handleBlogClick(1)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    >
                        <img src={wineGlass} alt="Featured Post" className="w-full h-96 md:h-[26rem] object-cover rounded-md" />
                        <div className="absolute inset-0  p-6 text-white flex flex-col justify-end">
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <span className="text-xs  bg-transparent px-3 py-1 rounded-full border border-[#DDF1FF] text-[#DDF1FF]">Product Updates</span>
                                <span className="text-xs bg-transparent px-3 py-1 rounded-full border border-[#DDF1FF] text-[#DDF1FF]">22 Feb, 2025</span>
                            </div>
                            <h3 className="text-[32px] font-bold text-[#DDF1FF]">About our wines</h3>
                            <p className="text-[20px] text-[#DDF1FF] mt-2">This is a great wine. Fine for its exquisite taste.<br></br> Taste the wine now.</p>
                            <div className="flex justify-end mt-4">
                                <span className=" text-black p-3 rounded-full flex items-center justify-center w-10 h-10 shadow-lg">➜</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg"
                            onClick={() => handleBlogClick(2)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        >
                            <img src={wineTank} alt="Post Image" className="w-full h-96 md:h-[26rem] object-cover rounded-md" />
                        </motion.div>
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg"
                            onClick={() => handleBlogClick(3)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        >
                            <img src={wineTank} alt="Post Image" className="w-full h-96 md:h-[26rem] object-cover rounded-md" />
                        </motion.div>
                    </div>

                    {/* Second Row - Reversed: Two Wine Tanks first, then Wine Glass */}
                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handleBlogClick(4)}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        >
                            <img src={wineTank} alt="Post Image" className="w-full h-96 md:h-[26rem] object-cover rounded-md" />
                        </motion.div>
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg"
                            onClick={() => handleBlogClick(5)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        >
                            <img src={wineTank} alt="Post Image" className="w-full h-96 md:h-[26rem] object-cover rounded-md" />
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative rounded-xl overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleBlogClick(6)}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    >
                        <img src={wineGlass} alt="Featured Post" className="w-full h-96 md:h-[26rem] object-cover rounded-md" />
                        <div className="absolute inset-0  p-6 text-white flex flex-col justify-end">
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <span className="text-xs  bg-transparent px-3 py-1 rounded-full border border-[#DDF1FF] text-[#DDF1FF]">Product Updates</span>
                                <span className="text-xs bg-transparent px-3 py-1 rounded-full border border-[#DDF1FF] text-[#DDF1FF]">22 Feb, 2025</span>
                            </div>
                            <h3 className="text-[32px] font-bold text-[#DDF1FF]">About our wines</h3>
                            <p className="text-[20px] text-[#DDF1FF] mt-2">This is a great wine. Fine for its exquisite taste.<br></br> Taste the wine now.</p>

                            <div className="flex justify-end mt-4">
                                <span className=" text-black p-3 rounded-full flex items-center justify-center w-10 h-10 shadow-lg">➜</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default BlogPosts;