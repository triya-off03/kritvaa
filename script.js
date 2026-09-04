/* =========================================================
   KRITVAA JAVASCRIPT
========================================================= */


/* =========================================================
   STATE DATA
========================================================= */

const states = [

    {
        name: "Rajasthan",
        title: "Land of Kings & Colors",
        emoji: "🐪",
        color: "#9e292c",
        text: "Rajasthan is known for colorful textiles, block printing, blue pottery, folk art and vibrant desert craft traditions.",
        tags: ["Block Printing", "Blue Pottery", "Folk Art"]
    },

    {
        name: "Gujarat",
        title: "Where Tradition Thrives",
        emoji: "🪡",
        color: "#b96a1c",
        text: "Gujarat is celebrated for Bandhani, embroidery, beadwork and the living craft traditions of Kutch.",
        tags: ["Bandhani", "Embroidery", "Kutch"]
    },

    {
        name: "Maharashtra",
        title: "Spirit of Courage",
        emoji: "🥁",
        color: "#8f3028",
        text: "Maharashtra's Warli art, Paithani weaving and folk traditions carry stories of community and everyday life.",
        tags: ["Warli", "Paithani", "Folk Arts"]
    },

    {
        name: "Kerala",
        title: "God's Own Heritage",
        emoji: "🌴",
        color: "#17604a",
        text: "Kerala is known for mural painting, coir craft, handloom and traditions shaped by its landscapes and backwaters.",
        tags: ["Mural Art", "Handloom", "Coir"]
    },

    {
        name: "West Bengal",
        title: "Art, Culture & Literature",
        emoji: "🎭",
        color: "#245b70",
        text: "Terracotta, Kantha embroidery and Patachitra reflect Bengal's rich artistic imagination.",
        tags: ["Kantha", "Terracotta", "Patachitra"]
    },

    {
        name: "Tamil Nadu",
        title: "Timeless Temples & Traditions",
        emoji: "🛕",
        color: "#583c88",
        text: "Tamil Nadu is famous for bronze casting, Kanchipuram silk and classical traditions passed through generations.",
        tags: ["Bronze", "Silk", "Classical Arts"]
    },

    {
        name: "Uttar Pradesh",
        title: "Heritage of the Heartland",
        emoji: "🏛️",
        color: "#12616d",
        text: "Chikankari, brassware, carpets and celebrated craft traditions form an important part of Uttar Pradesh's heritage.",
        tags: ["Chikankari", "Brass", "Carpets"]
    },

    {
        name: "Punjab",
        title: "Land of Five Rivers",
        emoji: "🥁",
        color: "#b17b16",
        text: "Punjab's Phulkari embroidery, woodwork and textiles are full of color, energy and cultural identity.",
        tags: ["Phulkari", "Woodwork", "Textiles"]
    },

    {
        name: "Odisha",
        title: "Stories in Every Motif",
        emoji: "🎨",
        color: "#8a3b2f",
        text: "Pattachitra, applique and silver filigree carry stories through intricate traditional craft.",
        tags: ["Pattachitra", "Applique", "Filigree"]
    },

    {
        name: "Karnataka",
        title: "Crafted in Sandalwood",
        emoji: "🪷",
        color: "#55702b",
        text: "Sandalwood carving, Mysore silk and Bidriware represent generations of craftsmanship.",
        tags: ["Sandalwood", "Silk", "Bidriware"]
    },

    {
        name: "Assam",
        title: "Woven by the Brahmaputra",
        emoji: "🧶",
        color: "#176b68",
        text: "Muga silk, bamboo craft and weaving traditions connect art with everyday life.",
        tags: ["Muga Silk", "Bamboo", "Weaving"]
    },

    {
        name: "Bihar",
        title: "Threads of Mithila",
        emoji: "🖌️",
        color: "#7b3f73",
        text: "Madhubani painting and handcraft traditions tell stories through bold lines, symbols and colors.",
        tags: ["Madhubani", "Textiles", "Folk Art"]
    },

    {
        name: "Chhattisgarh",
        title: "Forest, Folk & Craft",
        emoji: "🌿",
        color: "#4c6d2d",
        text: "Tribal metalwork, bell metal and forest-rooted traditions create distinctive craft forms.",
        tags: ["Bell Metal", "Tribal Art", "Wood"]
    },

    {
        name: "Goa",
        title: "Coastal Craft Stories",
        emoji: "🐚",
        color: "#2d6c78",
        text: "Pottery, coconut craft and coastal traditions reflect Goa's rich cultural blend.",
        tags: ["Pottery", "Coconut Craft", "Coastal Art"]
    },

    {
        name: "Haryana",
        title: "Heritage in Every Stitch",
        emoji: "🧵",
        color: "#8c5523",
        text: "Embroidery, weaving and rural craft traditions celebrate everyday life across Haryana.",
        tags: ["Embroidery", "Weaving", "Folk Craft"]
    },

    {
        name: "Himachal Pradesh",
        title: "Mountain Made",
        emoji: "🏔️",
        color: "#41647b",
        text: "Wool weaving, wood carving and Himalayan crafts have been shaped by mountain life.",
        tags: ["Wool", "Wood", "Weaving"]
    },

    {
        name: "Jharkhand",
        title: "Tribal Art Alive",
        emoji: "🌾",
        color: "#5a6f2e",
        text: "Sohrai and Khovar art reflect nature, community and ancient visual storytelling.",
        tags: ["Sohrai", "Khovar", "Tribal Art"]
    },

    {
        name: "Madhya Pradesh",
        title: "Heart of Indian Craft",
        emoji: "🦚",
        color: "#79502a",
        text: "Gond art, Chanderi textiles and tribal traditions thrive across the heartland.",
        tags: ["Gond Art", "Chanderi", "Tribal Art"]
    },

    {
        name: "Manipur",
        title: "Grace in Every Thread",
        emoji: "🌸",
        color: "#77446d",
        text: "Handloom, pottery and traditional arts express the region's distinctive identity.",
        tags: ["Handloom", "Pottery", "Textiles"]
    },

    {
        name: "Meghalaya",
        title: "Living Root Traditions",
        emoji: "🌱",
        color: "#2e6659",
        text: "Bamboo, cane and indigenous craft traditions grow alongside the hills and forests.",
        tags: ["Bamboo", "Cane", "Weaving"]
    },

    {
        name: "Mizoram",
        title: "Woven Mountain Stories",
        emoji: "🧺",
        color: "#734b5e",
        text: "Traditional weaving and bamboo crafts carry community patterns and stories.",
        tags: ["Weaving", "Bamboo", "Textiles"]
    },

    {
        name: "Nagaland",
        title: "Many Tribes, Many Stories",
        emoji: "🪶",
        color: "#6b4b2f",
        text: "Textiles, beadwork and traditional motifs celebrate the diversity of Naga communities.",
        tags: ["Textiles", "Beadwork", "Tribal Art"]
    },

    {
        name: "Sikkim",
        title: "Himalayan Handcraft",
        emoji: "🏔️",
        color: "#42665e",
        text: "Wool, wood and Himalayan crafts reflect the extraordinary landscape of Sikkim.",
        tags: ["Wool", "Wood", "Craft"]
    },

    {
        name: "Telangana",
        title: "Threads of the Deccan",
        emoji: "🧿",
        color: "#7c4c27",
        text: "Pochampally ikat and metal craft carry a strong Deccan design vocabulary.",
        tags: ["Ikat", "Metal Craft", "Textiles"]
    },

    {
        name: "Tripura",
        title: "Bamboo & Beyond",
        emoji: "🎋",
        color: "#3f684d",
        text: "Bamboo, cane and handwoven traditions are central to Tripura's craft heritage.",
        tags: ["Bamboo", "Cane", "Weaving"]
    },

    {
        name: "Uttarakhand",
        title: "Crafted by the Mountains",
        emoji: "🌲",
        color: "#48624a",
        text: "Bamboo, wool and woodwork reflect the rhythm of Himalayan communities.",
        tags: ["Bamboo", "Wool", "Wood"]
    },

    {
        name: "Andhra Pradesh",
        title: "Threads of Tradition",
        emoji: "🪷",
        color: "#87512b",
        text: "Kalamkari, Kondapalli toys and weaving traditions bring stories to life.",
        tags: ["Kalamkari", "Toys", "Weaving"]
    },

    {
        name: "Arunachal Pradesh",
        title: "Crafts of the Dawn",
        emoji: "🏞️",
        color: "#4f6656",
        text: "Bamboo, cane, weaving and indigenous craft traditions reflect the state's many communities.",
        tags: ["Bamboo", "Cane", "Weaving"]
    }

];


