export function createProduct(productJSON){
    for(let i=0; i<productJSON.length; i++){
        const content = document.createElement("div");
        content.className = "content";
    
        const contentDetails = document.createElement("div");
        contentDetails.className = "content-details"
    
        //content-img
        const contentImg = document.createElement("div");
        contentImg.className = "content-img";
    
        const img = document.createElement("img");
        img.src = productJSON[i].image.url;
        img.alt = productJSON[i].image.alt;
        img.height = productJSON[i].image.height;
        img.width = productJSON[i].image.width;
    
        const checkbox = document.createElement("div");
        checkbox.className = "checkbox";
    
        const addToCart = document.createElement("input");
        addToCart.type = "checkbox";
        addToCart.id = "addToCart";
        addToCart.name = "addToCart";
        addToCart.value = i;
        addToCart.onclick = addToCartFunction;
    
        const addToCartLabel = document.createElement("label");
        addToCartLabel.htmlFor = "addToCart";
        addToCartLabel.innerHTML = "Add To Cart";
    
        const br = document.createElement("br");
    
        const addToCompare = document.createElement("input");
        addToCompare.type = "checkbox";
        addToCompare.id = "addToCompare";
        addToCompare.name = "addToCompare";
        addToCompare.value = i;
        addToCompare.class = "compare-check";
    
        const addToCompareLabel = document.createElement("label");
        addToCompareLabel.htmlFor = "addToCompare";
        addToCompareLabel.innerHTML = "Add To Compare";
    
        // checkbox.appendChild(addToCart);
        // checkbox.appendChild(addToCartLabel);
        // checkbox.appendChild(br);
        // checkbox.appendChild(addToCompare);
        // checkbox.appendChild(addToCompareLabel);
        
    
        contentImg.appendChild(img);
        // contentImg.appendChild(checkbox);
    
        //content-text
        const contentText = document.createElement("div");
        contentText.className = "content-text";
    
        const a = document.createElement("a");
        a.href = productJSON[i].productPageLink.url;
    
        const h3 = document.createElement("h3");
        h3.innerHTML = productJSON[i].title;
        a.appendChild(h3);
    
        const p = document.createElement("p");
        p.className = "rating-review"
        const italic = document.createElement("i");
        
        const rating = document.createElement("div");
        rating.className = "rating";
        const span1 = document.createElement("span");
        span1.className = "fa fa-star checked";
        rating.append(span1);
        const span2 = document.createElement("span");
        span2.className = "rating-text";
        span2.innerHTML = productJSON[i].ratings.overallRating;
        rating.appendChild(span2);
        rating.appendChild(span1);
    
        italic.innerHTML = "&ensp;" + productJSON[i].ratings.totalRatingsNum + " Ratings & " + productJSON[i].ratings.totalReviewsNum + " Reviews";
        p.appendChild(rating);
        p.appendChild(italic);
    
        const ul = document.createElement("ul");
        for(let j=0; j<productJSON[i].featuresList.length; j++){
            const li = document.createElement("li");
            li.innerHTML = productJSON[i].featuresList[j];
            ul.appendChild(li);
        }
    
        contentText.appendChild(a);
        contentText.appendChild(p);
        contentText.appendChild(ul);
        
        
        contentDetails.appendChild(contentImg);
        contentDetails.appendChild(contentText);
    
        //content-price
        const contentPrice = document.createElement("div");
        contentPrice.className = "content-price";
    
        const p1 = document.createElement("p");
        p1.style.fontSize = "30px";
        const b1 = document.createElement("b");
        b1.innerHTML = "&#8377; " + productJSON[i].price.finalPrice;
        p1.appendChild(b1);
    
        const p2 = document.createElement("p");
        p2.innerHTML = "<s>&#8377; " + productJSON[i].price.mrp + " </s> &ensp; <span style=color:#388e3c> "+ productJSON[i].price.discount.data + "% off</span>" 
    
        const p3 = document.createElement("p");
        p3.innerHTML = "Free delivery";
        
        const p4 = document.createElement("p");
        p4.innerHTML = "Upto <b> &#8377 " + productJSON[i].exchangeOfferDiscount.data + "</b> off on Exchange";
    
        const p5 = document.createElement("p");
        p5.innerHTML = "<b>" + productJSON[i].bankOffersLink.buttonText + " </b>";
        p5.style.color = productJSON[i].bankOffersLink.textColor;
    
        contentPrice.appendChild(p1);
        contentPrice.appendChild(p2);
        contentPrice.appendChild(p3);
        contentPrice.appendChild(p4);
        contentPrice.appendChild(p5);
    
        content.appendChild(contentDetails);
        content.appendChild(contentPrice);
    
    
        document.getElementById("products").appendChild(content);
    }
    
    //Add to Cart
    const cart = [];
    function addToCartFunction(event){
      //console.log(event.target.value);
      cart.push(productJSON[event.target.value].title);
      console.log(cart);
      localStorage.setItem(cartItems, cart);
    }
    
    //Compare
    
    var compareData = document.querySelectorAll("compare-check")
}