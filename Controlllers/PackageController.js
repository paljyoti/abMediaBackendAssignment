import packageSchema from "../Models/PackagesSchema.js";

const mockPackages = [
  {
    _id: "1",
    title: "Golden Triangle Tour",
    description: "Delhi - Agra - Jaipur: Explore India's heritage.",
    price: "₹9999/-",
    image: "https://i.ibb.co/Wvc6DRdK/golden-temple.jpg",
  },
  {
    _id: "2",
    title: "AMAZING KERELA TOUR",
    description: "Experience the serenity of Kerala's backwaters.",
    price: "₹8499/-",
    image: "https://i.ibb.co/tpW2Lfjp/south-india.jpg",
  },
  {
    _id: "3",
    title: "KASHMIR HOLIDAY TOUR",
    description: "A thrilling road trip through the Himalayas.",
    price: "₹12999/-",
    image: "https://i.ibb.co/PZbkrZST/jammu.jpg",
  },
  {
    _id: "4",
    title: "RAJASTHAN TOUR",
    description: "A thrilling road trip through the Himalayas.",
    price: "₹12999/-",
    image: "https://i.ibb.co/j9QDMPMp/jaisalmer.jpg",
  },
  {
    _id: "5",
    title: "TRIP TO GOA",
    description: "A thrilling road trip through the Himalayas.",
    price: "₹12999/-",
    image: "https://i.ibb.co/fdFRCQvN/goa.jpg",
  },
  {
    _id: "6",
    title: "NAINITAL ESCAPE",
    description: "A thrilling road trip through the Himalayas.",
    price: "₹12999/-",
    image: "https://i.ibb.co/B55BFs1W/himalaya.jpg",
  },
];

export const getTopSellingPackages = async (req, res) => {
  try {
    return res.status(200).json(mockPackages);
  } catch (error) {
   return res.status(500).json({ message: "Failed to fetch packages", error: error.message });
  }
};
