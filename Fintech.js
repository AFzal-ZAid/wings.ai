  // Initialize Lucide icons
        lucide.createIcons();



const heroSlides = [
         {
                heading: "Sustainable Energy Payments for India's boldest disruptors",
                subtext: "Solar Financing | Subscription Billing | Integrated Dashboards",
                founderImage: "https://placehold.co/450x450/2E8B57/ffffff?text=Sarah", // Sea Green
                founderName: "Sarah",
                cardContent: `
                    <div class="p-2 dynamic-card-content">
                        <!-- Card Header (Green) -->
                        <div class="bg-[#A8F5D3] p-3 rounded-t-2xl text-center text-gray-900 font-bold">
                            <p class="text-sm font-extrabold uppercase tracking-widest flex items-center justify-center">
                                <i data-lucide="banknote" class="w-4 h-4 mr-2"></i> Solar Payments
                            </p>
                            <p class="text-xs text-gray-600 mt-0.5">POWERS SUNSPARK</p>
                        </div>
                        
                        <!-- Middle Transaction Detail (White) -->
                        <div class="bg-white p-6 rounded-xl text-gray-800 shadow-xl text-center">
                            <div class="flex items-center space-x-4 mb-4">
                                <!-- Product Image Placeholder -->
                                <div class="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0">
                                    <img src="https://placehold.co/64x64/2E8B57/ffffff?text=Solar" alt="Solar Panel" class="w-full h-full object-cover rounded-lg">
                                </div>
                                <div class="text-left flex-grow">
                                    <p class="text-sm font-semibold text-gray-600">Subscription Bill</p>
                                    <p class="text-2xl font-extrabold text-gray-900">&#8377; 1999</p>
                                </div>
                            </div>
                            <div class="mt-4 border-t pt-3">
                                <p class="text-xs font-bold text-gray-500 mb-2">Select Payment Method</p>
                                <div class="grid grid-cols-2 gap-2 text-razor-orange text-sm font-semibold">
                                    <span class="bg-orange-50 p-2 rounded-lg flex items-center justify-center"><i data-lucide="credit-card" class="w-4 h-4 mr-1"></i> Card</span>
                                    <span class="bg-orange-50 p-2 rounded-lg flex items-center justify-center"><i data-lucide="scan-line" class="w-4 h-4 mr-1"></i> UPI ID</span>
                                    <span class="bg-orange-50 p-2 rounded-lg flex items-center justify-center"><i data-lucide="globe" class="w-4 h-4 mr-1"></i> Netbanking</span>
                                    <span class="bg-orange-50 p-2 rounded-lg flex items-center justify-center"><i data-lucide="calendar-check" class="w-4 h-4 mr-1"></i> EMI</span>
                                </div>
                            </div>
                        </div>

                        <!-- Footer/Source -->
                        <div class="text-xs opacity-80 text-center font-bold pb-2">
                            SUNSPARK ENERGY FOUNDER
                        </div>
                    </div>
                `
            },
            {
                // New Founder 2: Rohan, focusing on tech gadgets
                heading: "Seamless In-Store Tech Payments for India's boldest disruptors",
                subtext: "Contactless Payments | Inventory Sync | Multi-Store Support",
                founderImage: "https://placehold.co/450x450/7A00B7/ffffff?text=Rohan", // Purple
                founderName: "Rohan",
                cardContent: `
                    <div class="p-2 dynamic-card-content">
                        <!-- Card Header (White) -->
                        <div class="bg-white/90 p-3 rounded-t-2xl text-center text-gray-900 font-bold backdrop-blur-sm">
                            <p class="text-sm font-extrabold uppercase tracking-widest flex items-center justify-center">
                                <i data-lucide="store" class="w-4 h-4 mr-2"></i> Swift POS Terminal
                            </p>
                            <p class="text-xs text-gray-600 mt-0.5">POWERS GADGET GURU</p>
                        </div>
                        
                        <!-- Middle QR Code Visualization (White terminal) -->
                        <div class="text-center flex flex-col items-center justify-center flex-grow p-4">
                            <div class="w-full bg-white p-6 rounded-2xl inline-block shadow-2xl relative">
                                <!-- Simple stylized terminal drawing -->
                                <div class="w-10 h-2 bg-gray-300 rounded mx-auto mb-2"></div>
                                <div class="w-32 h-20 bg-gray-100 border border-gray-300 mx-auto mb-2 rounded p-1">
                                    <!-- QR Code Placeholder -->
                                    <svg class="w-full h-full text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm2 6h4V5h-4v4zM13 13h8v8h-8v-8zm2 6h4v-4h-4v4z"/></svg>
                                </div>
                                <p class="text-xs font-semibold text-gray-600">Scan to Pay</p>
                                <div class="w-20 h-2 bg-gray-300 rounded mx-auto mt-2"></div>
                            </div>
                            <p class="mt-4 text-lg font-semibold text-white">Instant Contactless</p>
                        </div>

                        <!-- Footer/Source -->
                        <div class="text-xs opacity-80 text-center font-bold pb-2">
                            GADGET GURU FOUNDER
                        </div>
                    </div>
                `
            },
            {
                // New Founder 3: Priya, focusing on global digital services
                heading: "Global Freelance Payments for India's boldest disruptors",
                subtext: "Receive USD, EUR, and GBP directly from international clients",
                founderImage: "https://placehold.co/450x450/9370DB/ffffff?text=Priya", // Medium Purple
                founderName: "Priya",
                cardContent: `
                    <div class="p-2 dynamic-card-content">
                        <!-- Card Header (Pink) -->
                        <div class="bg-[#E6E0F8] p-3 rounded-t-2xl text-center text-gray-900 font-bold">
                            <p class="text-sm font-extrabold uppercase tracking-widest flex items-center justify-center">
                                <i data-lucide="plane" class="w-4 h-4 mr-2"></i> Global Payments
                            </p>
                            <p class="text-xs text-gray-600 mt-0.5">POWERS DIGITAL DROPS</p>
                        </div>
                        
                        <!-- Middle Card Form Simulation (White) -->
                        <div class="bg-white p-6 rounded-xl text-gray-800 shadow-xl">
                            <p class="text-sm font-bold mb-3 flex justify-between items-center">
                                Pay Using Card
                                <i data-lucide="credit-card" class="w-4 h-4 text-gray-400"></i>
                            </p>
                            
                            <div class="space-y-2 text-sm text-gray-600">
                                <div class="flex justify-between items-center border-b pb-2">
                                    <span>**** 1092</span>
                                    <span class="text-xs">08/25</span>
                                </div>
                                <p class="text-sm font-bold flex justify-between items-center border-b pb-2">
                                    Pay via 
                                    <img src="https://placehold.co/40x16/000000/ffffff?text=Google+Pay" alt="Google Pay" class="h-4">
                                </p>
                            </div>

                            <div class="flex justify-between items-center mt-4 pt-3 border-t">
                                <div>
                                    <p class="text-sm text-gray-500">USD</p>
                                    <!-- Updated text color -->
                                    <p class="text-3xl font-bold text-razor-orange">$ 1,200.00</p>
                                </div>
                                <!-- Updated button background/hover color -->
                                <button class="px-5 py-2 bg-razor-orange text-white font-semibold rounded-lg hover:bg-razor-orange-dark transition">Pay Now</button>
                            </div>
                        </div>

                        <!-- Footer/Source -->
                        <div class="text-xs opacity-80 text-center font-bold pb-2">
                            DIGITAL DROPS FOUNDER
                        </div>
                    </div>
                `
            }
        ];

        let currentSlide = 0;
        const totalSlides = heroSlides.length;
        const headingElement = document.getElementById('hero-heading');
        const subtextElement = document.getElementById('hero-subtext');
        const dynamicVizElement = document.getElementById('dynamic-viz');
        const founderPortraitElement = document.getElementById('founder-portrait');


        function updateHeroContent() {
            const slide = heroSlides[currentSlide];


            headingElement.textContent = slide.heading;
            subtextElement.textContent = slide.subtext;

            founderPortraitElement.style.opacity = 0;
            setTimeout(() => {
                founderPortraitElement.style.backgroundImage = `url("${slide.founderImage}")`;
    
                founderPortraitElement.innerHTML = `<span style="position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); font-size: 5rem; color: rgba(255, 255, 255, 0.4); font-family: cursive;">${slide.founderName}</span>`;
                founderPortraitElement.style.opacity = 0.9;
            }, 500);

            dynamicVizElement.style.opacity = 0;
            dynamicVizElement.style.transform = 'perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(-20px)'; // Slide out start
            
            setTimeout(() => {
                dynamicVizElement.innerHTML = slide.cardContent;
                lucide.createIcons();
                dynamicVizElement.style.opacity = 1;
                dynamicVizElement.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(2deg)';
            }, 500); 
        }


        window.nextSlide = function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateHeroContent();
        }

        window.prevSlide = function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateHeroContent();
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateHeroContent();
            // Start auto-slide every 6 seconds
            setInterval(window.nextSlide, 4000); 
        });