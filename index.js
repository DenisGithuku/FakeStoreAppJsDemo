const base_url = "https://fakestoreapi.com"

fetch(`${base_url}/products`)
    .then(response => {
        setTimeout(() => {
            showLoader()
        }, 3000)
        response.json().then(products => {
            // loop through products array and create
            // a product card with every product
            products.forEach(product => {
                displayProducts(product)
            })

        })
    })
    .catch(error => {
        console.error(error)
    })


// displays products on page
const displayProducts = (product) => {

    // product destructuring
    const { title, description, category, price, image, rating } = product

    // title
    const productTitle = document.createElement('p')
    productTitle.setAttribute('class', 'product-title')
    productTitle.innerHTML = title

    //description
    const productDescription = document.createElement('p')
    productDescription.innerHTML = description

    // category
    const productCategory = document.createElement('p')
    productCategory.innerHTML = `Category: ${category}`

    // price
    const productPrice = document.createElement('p')
    productPrice.innerHTML = `Price: ${price}`

    //image
    const productImage = document.createElement('img')
    productImage.setAttribute("src" , image)
    productImage.setAttribute("width", "100px")
    productImage.setAttribute("height", "100px")


    //rating
    const productRating = document.createElement('span')
    productRating.innerHTML = `Rated: ${rating.rate}`


    // create product card
    const productCard = document.createElement('div')
    productCard.setAttribute("class", "product-card")
    productCard.appendChild(productTitle)
    productCard.appendChild(productDescription)
    productCard.appendChild(productCategory)
    productCard.appendChild(productPrice)
    productCard.appendChild(productImage)
    productCard.appendChild(productRating)

    // append card to body

    document.querySelector('.container').appendChild(productCard)
}

const showLoader = () => {
    const loaderClasses = document.querySelector('.loader-wrapper').classList
    if (loaderClasses.contains('hidden')) {
        loaderClasses.remove('hidden')
    } else {
        loaderClasses.add('hidden')
    }
}