/* =========================================================
   VARIABLES
========================================================= */

const statesPerPage = 8;

let currentPage = 0;


/* =========================================================
   ELEMENTS
========================================================= */

const stateGrid = document.getElementById("stateGrid");
const pageNumber = document.getElementById("pageNumber");
const progress = document.getElementById("progress");
const featuredNumber = document.getElementById("featuredNumber");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const viewAllButton = document.getElementById("viewAllButton");
const surpriseButton = document.getElementById("surpriseButton");

const stateModal = document.getElementById("stateModal");
const closeStateModal = document.getElementById("closeStateModal");

const modalStateName = document.getElementById("modalStateName");
const modalStateText = document.getElementById("modalStateText");
const modalTags = document.getElementById("modalTags");

const allStatesModal = document.getElementById("allStatesModal");
const closeAllStatesModal = document.getElementById("closeAllStatesModal");
const allStatesGrid = document.getElementById("allStatesGrid");


/* =========================================================
   RENDER 8 STATE BOXES
========================================================= */

function renderStates() {

    const start = currentPage * statesPerPage;

    const visibleStates = states.slice(
        start,
        start + statesPerPage
    );

    stateGrid.innerHTML = "";


    visibleStates.forEach((state, index) => {

        const actualIndex = start + index;

        const card = document.createElement("button");

        card.type = "button";

        card.className = "state-card";

        card.style.setProperty(
            "--state-color",
            state.color
        );

        card.innerHTML = `
            <div class="state-card-top">

                <span class="state-number">
                    ${String(actualIndex + 1).padStart(2, "0")}
                </span>

                <span class="state-emoji">
                    ${state.emoji}
                </span>

            </div>

            <h3>${state.name}</h3>

            <p>${state.title}</p>
        `;

        card.addEventListener("click", function () {
            openState(actualIndex);
        });

        stateGrid.appendChild(card);

    });


    const totalPages =
        Math.ceil(states.length / statesPerPage);


    pageNumber.textContent =
        `${currentPage + 1} / ${totalPages}`;


    featuredNumber.textContent =
        String(visibleStates.length).padStart(2, "0");


    progress.style.width =
        `${((currentPage + 1) / totalPages) * 100}%`;

}


