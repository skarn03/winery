import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../Components/Header/Header';

const blogs = {
    1: {
        title: "Where Passion Meets Flavor – Uncorking Nepal’s Premium Wines",
        subtitle: "Blend of nature’s bounty and human passion, crafting wines that celebrate life’s finest moments",
        date: "12 March, 2023",
        author: "Bishal Shrestha",
        role: "Founder",
        location: "Nepal",
        rating: 4.9,
        reviews: 275,
        bannerImage: "https://wallpapercave.com/wp/wp4775833.jpg",
        authorImage: "https://images.squarespace-cdn.com/content/v1/541cbc80e4b0a0d620181b43/1627615168644-W6777ORZCGWHGFBRA77V/natalie+maclean.jpeg?format=1000w",
        sections: [
            {
                title: "Founding Vision",
                content: "United Winery was founded on 2078/04/25 (Nepali calendar) by Bishal Shrestha (Chairman) and Birat Shrestha (Director). With over 25 to 30 years of combined experience in the beverage industry, they aimed to revolutionize Nepal’s wine market by producing high-quality, premium wines that cater to the evolving tastes of Nepali consumers."
            },
            {
                title: "The Genesis of the Idea",
                content: "The founders recognized a growing demand for premium wines in Nepal, driven by the increasing culture of socializing and gastronomy, especially among the younger generation. They saw an opportunity to fill a gap in the market by offering locally produced wines that could compete with imported brands."
            },
            {
                title: "Setting Up the Winery",
                content: "The founders began by conducting thorough research and planning, ensuring that the winery would be equipped with modern technology and facilities to produce premium wines. The location in Godawari was chosen for its favorable climate, which is conducive to wine production, and its accessibility to resources and talent."
            },
            {
                title: "The Team Behind the Vision",
                content: "United Winery’s success is driven by a team of experienced professionals. Milan Sharma, a marketing expert with over 25 years of experience, leads the company’s marketing campaigns. Dr. Bijay Mohan Mishra, a seasoned chemist with 35 years of experience, ensures the wines' exceptional taste and quality."
            },
            {
                title: "Product Portfolio",
                content: "The company offers a diverse range of fine wines, including The Rising Royals: A line of sweet wines, including Sweet Red Wine, Sweet White Wine, and Zinfandel Rosé Sweet Wine."
            },
            {
                title: "Future Plans",
                content: "United Winery is committed to innovation and expansion. The company plans to broaden its product range and explore export opportunities, aiming to become a significant player in Nepal’s wine industry while celebrating the country’s rich culture and heritage."
            }
        ]
    },
    2: {
        title: "The Art of Wine Pairing – A Journey Through Flavors",
        subtitle: "Unlocking the secrets of matching food and wine for the perfect experience",
        date: "28 May, 2023",
        author: "Sophia Carter",
        role: "Sommelier",
        location: "France",
        rating: 4.8,
        reviews: 320,
        bannerImage: "https://media.istockphoto.com/id/1164052842/photo/sunrise-with-morning-mist-over-scenic-vineyard-in-california.jpg?s=612x612&w=0&k=20&c=gxtIUd5lkOjp69yRSHhMYQmQ9pIJZZirDCAMULOOtqY=",
        authorImage: "https://bonitasprings.floridaweekly.com/wp-content/uploads/images/2025-03-06/27p2.jpg",
        sections: [
            {
                title: "The Science Behind Pairing",
                content: "Wine and food pairing is an art that balances flavors, acidity, and textures to create a harmonious experience. The right combination enhances both the dish and the wine, making each bite and sip memorable."
            },
            {
                title: "Classic Pairings to Try",
                content: "From the timeless combination of Cabernet Sauvignon with steak to the elegant match of Sauvignon Blanc with seafood, discovering classic wine pairings can elevate your dining experience."
            }
        ]
    },
    3: {
        title: "Sustainable Winemaking – A Greener Future for Vineyards",
        subtitle: "How organic and biodynamic wines are shaping the future of winemaking",
        date: "10 August, 2023",
        author: "Luca Romano",
        role: "Winemaker",
        location: "Italy",
        rating: 4.9,
        reviews: 290,
        bannerImage: "https://chappellet.com/wp-content/uploads/2022/05/lake-hennessey.jpg",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTsvWfpe2Aht_nzxluAsK-0UvDggW1iqVeQ&s",
        sections: [
            {
                title: "What is Sustainable Winemaking?",
                content: "Sustainable winemaking involves eco-friendly farming techniques, reduced chemical use, and conservation practices to protect the environment while producing high-quality wines."
            },
            {
                title: "The Growth of Organic Wines",
                content: "Organic wines are becoming increasingly popular as consumers look for healthier and more environmentally responsible options. These wines are produced without synthetic pesticides or artificial additives."
            }
        ]
    },
    4: {
        title: "The Rise of Rosé – From Summer Drink to Year-Round Favorite",
        subtitle: "Why rosé wine has become a staple beyond the warm months",
        date: "5 November, 2023",
        author: "Emma Davis",
        role: "Wine Critic",
        location: "USA",
        rating: 4.7,
        reviews: 315,
        bannerImage: "https://www.etudewines.com/cdn/shop/files/ETU_Winery1_HR_1.jpg?v=1720476260&width=3840",
        authorImage: "https://m.media-amazon.com/images/S/amzn-author-media-prod/pvqjgpk32li63tlm4pkr8s65qm._SY600_.jpg",
        sections: [
            {
                title: "The Popularity Boom",
                content: "Rosé wine has transitioned from a seasonal favorite to a year-round staple, loved for its refreshing taste and versatility. Its growing demand has led to innovative styles and blends worldwide."
            },
            {
                title: "How to Choose the Best Rosé",
                content: "From pale Provence-style rosés to bolder Spanish varieties, understanding the differences in production methods and grape selection can help you find the perfect rosé for any occasion."
            }
        ]
    },
    5: {
        title: "Aged to Perfection – The Secrets of Cellaring Wine",
        subtitle: "Understanding the impact of aging on fine wines and how to build your own wine cellar",
        date: "18 January, 2024",
        author: "Benjamin Wilson",
        role: "Wine Collector",
        location: "Australia",
        rating: 5.0,
        reviews: 280,
        bannerImage: "https://images.squarespace-cdn.com/content/v1/5f84e34de484392c6756ba7d/e5e2aaf5-e1eb-4a41-924a-2a5dee6ac20a/Wineries+near+Washington+DC",
        authorImage: "https://m.media-amazon.com/images/S/amzn-author-media-prod/gkae7lppk5betd4q19e2p0kmgo._SY600_.jpg",
        sections: [
            {
                title: "Why Age Wine?",
                content: "Aging allows certain wines to develop complexity, enhancing their flavors and textures over time. While not all wines benefit from aging, premium reds and some whites can evolve beautifully."
            },
            {
                title: "How to Store Wine Properly",
                content: "Temperature, humidity, and bottle positioning play a crucial role in maintaining wine quality over the years. A well-structured cellar ensures wines mature under optimal conditions."
            }
        ]
    }
};

