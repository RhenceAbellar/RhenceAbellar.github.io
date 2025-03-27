const menuItems = {
    latte: { 
        title: "Creamy Latte", 
        image: "https://img.freepik.com/premium-photo/enjoying-creamy-latte-with-beautiful-latte-art-cozy-cafe-setting-generative-ai_437323-32509.jpg",
        description: "A smooth and creamy blend of rich espresso and perfectly steamed milk, topped with delicate foam. A classic café favorite that provides a comforting balance between bold coffee and velvety milk.",
        price: "₱150"
    },
    croissant: { 
        title: "Buttery Croissant", 
        image: "https://www.lalevain.com/wp-content/uploads/2021/11/Xsant.jpg",
        description: "A golden, flaky French pastry with layers of buttery goodness. Perfectly crisp on the outside and soft on the inside, this classic treat is best enjoyed with a cup of coffee or tea.",
        price: "₱120"
    },
    pancake: { 
        title: "Fluffy Pancakes", 
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/06/FluffyJapanesePancakes-e6d7773.jpg",
        description: "Thick, soft, and fluffy pancakes stacked to perfection, served with a drizzle of maple syrup and a pat of melting butter. A breakfast favorite that satisfies every sweet tooth.",
        price: "₱180"
    },
    matcha: { 
        title: "Matcha Latte", 
        image: "https://i0.wp.com/sylviawakana.com/wp-content/uploads/2020/04/Dalgona2-1.jpg?fit=750%2C563&ssl=1",
        description: "A harmonious blend of high-quality matcha green tea, steamed milk, and a hint of sweetness. Rich in antioxidants and packed with earthy flavors, this latte is both energizing and soothing.",
        price: "₱170"
    },
    chocolate: { 
        title: "Chocolate Mousse", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotYv1Eij9JE3cLebed_ta3cl9yVi-TJX_ww&s",
        description: "An indulgent and velvety chocolate dessert made with smooth dark chocolate, whipped cream, and a hint of vanilla. A rich and creamy delight for chocolate lovers.",
        price: "₱200"
    },
    strawberry: { 
        title: "Strawberry Frappuccino", 
        image: "https://iambaker.net/wp-content/uploads/2021/02/straw-frap-1.jpg",
        description: "A refreshing blend of fresh strawberries, milk, and ice, topped with whipped cream. This fruity and creamy frappe is the perfect balance of sweetness and freshness.",
        price: "₱160"
    }
};

function openPopup(menuItem) {
    document.getElementById("popup-title").innerText = menuItems[menuItem].title;
    document.getElementById("popup-image").src = menuItems[menuItem].image;
    document.getElementById("popup-description").innerText = menuItems[menuItem].description;
    document.getElementById("popup-price").innerText = "Price: " + menuItems[menuItem].price;
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}






