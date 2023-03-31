function displayCardsDate(collection) {
    let cardTemplate = document.getElementById("cb-card-template");
    console.log("TEST #1!")

    db.collection(collection).orderBy("last_updated", "desc").limit(6).get()
        .then(allPosts => {

            allPosts.forEach(doc => { //iterate through each doc
                let title = doc.data().title;
                console.log("allPosts: " + doc.data().title)
                let imageURL = doc.get("image");
                var docID = doc.id;
                let listingCard = cardTemplate.content.cloneNode(true);

                //update title and text and image etc.
                listingCard.querySelector('.cb-card-img').src = imageURL;
                listingCard.querySelector('.cb-card-title').innerHTML = title;
                listingCard.querySelector('.click-card').setAttribute('onclick', `location.href='./viewListing.html?docID=${docID}'`);
                console.log("TEST #2!");

                document.getElementById("cb-card-date").appendChild(listingCard)
            })
        })
}

// displayCardsDate("posts")

function displayCardsRandom(collection) {
    let cardTemplate = document.getElementById("cb-card-template");
    console.log("TEST #1!")

    // var allPostsArray = [];
    db.collection(collection).orderBy("last_updated", "desc").limit(6).get()
        .then(allPosts => {
            console.log('line 34:' + allPosts)
            var allPostsArray = [];
            allPosts.forEach(doc => { //store each doc id into an a newly created array
                allPostsArray.push(doc);
                // randomize items in allListingsArray
                allPostsArray.sort(() => Math.random() - 0.5);
                console.log('line 43 allPostsArray:' + allPostsArray)
            })
            return allPostsArray;
        })
           .then(allPostsArray => {
                console.log('line 47:' + allPostsArray)
            
                allPostsArray.forEach(doc => { //iterate through each doc
                // let title = doc.data().title;
                console.log("line 49: doc.id " + doc.id);
                let title = doc.get("title");
                let imageURL = doc.get("image");
                var docID = doc.id;
                let listingCard = cardTemplate.content.cloneNode(true);

                //update title and text and image etc.
                listingCard.querySelector('.cb-card-img').src = imageURL;
                listingCard.querySelector('.cb-card-title').innerHTML = title;
                listingCard.querySelector('.click-card').setAttribute('onclick', `location.href='./viewListing.html?docID=${docID}'`);
                console.log("TEST #2!");

                document.getElementById("cb-card-random").appendChild(listingCard)
                })
            })
}

displayCardsDate("posts")
displayCardsRandom("posts")