const BlogDetails = () => {
    const { BlogID } = useParams();
    const blog = blogs[parseInt(BlogID)];

    if (!blog) {
        return <div className="text-center text-2xl mt-10">Blog not found</div>;
    }

    return (
        <motion.div className="relative text-gray-800 font-kollektif bg-[#f8f5f0] min-h-screen">
            {/* Header */}


            {/* Hero Section with Proper Banner Layering */}
            <motion.div className="relative w-full h-[560px] overflow-hidden">
                <motion.img
                    src={blog.bannerImage}
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 z-10">
                    <motion.h1 
                        className="text-5xl font-extrabold max-w-3xl leading-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    >
                        {blog.title}
                    </motion.h1>
                </div>
            </motion.div>

            {/* Blog Content */}
            <motion.div className="relative max-w-8xl 2xl:max-w-[1650px] mx-auto bg-white rounded-xl shadow-lg -mt-20 p-10 z-10">
                {/* Author Section with Proper Alignment */}
                <motion.div className="flex flex-col md:flex-row md:items-center border-b pb-6 border-gray-300 space-y-4 md:space-y-0">
                    {/* Left - Author Info */}
                    <div className="flex items-center space-x-5 md:w-[30%]">
                        <motion.img 
                            src={blog.authorImage} 
                            alt="Author"
                            className="w-16 h-16 rounded-full border-2 border-gray-400 shadow-md"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{blog.author}</h3>
                            <p className="text-gray-500 text-lg">{blog.role}</p>
                        </div>
                    </div>

                    {/* Right - Subtitle */}
                    <motion.p 
                        className="md:w-2/3 text-xl text-gray-700 font-medium leading-relaxed"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {blog.subtitle}
                    </motion.p>
                </motion.div>

                {/* Main Content with Scroll Animations */}
                <div className="space-y-12 mt-10">
                    {blog.sections.map((section, index) => (
                        <motion.div 
                            key={index} 
                            className="flex flex-col space-y-2 md:flex-row md:items-start md:space-x-6 pb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                        >
                            <h4 className="md:w-1/4 text-xl font-semibold text-yellow-700">{section.title}</h4>
                            <p className="md:w-3/4 text-lg text-gray-700 leading-relaxed border-l-4 border-yellow-500 pl-6">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BlogDetails;