/* =========================================================
   OPEN STATE
========================================================= */

function openState(index) {

    const state = states[index];

    if (!state) {
        return;
    }

    modalStateName.textContent =
        state.name;

    modalStateText.textContent =
        state.text;


    modalTags.innerHTML = "";


    state.tags.forEach(tag => {

        const tagElement =
            document.createElement("span");

        tagElement.textContent =
            tag;

        modalTags.appendChild(tagElement);

    });


    stateModal.showModal();
}


/* =========================================================
   PREVIOUS / NEXT
========================================================= */

previousButton.addEventListener(
    "click",
    function () {

        const totalPages =
            Math.ceil(states.length / statesPerPage);

        currentPage =
            (currentPage - 1 + totalPages) % totalPages;

        renderStates();
    }
);


nextButton.addEventListener(
    "click",
    function () {

        const totalPages =
            Math.ceil(states.length / statesPerPage);

        currentPage =
            (currentPage + 1) % totalPages;

        renderStates();
    }
);


/* =========================================================
   VIEW ALL 28 STATES
========================================================= */

viewAllButton.addEventListener(
    "click",
    function () {

        allStatesGrid.innerHTML = "";


        states.forEach((state, index) => {

            const item =
                document.createElement("button");

            item.type = "button";

            item.className = "all-state";

            item.style.setProperty(
                "--state-color",
                state.color
            );

            item.innerHTML = `
                <small>
                    ${String(index + 1).padStart(2, "0")}
                    · ${state.emoji}
                </small>

                <strong>
                    ${state.name}
                </strong>
            `;


            item.addEventListener(
                "click",
                function () {

                    allStatesModal.close();

                    openState(index);

                }
            );


            allStatesGrid.appendChild(item);

        });


        allStatesModal.showModal();

    }
);


