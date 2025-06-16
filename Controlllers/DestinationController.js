import destinationSchema from "../Models/DestinationSchema.js";

const mockDestinations = [
  {
    _id: "1",
    city: "Himachal pradesh",
    description: "A beautiful hill station in Himachal Pradesh",
    price: "₹5999/-",
    image: "https://i.ibb.co/Y4p0T8Bs/himachal.jpg",
  },
  {
    _id: "2",
    city: "Jammu & Kashmir",
    description: "Paradise on Earth",
    price: "₹4999/-",
    image: "https://i.ibb.co/PZbkrZST/jammu.jpg",
  },
  {
    _id: "3",
    city: "Goa",
    description: "Famous for beaches and nightlife",
    price: "₹6999/-",
    image: "https://i.ibb.co/fdFRCQvN/goa.jpg",
  },
   {
    _id: "4",
    city: "ASSAM",
    description: "Famous for beaches and nightlife",
    price: "₹6999/-",
    image: "https://i.ibb.co/Hf3RkS0x/ASSAM.jpg",
  },
   {
    _id: "5",
    city: "MAHARASHTRA",
    description: "Famous for beaches and nightlife",
    price: "₹6999/-",
    image: "https://i.ibb.co/1fW6RgMg/mumbai.jpg",
  },
   {
    _id: "6",
    city: "KERELA",
    description: "Famous for beaches and nightlife",
    price: "₹6999/-",
    image: "https://i.ibb.co/HDrytB1x/kerala.jpg",
  },
];

const getDestinations = async (req, res) => {
  try {
    return res.status(200).json(mockDestinations);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch destinations", error: error.message });
  }
};

export { getDestinations };
