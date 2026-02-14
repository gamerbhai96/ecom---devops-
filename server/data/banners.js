const banners = [
    {
        id: "banner-1",
        title: "Fresh Fruits & Veggies",
        subtitle: "Up to 40% OFF",
        description: "Get farm-fresh fruits and vegetables delivered in 10 minutes",
        bgColor: "linear-gradient(135deg, #0C831F 0%, #16a34a 100%)",
        textColor: "#fff",
        tag: "FRESH DEALS",
        image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=400&fit=crop"
    },
    {
        id: "banner-2",
        title: "Dairy Essentials",
        subtitle: "Starting ₹29",
        description: "Milk, curd, paneer & more at best prices",
        bgColor: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
        textColor: "#fff",
        tag: "DAILY NEEDS",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop"
    },
    {
        id: "banner-3",
        title: "Snack O'Clock",
        subtitle: "Buy 2 Get 1 Free",
        description: "Chips, namkeen, biscuits & more",
        bgColor: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
        textColor: "#fff",
        tag: "MEGA OFFER",
        image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=600&h=400&fit=crop"
    },
    {
        id: "banner-4",
        title: "Cold Drinks & Juices",
        subtitle: "Flat 30% OFF",
        description: "Beat the heat with refreshing beverages",
        bgColor: "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
        textColor: "#fff",
        tag: "COOL DEALS",
        image: "https://images.unsplash.com/photo-1544145945-f904253dc0ad?w=600&h=400&fit=crop"
    },
    {
        id: "banner-5",
        title: "Cleaning Supplies",
        subtitle: "Under ₹99",
        description: "Keep your home sparkling clean",
        bgColor: "linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)",
        textColor: "#fff",
        tag: "HOME CARE",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop"
    }
];

const deals = [
    {
        id: "deal-1",
        title: "Fruits & Vegetables",
        discount: "UP TO 40% OFF",
        image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=300&h=300&fit=crop",
        bgColor: "#E8F5E9",
        expiresIn: 7200
    },
    {
        id: "deal-2",
        title: "Dairy Products",
        discount: "UP TO 25% OFF",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
        bgColor: "#FFF3E0",
        expiresIn: 5400
    },
    {
        id: "deal-3",
        title: "Instant Food",
        discount: "BUY 2 GET 1",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=300&fit=crop",
        bgColor: "#FCE4EC",
        expiresIn: 3600
    },
    {
        id: "deal-4",
        title: "Chocolates",
        discount: "FLAT 30% OFF",
        image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300&h=300&fit=crop",
        bgColor: "#F3E5F5",
        expiresIn: 9000
    }
];

module.exports = { banners, deals };
