export function loadActionFiguresForm(contentSection) {
    contentSection.innerHTML = `
        <section class="mt-8 flex flex-col items-center md:items-start">
            <h2 class="text-xl font-semibold text-primary mb-4">Add to Action Figure Collection</h2>
            <form class="flex flex-col w-full max-w-lg space-y-4 mx-8" action="">
                <!-- Action Figure Name -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="figure-name" class="w-24 text-primary mr-2 hidden md:block text-left">Name:</label>
                    <input id="figure-name" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Action Figure Name" required>
                </div>
                <!-- Character -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="character" class="w-24 text-primary mr-2 hidden md:block text-left">Character:</label>
                    <input id="character" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Character (e.g., Batman, Superman)" required>
                </div>
                <!-- Manufacturer -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="manufacturer" class="w-24 text-primary mr-2 hidden md:block  text-left">Manufacturer:</label>
                    <input id="manufacturer" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="text" placeholder="Manufacturer (e.g., Hasbro, Mattel)">
                </div>
                <!-- Year -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="year" class="w-24 text-primary mr-2 hidden md:block  text-left">Year:</label>
                    <input id="year" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="number" placeholder="Year of Release (e.g., 1995)" min="1900" max="2099">
                </div>
                <!-- Condition -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="condition" class="w-24 text-primary mr-2 hidden md:block text-left">Condition:</label>
                    <select id="condition" class="flex-1 h-10 p-2 border border-secondary rounded w-48">
                        <option value="" disabled selected>Select Condition</option>
                        <option value="Mint">Mint</option>
                        <option value="Near Mint">Near Mint</option>
                        <option value="Very Fine">Very Fine</option>
                        <option value="Fine">Fine</option>
                        <option value="Very Good">Very Good</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>
                <!-- Estimated Value -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="value" class="w-24 text-primary mr-2 hidden md:block text-left">Value ($):</label>
                    <input id="value" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="number" placeholder="Estimated Value" min="0" step="0.01">
                </div>
                <!-- Image Link -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="image-link" class="w-24 text-primary mr-2 hidden md:block text-left">Image Link:</label>
                    <input id="image-link" class="flex-1 h-10 p-2 border border-secondary rounded w-48" type="url" placeholder="https://example.com/figure.jpg">
                </div>
                <!-- Notes -->
                <div class="flex flex-col md:flex-row items-center">
                    <label for="notes" class="w-24 text-primary mr-2 hidden md:block text-left">Notes:</label>
                    <textarea id="notes" class="flex-1 h-20 p-2 border border-secondary rounded w-48" placeholder="Additional notes about this action figure (e.g., Limited edition)"></textarea>
                </div>
                <!-- Submit Button -->
                <div class="flex justify-center md:justify-end">
                    <button type="submit" class="mt-4 px-6 py-2 bg-accent text-white font-semibold rounded hover:bg-accent-hover focus:outline-none w-48 md:w-auto">
                        Add Action Figure
                    </button>
                </div>
            </form>
        </section>
    `;
}