/* =========================================================
   SURPRISE ME
========================================================= */

surpriseButton.addEventListener(
    "click",
    function () {

        const randomIndex =
            Math.floor(
                Math.random() * states.length
            );

        currentPage =
            Math.floor(
                randomIndex / statesPerPage
            );

        renderStates();

        setTimeout(
            function () {
                openState(randomIndex);
            },
            150
        );

    }
);


/* =========================================================
   CLOSE MODALS
========================================================= */

closeStateModal.addEventListener(
    "click",
    function () {
        stateModal.close();
    }
);

closeAllStatesModal.addEventListener(
    "click",
    function () {
        allStatesModal.close();
    }
);


/* Close state modal by clicking outside */

stateModal.addEventListener(
    "click",
    function (event) {

        const rect =
            stateModal.getBoundingClientRect();

        const clickedInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickedInside) {
            stateModal.close();
        }

    }
);


/* =========================================================
   KAYA
========================================================= */

const kayaButton =
    document.getElementById("kayaButton");

const kayaPanel =
    document.getElementById("kayaPanel");

const closeKaya =
    document.getElementById("closeKaya");

const kayaMessage =
    document.getElementById("kayaMessage");


kayaButton.addEventListener(
    "click",
    function () {

        kayaPanel.classList.add("open");

    }
);


closeKaya.addEventListener(
    "click",
    function () {

        kayaPanel.classList.remove("open");

    }
);


/* KAYA OPTIONS */

document
    .querySelectorAll("[data-kaya]")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const choice =
                    button.dataset.kaya;


                if (choice === "rajasthan") {

                    kayaMessage.textContent =
                        "Rajasthan is famous for colorful textiles, block printing, blue pottery, folk arts and beautiful desert traditions. 🐪✨";

                }


                else if (choice === "crafts") {

                    kayaMessage.textContent =
                        "Explore the Cultural Passport to discover crafts such as Warli, Pattachitra, Phulkari, Kalamkari, Madhubani and many more. 🎨";

                }


                else if (choice === "passport") {

                    kayaMessage.textContent =
                        "Choose any state box to open its cultural story. You can also use the arrows or Surprise me to explore all 28 states. 🇮🇳✨";

                }

            }
        );

    });


/* =========================================================
   HERO SEARCH
========================================================= */

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");


searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!query) {

            document
                .getElementById("passport")
                .scrollIntoView({
                    behavior: "smooth"
                });

            return;
        }


        const foundIndex =
            states.findIndex(state => {

                const searchableText = [

                    state.name,
                    state.title,
                    state.text,
                    ...state.tags

                ]
                    .join(" ")
                    .toLowerCase();


                return searchableText.includes(query);

            });


        if (foundIndex !== -1) {

            currentPage =
                Math.floor(
                    foundIndex / statesPerPage
                );

            renderStates();


            document
                .getElementById("passport")
                .scrollIntoView({
                    behavior: "smooth"
                });


            setTimeout(
                function () {
                    openState(foundIndex);
                },
                500
            );

        }

        else {

            document
                .getElementById("passport")
                .scrollIntoView({
                    behavior: "smooth"
                });


            setTimeout(
                function () {

                    kayaPanel.classList.add("open");

                    kayaMessage.textContent =
                        `I couldn't find "${searchInput.value}". Try searching for a state, craft or tradition. ✨`;

                },
                500
            );

        }

    }
);


/* =========================================================
   START WEBSITE
========================================================= */

renderStates();